// Enhanced simulations database with more detailed configurations
const SIMULATIONS_DATA = [
    {
        id: 'pendulum',
        title: 'Simple Pendulum',
        description: 'Explore the motion of a simple pendulum and understand period, frequency, and energy conservation.',
        category: 'mechanics',
        difficulty: 'beginner',
        icon: '⚖️',
        featured: true,
        controls: [
            { name: 'length', label: 'Length (m)', type: 'range', min: 0.5, max: 3.0, step: 0.1, default: 1.5 },
            { name: 'angle', label: 'Initial Angle (°)', type: 'range', min: 5, max: 45, step: 1, default: 20 },
            { name: 'gravity', label: 'Gravity (m/s²)', type: 'range', min: 1, max: 15, step: 0.1, default: 9.81 }
        ]
    },
    {
        id: 'standing-wave',
        title: 'Standing Wave Simulator',
        description: 'Interactive visualization of standing waves with different boundary conditions. Click to place tracking beads and observe wave behavior.',
        category: 'waves',
        difficulty: 'intermediate',
        icon: '〰️',
        featured: true,
        controls: [
            { name: 'harmonic', label: 'Harmonic', type: 'range', min: 1, max: 5, step: 1, default: 1 },
            { name: 'amplitude', label: 'Amplitude', type: 'range', min: 10, max: 100, step: 5, default: 50 },
            { name: 'damping', label: 'Damping', type: 'range', min: 0, max: 0.1, step: 0.01, default: 0.02 },
            { name: 'leftBoundary', label: 'Left Boundary', type: 'select', options: ['open', 'closed'], default: 'open' },
            { name: 'rightBoundary', label: 'Right Boundary', type: 'select', options: ['open', 'closed'], default: 'closed' }
        ]
    },
    {
        id: 'wave-interference',
        title: 'Wave Interference',
        description: 'Visualize how waves interact through constructive and destructive interference patterns.',
        category: 'waves',
        difficulty: 'intermediate',
        icon: '🌊',
        featured: true,
        controls: [
            { name: 'frequency1', label: 'Wave 1 Frequency', type: 'range', min: 1, max: 10, step: 0.5, default: 4 },
            { name: 'frequency2', label: 'Wave 2 Frequency', type: 'range', min: 1, max: 10, step: 0.5, default: 5 },
            { name: 'amplitude', label: 'Amplitude', type: 'range', min: 0.5, max: 2.0, step: 0.1, default: 1.2 }
        ]
    },
    {
        id: 'electric-field',
        title: 'Electric Field Visualization',
        description: 'Interactive electric field mapping with customizable charge configurations.',
        category: 'electromagnetism',
        difficulty: 'intermediate',
        icon: '⚡',
        featured: true,
        controls: [
            { name: 'charge1', label: 'Charge 1 (μC)', type: 'range', min: -10, max: 10, step: 1, default: 8 },
            { name: 'charge2', label: 'Charge 2 (μC)', type: 'range', min: -10, max: 10, step: 1, default: -3 },
            { name: 'distance', label: 'Distance (cm)', type: 'range', min: 5, max: 30, step: 1, default: 15 }
        ]
    },
    {
        id: 'projectile-motion',
        title: 'Projectile Motion',
        description: 'Analyze the trajectory of projectiles under different initial conditions and environments.',
        category: 'mechanics',
        difficulty: 'beginner',
        icon: '🎯',
        featured: false,
        controls: [
            { name: 'velocity', label: 'Initial Velocity (m/s)', type: 'range', min: 10, max: 100, step: 5, default: 50 },
            { name: 'angle', label: 'Launch Angle (°)', type: 'range', min: 0, max: 90, step: 5, default: 45 },
            { name: 'gravity', label: 'Gravity (m/s²)', type: 'range', min: 1, max: 15, step: 0.5, default: 9.81 }
        ]
    },
    {
        id: 'quantum-tunneling',
        title: 'Quantum Tunneling',
        description: 'Explore quantum mechanical tunneling through potential barriers.',
        category: 'quantum',
        difficulty: 'advanced',
        icon: '⚛️',
        featured: false,
        controls: [
            { name: 'energy', label: 'Particle Energy (eV)', type: 'range', min: 1, max: 10, step: 0.5, default: 5 },
            { name: 'barrier_height', label: 'Barrier Height (eV)', type: 'range', min: 2, max: 15, step: 0.5, default: 8 },
            { name: 'barrier_width', label: 'Barrier Width (nm)', type: 'range', min: 0.5, max: 5, step: 0.1, default: 2 }
        ]
    },
    {
        id: 'heat-diffusion',
        title: 'Heat Diffusion',
        description: 'Simulate heat transfer through different materials and geometries.',
        category: 'thermodynamics',
        difficulty: 'intermediate',
        icon: '🔥',
        featured: false,
        controls: [
            { name: 'temperature', label: 'Initial Temperature (°C)', type: 'range', min: 0, max: 200, step: 10, default: 100 },
            { name: 'conductivity', label: 'Thermal Conductivity', type: 'range', min: 0.1, max: 2.0, step: 0.1, default: 1.0 },
            { name: 'material', label: 'Material', type: 'select', options: ['copper', 'aluminum', 'steel', 'glass'], default: 'copper' }
        ]
    },
    {
        id: 'doppler-effect',
        title: 'Doppler Effect',
        description: 'Understand frequency shifts due to relative motion between source and observer.',
        category: 'waves',
        difficulty: 'intermediate',
        icon: '🚗',
        featured: false,
        controls: [
            { name: 'source_velocity', label: 'Source Velocity (m/s)', type: 'range', min: 0, max: 100, step: 5, default: 30 },
            { name: 'observer_velocity', label: 'Observer Velocity (m/s)', type: 'range', min: 0, max: 100, step: 5, default: 0 },
            { name: 'frequency', label: 'Source Frequency (Hz)', type: 'range', min: 100, max: 1000, step: 50, default: 440 }
        ]
    },

    {
        id: 'vector-addition',
        title: 'Vector Addition',
        description: 'Interactive vector addition with drag-and-drop functionality. Adjust scale to fit vectors on paper.',
        category: 'mechanics',
        difficulty: 'beginner',
        icon: '🧭',
        featured: true,
        controls: [
            { name: 'scale', label: 'Scale (1cm = N)', type: 'range', min: 1, max: 100, step: 1, default: 10 },
            { name: 'displayMode', label: 'Display Mode', type: 'select', options: ['force', 'length'], default: 'force' },
            { name: 'showGrid', label: 'Show Grid', type: 'checkbox', default: true },
            { name: 'showComponents', label: 'Show Labels', type: 'checkbox', default: true }
        ]
    }
];

