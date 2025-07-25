// Updated js/chapter-navigation.js - Client-side only, no server dependency
// This file is now purely for browser functionality

// Simple client-side helper functions for navigation and simulations
class ChapterNavigation {
    // Generate embed code for simulations
    static generateEmbedCode(simulationId, params = {}) {
        const paramsStr = Object.keys(params).length > 0 ? 
            `, ${JSON.stringify(params)}` : '';
        
        return `<div class="physics-simulation" data-sim-id="${simulationId}">
    <div class="simulation-container" id="sim-${simulationId}-container" style="height: 400px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>Interactive Simulation</strong> - Explore physics concepts through hands-on interaction.
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    if (typeof SimulationUtils !== 'undefined') {
        SimulationUtils.renderSimulation('${simulationId}', 'sim-${simulationId}-container'${paramsStr});
    }
});
</script>`;
    }
    
    // Copy text to clipboard
    static copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Code copied to clipboard!');
        }).catch(() => {
            alert('Copy failed. Code:\n\n' + text);
        });
    }
    
    // Client-side page navigation helpers (for any future use)
    static navigateToPage(chapterSlug, pageSlug) {
        window.location.href = `/physics-website/chapters/${chapterSlug}/${pageSlug}/`;
    }
    
    static navigateToChapter(chapterSlug) {
        window.location.href = `/physics-website/chapters/${chapterSlug}/`;
    }
    
    // Utility function for smooth scrolling to elements
    static scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Initialize any client-side navigation features
    static init() {
        // Add keyboard shortcuts for navigation if on a chapter page
        document.addEventListener('keydown', function(e) {
            // Only activate on chapter pages
            if (window.location.pathname.includes('/chapters/')) {
                if (e.key === 'ArrowLeft' && e.ctrlKey) {
                    // Ctrl + Left Arrow - go to previous page
                    const prevLink = document.querySelector('.nav-link.nav-prev');
                    if (prevLink) {
                        e.preventDefault();
                        prevLink.click();
                    }
                } else if (e.key === 'ArrowRight' && e.ctrlKey) {
                    // Ctrl + Right Arrow - go to next page
                    const nextLink = document.querySelector('.nav-link.nav-next');
                    if (nextLink) {
                        e.preventDefault();
                        nextLink.click();
                    }
                } else if (e.key === 'ArrowUp' && e.ctrlKey) {
                    // Ctrl + Up Arrow - go to chapter overview
                    const chapterLink = document.querySelector('.nav-link.nav-chapter');
                    if (chapterLink) {
                        e.preventDefault();
                        chapterLink.click();
                    }
                }
            }
        });
        
        // Add smooth scrolling to all internal links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                ChapterNavigation.scrollToElement(targetId);
            });
        });
        
        console.log('ChapterNavigation client-side features initialized');
    }
}

// Auto-initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    ChapterNavigation.init();
});

// Make available globally for browser use
if (typeof window !== 'undefined') {
    window.ChapterNavigation = ChapterNavigation;
}

// Remove server-side exports - this file is now client-side only
// The old module.exports has been removed to eliminate server dependency