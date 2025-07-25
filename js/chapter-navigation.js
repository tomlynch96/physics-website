// Chapter Navigation Configuration
// This file defines the order of pages within each chapter

const CHAPTER_STRUCTURE = {
    'chapter-0': {
        title: 'Demo & Testing Chapter',
        pages: [
            {
                slug: 'page-1',
                title: 'Introduction & Simulations',
                description: 'Interactive demos and basic concepts'
            },
            {
                slug: 'page-2',
                title: 'Mathematical Analysis',
                description: 'Equations and self-marking questions'
            }
        ]
    },
    'chapter-1': {
        title: 'Mechanics - Motion and Forces',
        pages: [
            {
                slug: 'introduction-to-motion',
                title: 'Introduction to Motion',
                description: 'Displacement, velocity, acceleration concepts and vector analysis'
            },
            {
                slug: 'equations-of-motion',
                title: 'Equations of Motion', 
                description: 'SUVAT equations derivation and problem-solving techniques'
            },
            {
                slug: 'forces-and-newtons-laws',
                title: 'Forces and Newton\'s Laws',
                description: 'Three laws of motion with free body diagrams'
            },
            {
                slug: 'projectile-motion',
                title: 'Projectile Motion',
                description: 'Independence of motion components and trajectory analysis'
            },
            {
                slug: 'momentum-and-collisions',
                title: 'Momentum and Collisions',
                description: 'Conservation laws and impulse calculations'
            },
            {
                slug: 'equilibrium-and-moments',
                title: 'Equilibrium and Moments',
                description: 'Balanced forces and rotational equilibrium'
            },
            {
                slug: 'terminal-velocity',
                title: 'Terminal Velocity',
                description: 'Motion through fluids and drag forces'
            }
        ]
    },
    'chapter-2': {
        title: 'Energy, Work and Power',
        pages: [
            {
                slug: 'work-and-energy-concepts',
                title: 'Work and Energy Concepts',
                description: 'Fundamental definitions and energy transformations'
            },
            {
                slug: 'kinetic-and-potential-energy',
                title: 'Kinetic and Potential Energy',
                description: 'Energy calculations and conservation principles'
            },
            {
                slug: 'power-and-efficiency',
                title: 'Power and Efficiency',
                description: 'Power calculations in mechanical systems'
            },
            {
                slug: 'springs-and-elastic-energy',
                title: 'Springs and Elastic Energy',
                description: 'Hooke\'s law and elastic potential energy'
            },
            {
                slug: 'energy-conservation-problems',
                title: 'Energy Conservation Problems',
                description: 'Complex multi-stage energy calculations'
            }
        ]
    },
    'chapter-3': {
        title: 'Materials and Their Properties',
        pages: [
            {
                slug: 'density-and-pressure',
                title: 'Density and Pressure',
                description: 'Material properties and pressure calculations'
            },
            {
                slug: 'stress-strain-youngs-modulus',
                title: 'Stress, Strain and Young\'s Modulus',
                description: 'Mechanical testing of materials'
            },
            {
                slug: 'elasticity-and-plasticity',
                title: 'Elasticity and Plasticity',
                description: 'Deformation behavior and material limits'
            },
            {
                slug: 'material-selection',
                title: 'Material Selection',
                description: 'Engineering applications and safety factors'
            }
        ]
    }
    // Add more chapters as you develop them following the physics_website_structure.md plan
};

// Navigation Helper Functions
class ChapterNavigation {
    static getChapterStructure(chapterSlug) {
        return CHAPTER_STRUCTURE[chapterSlug] || null;
    }
    
    static getPageNavigation(chapterSlug, currentPageSlug) {
        const chapter = this.getChapterStructure(chapterSlug);
        if (!chapter) return null;
        
        const currentIndex = chapter.pages.findIndex(page => page.slug === currentPageSlug);
        if (currentIndex === -1) return null;
        
        const prevPage = currentIndex > 0 ? chapter.pages[currentIndex - 1] : null;
        const nextPage = currentIndex < chapter.pages.length - 1 ? chapter.pages[currentIndex + 1] : null;
        
        return {
            current: chapter.pages[currentIndex],
            previous: prevPage ? {
                ...prevPage,
                url: `/physics-website/chapters/${chapterSlug}/${prevPage.slug}/`
            } : null,
            next: nextPage ? {
                ...nextPage,
                url: `/physics-website/chapters/${chapterSlug}/${nextPage.slug}/`
            } : null,
            chapterOverview: `/physics-website/chapters/${chapterSlug}/`
        };
    }
    
    static generateChapterIndex(chapterSlug) {
        const chapter = this.getChapterStructure(chapterSlug);
        if (!chapter) return '';
        
        return chapter.pages.map((page, index) => `
            <a href="/physics-website/chapters/${chapterSlug}/${page.slug}/" class="chapter-link">
                <span class="page-number">${index + 1}</span>
                <div class="page-info">
                    <strong>${page.title}</strong>
                    <p>${page.description}</p>
                </div>
                <span class="page-arrow">→</span>
            </a>
        `).join('');
    }
    
    static generateNavigationHTML(chapterSlug, currentPageSlug) {
        const nav = this.getPageNavigation(chapterSlug, currentPageSlug);
        if (!nav) return '';
        
        return `
            <div class="navigation">
                ${nav.previous ? `
                    <a href="${nav.previous.url}" class="nav-link nav-prev">
                        ← Previous: ${nav.previous.title}
                    </a>
                ` : '<div></div>'}
                
                <a href="${nav.chapterOverview}" class="nav-link nav-chapter">
                    📚 Chapter Overview
                </a>
                
                ${nav.next ? `
                    <a href="${nav.next.url}" class="nav-link nav-next">
                        Next: ${nav.next.title} →
                    </a>
                ` : '<div></div>'}
            </div>
        `;
    }
}

// Export for use in templates and build process
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CHAPTER_STRUCTURE,
        ChapterNavigation
    };
}

// Make available globally for browser use
if (typeof window !== 'undefined') {
    window.CHAPTER_STRUCTURE = CHAPTER_STRUCTURE;
    window.ChapterNavigation = ChapterNavigation;
}