// Utility class for simulation management
class SimulationUtils {
    static getAll() {
        return SIMULATIONS_DATA;
    }
    
    static getById(id) {
        return SIMULATIONS_DATA.find(sim => sim.id === id);
    }
    
    static getByCategory(category) {
        return SIMULATIONS_DATA.filter(sim => sim.category === category);
    }
    
    static getFeatured() {
        return SIMULATIONS_DATA.filter(sim => sim.featured);
    }
    
    static renderSimulation(simulationId, containerId, params = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container ${containerId} not found`);
            return;
        }
        
        const simulation = this.getById(simulationId);
        if (!simulation) {
            console.error(`Simulation ${simulationId} not found`);
            return;
        }
        
        // Special handling for standing wave simulation
        if (simulationId === 'standing-wave') {
            this.renderStandingWave(container, params);
            return;
        }
        
        // For other simulations, create a placeholder with gradient based on category
        const gradients = {
            'mechanics': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'waves': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'electromagnetism': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'quantum': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'thermodynamics': 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)'
        };
        
        container.style.background = gradients[simulation.category] || gradients.mechanics;
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.color = 'white';
        container.style.fontSize = '24px';
        container.style.fontWeight = '500';
        container.style.borderRadius = '8px';
        container.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 48px; margin-bottom: 16px;">${simulation.icon}</div>
                <div>${simulation.title}</div>
                <div style="font-size: 16px; opacity: 0.8; margin-top: 8px;">Interactive simulation ready</div>
            </div>
        `;
    }
    
    static renderStandingWave(container, params = {}) {
        // Create wrapper for embedded simulation with controls
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.width = '100%';
        wrapper.style.height = '100%';
        wrapper.style.borderRadius = '8px';
        wrapper.style.overflow = 'hidden';
        wrapper.style.background = '#000';
        
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.src = '/physics-website/simulations/standing-wave.html?embedded=true';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.allowFullscreen = true;
        
        // Create overlay controls
        const controls = document.createElement('div');
        controls.style.position = 'absolute';
        controls.style.top = '10px';
        controls.style.right = '10px';
        controls.style.display = 'flex';
        controls.style.gap = '8px';
        controls.style.zIndex = '10';
        controls.style.opacity = '0.7';
        controls.style.transition = 'opacity 0.3s ease';
        
        // Hover effect for controls
        wrapper.addEventListener('mouseenter', () => {
            controls.style.opacity = '1';
        });
        wrapper.addEventListener('mouseleave', () => {
            controls.style.opacity = '0.7';
        });
        
        // Expand button
        const expandBtn = this.createControlButton('🔍', 'Enlarge', () => {
            this.enlargeSimulation(iframe);
        });
        
        // Fullscreen button
        const fullscreenBtn = this.createControlButton('⛶', 'Fullscreen', () => {
            this.enterFullscreen(wrapper);
        });
        
        // New tab button
        const newTabBtn = this.createControlButton('↗', 'Open in new tab', () => {
            window.open('/physics-website/simulations/standing-wave.html', '_blank');
        });
        
        controls.appendChild(expandBtn);
        controls.appendChild(fullscreenBtn);
        controls.appendChild(newTabBtn);
        
        wrapper.appendChild(iframe);
        wrapper.appendChild(controls);
        
        // Clear container and add wrapper
        container.innerHTML = '';
        container.appendChild(wrapper);
        
        // Handle iframe loading and parameter passing
        iframe.addEventListener('load', () => {
            try {
                if (Object.keys(params).length > 0) {
                    iframe.contentWindow.postMessage({
                        type: 'updateParams',
                        params: params
                    }, '*');
                }
            } catch (e) {
                console.log('Could not send parameters to simulation iframe');
            }
        });
    }
    
    static createControlButton(icon, title, onClick) {
        const btn = document.createElement('button');
        btn.innerHTML = icon;
        btn.title = title;
        btn.onclick = onClick;
        btn.style.cssText = `
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border: none;
            border-radius: 4px;
            padding: 8px 10px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
        `;
        
        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'rgba(26, 115, 232, 0.8)';
            btn.style.transform = 'scale(1.1)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'rgba(0, 0, 0, 0.7)';
            btn.style.transform = 'scale(1)';
        });
        
        return btn;
    }
    
    static enlargeSimulation(iframe) {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(5px);
        `;
        
        // Create enlarged iframe container
        const container = document.createElement('div');
        container.style.cssText = `
            width: 90%;
            height: 85%;
            max-width: 1200px;
            background: #000;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        `;
        
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.title = 'Close';
        closeBtn.style.cssText = `
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 0, 0, 0.7);
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            font-size: 18px;
            z-index: 10;
            transition: all 0.3s ease;
        `;
        
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.background = 'rgba(255, 0, 0, 0.9)';
            closeBtn.style.transform = 'scale(1.1)';
        });
        
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.background = 'rgba(255, 0, 0, 0.7)';
            closeBtn.style.transform = 'scale(1)';
        });
        
        closeBtn.onclick = () => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        };
        
        // Create enlarged iframe
        const enlargedIframe = document.createElement('iframe');
        enlargedIframe.src = iframe.src;
        enlargedIframe.style.cssText = `
            width: 100%;
            height: 100%;
            border: none;
        `;
        enlargedIframe.allowFullscreen = true;
        
        container.appendChild(enlargedIframe);
        container.appendChild(closeBtn);
        modal.appendChild(container);
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            }
        });
        
        // Close on Escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
    }
    
    static enterFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    
    static generateEmbedCode(simulationId, params = {}) {
        const simulation = this.getById(simulationId);
        if (!simulation) return '';
        
        const paramsStr = Object.keys(params).length > 0 ? 
            `, ${JSON.stringify(params)}` : '';
        
        return `<div class="physics-simulation" data-sim-id="${simulationId}">
    <div class="simulation-container" id="sim-${simulationId}-container" style="height: 400px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>${simulation.title}</strong> - ${simulation.description}
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
}

// Global helper function for quick embedding
function embedSimulation(simulationId, containerId, params = {}) {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof SimulationUtils !== 'undefined') {
            SimulationUtils.renderSimulation(simulationId, containerId, params);
        }
    });
}