// js/simulations-data.js - Single source of truth for all simulations

const SIMULATIONS_DATA = [
    {
        id: 'pendulum',
        title: 'Simple Pendulum',
        description: 'Explore the motion of a simple pendulum and understand period, frequency, and energy conservation.',
        category: 'mechanics',
        difficulty: 'beginner',
        icon: '⚖️',
        featured: true, // This will show in the landing page carousel
        controls: [
            { name: 'length', label: 'Length (m)', type: 'range', min: 0.5, max: 3.0, step: 0.1, default: 1.0 },
            { name: 'angle', label: 'Initial Angle (°)', type: 'range', min: 5, max: 45, step: 1, default: 15 },
            { name: 'gravity', label: 'Gravity (m/s²)', type: 'range', min: 1, max: 20, step: 0.1, default: 9.81 }
        ],
        render: function(containerId, params = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const settings = {
                length: params.length || this.controls[0].default,
                angle: params.angle || this.controls[1].default,
                gravity: params.gravity || this.controls[2].default
            };

            container.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: white;
                    text-align: center;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">${this.icon}</div>
                    <div style="font-size: 18px; margin-bottom: 8px;">Interactive ${this.title}</div>
                    <div style="font-size: 14px; opacity: 0.8; margin-bottom: 16px;">
                        Length: ${settings.length}m | Angle: ${settings.angle}° | Gravity: ${settings.gravity}m/s²
                    </div>
                    <div style="font-size: 12px; opacity: 0.6;">
                        Real simulation would show pendulum motion here
                    </div>
                </div>
            `;

            this.animate(container, settings);
        },
        animate: function(container, settings) {
            const inner = container.querySelector('div');
            if (inner) {
                let scale = 1;
                let direction = 1;
                setInterval(() => {
                    scale += direction * 0.02;
                    if (scale >= 1.1) direction = -1;
                    if (scale <= 0.9) direction = 1;
                    inner.style.transform = `scale(${scale})`;
                }, 100);
            }
        }
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
            { name: 'frequency1', label: 'Wave 1 Frequency (Hz)', type: 'range', min: 1, max: 10, step: 0.5, default: 3 },
            { name: 'frequency2', label: 'Wave 2 Frequency (Hz)', type: 'range', min: 1, max: 10, step: 0.5, default: 4 },
            { name: 'amplitude', label: 'Amplitude', type: 'range', min: 0.1, max: 2.0, step: 0.1, default: 1.0 }
        ],
        render: function(containerId, params = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const settings = {
                frequency1: params.frequency1 || this.controls[0].default,
                frequency2: params.frequency2 || this.controls[1].default,
                amplitude: params.amplitude || this.controls[2].default
            };

            container.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: white;
                    text-align: center;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">${this.icon}</div>
                    <div style="font-size: 18px; margin-bottom: 8px;">Interactive ${this.title}</div>
                    <div style="font-size: 14px; opacity: 0.8; margin-bottom: 16px;">
                        Freq1: ${settings.frequency1}Hz | Freq2: ${settings.frequency2}Hz | Amp: ${settings.amplitude}
                    </div>
                    <canvas id="wave-canvas-${containerId}" width="300" height="100" style="border: 1px solid rgba(255,255,255,0.3); border-radius: 4px;"></canvas>
                </div>
            `;

            this.animate(container, settings);
        },
        animate: function(container, settings) {
            const canvas = container.querySelector('canvas');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            let time = 0;
            
            function drawWave() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x++) {
                    const wave1 = Math.sin(settings.frequency1 * x * 0.02 + time) * settings.amplitude * 20;
                    const wave2 = Math.sin(settings.frequency2 * x * 0.02 + time) * settings.amplitude * 20;
                    const y = canvas.height / 2 + wave1 + wave2;
                    
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
                
                time += 0.1;
                requestAnimationFrame(drawWave);
            }
            
            drawWave();
        }
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
            { name: 'charge1', label: 'Charge 1 (μC)', type: 'range', min: -10, max: 10, step: 1, default: 5 },
            { name: 'charge2', label: 'Charge 2 (μC)', type: 'range', min: -10, max: 10, step: 1, default: -5 },
            { name: 'distance', label: 'Separation (cm)', type: 'range', min: 5, max: 50, step: 1, default: 20 }
        ],
        render: function(containerId, params = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const settings = {
                charge1: params.charge1 || this.controls[0].default,
                charge2: params.charge2 || this.controls[1].default,
                distance: params.distance || this.controls[2].default
            };

            container.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: white;
                    text-align: center;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">${this.icon}</div>
                    <div style="font-size: 18px; margin-bottom: 8px;">Interactive ${this.title}</div>
                    <div style="font-size: 14px; opacity: 0.8; margin-bottom: 16px;">
                        Q1: ${settings.charge1}μC | Q2: ${settings.charge2}μC | Distance: ${settings.distance}cm
                    </div>
                    <div style="font-size: 12px; opacity: 0.6;">
                        Electric field lines visualization
                    </div>
                </div>
            `;

            this.animate(container, settings);
        },
        animate: function(container, settings) {
            const inner = container.querySelector('div');
            if (inner) {
                const charges = [settings.charge1, settings.charge2];
                let colorIndex = 0;
                const colors = ['#4facfe', '#00f2fe', '#43e97b'];
                
                setInterval(() => {
                    inner.style.background = `linear-gradient(135deg, ${colors[colorIndex % colors.length]} 0%, ${colors[(colorIndex + 1) % colors.length]} 100%)`;
                    colorIndex++;
                }, 1000);
            }
        }
    },
    {
        id: 'quantum-tunneling',
        title: 'Quantum Tunneling',
        description: 'Explore quantum mechanical tunneling through potential barriers.',
        category: 'quantum',
        difficulty: 'advanced',
        icon: '⚛️',
        featured: true,
        controls: [
            { name: 'energy', label: 'Particle Energy (eV)', type: 'range', min: 0.1, max: 2.0, step: 0.1, default: 0.8 },
            { name: 'barrier_height', label: 'Barrier Height (eV)', type: 'range', min: 0.5, max: 3.0, step: 0.1, default: 1.5 },
            { name: 'barrier_width', label: 'Barrier Width (nm)', type: 'range', min: 0.5, max: 5.0, step: 0.1, default: 2.0 }
        ],
        render: function(containerId, params = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const settings = {
                energy: params.energy || this.controls[0].default,
                barrier_height: params.barrier_height || this.controls[1].default,
                barrier_width: params.barrier_width || this.controls[2].default
            };

            container.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: white;
                    text-align: center;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">${this.icon}</div>
                    <div style="font-size: 18px; margin-bottom: 8px;">Interactive ${this.title}</div>
                    <div style="font-size: 14px; opacity: 0.8; margin-bottom: 16px;">
                        Energy: ${settings.energy}eV | Barrier: ${settings.barrier_height}eV | Width: ${settings.barrier_width}nm
                    </div>
                    <div style="font-size: 12px; opacity: 0.6;">
                        Quantum tunneling probability calculation
                    </div>
                </div>
            `;

            this.animate(container, settings);
        },
        animate: function(container, settings) {
            const inner = container.querySelector('div');
            if (inner) {
                let opacity = 0.5;
                let direction = 1;
                setInterval(() => {
                    opacity += direction * 0.1;
                    if (opacity >= 1) direction = -1;
                    if (opacity <= 0.3) direction = 1;
                    inner.style.opacity = opacity;
                }, 200);
            }
        }
    },
    {
        id: 'heat-transfer',
        title: 'Heat Transfer Simulation',
        description: 'Visualize conduction, convection, and radiation heat transfer mechanisms.',
        category: 'thermodynamics',
        difficulty: 'intermediate',
        icon: '🔥',
        featured: false,
        controls: [
            { name: 'temperature_hot', label: 'Hot Side (°C)', type: 'range', min: 50, max: 200, step: 5, default: 100 },
            { name: 'temperature_cold', label: 'Cold Side (°C)', type: 'range', min: 0, max: 50, step: 5, default: 20 },
            { name: 'material', label: 'Material', type: 'select', options: ['Copper', 'Steel', 'Wood', 'Glass'], default: 'Copper' }
        ],
        render: function(containerId, params = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const settings = {
                temperature_hot: params.temperature_hot || this.controls[0].default,
                temperature_cold: params.temperature_cold || this.controls[1].default,
                material: params.material || this.controls[2].default
            };

            container.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: white;
                    text-align: center;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">${this.icon}</div>
                    <div style="font-size: 18px; margin-bottom: 8px;">Interactive ${this.title}</div>
                    <div style="font-size: 14px; opacity: 0.8; margin-bottom: 16px;">
                        Hot: ${settings.temperature_hot}°C | Cold: ${settings.temperature_cold}°C | Material: ${settings.material}
                    </div>
                    <div style="font-size: 12px; opacity: 0.6;">
                        Heat transfer visualization
                    </div>
                </div>
            `;

            this.animate(container, settings);
        },
        animate: function(container, settings) {
            const inner = container.querySelector('div');
            if (inner) {
                const temp_diff = settings.temperature_hot - settings.temperature_cold;
                const intensity = Math.min(temp_diff / 100, 1);
                
                setInterval(() => {
                    const flicker = 0.8 + Math.random() * 0.2;
                    inner.style.filter = `brightness(${intensity * flicker})`;
                }, 150);
            }
        }
    },
    {
        id: 'projectile-motion',
        title: 'Projectile Motion',
        description: 'Analyze the trajectory of projectiles under various conditions.',
        category: 'mechanics',
        difficulty: 'beginner',
        icon: '🏹',
        featured: false,
        controls: [
            { name: 'velocity', label: 'Initial Velocity (m/s)', type: 'range', min: 10, max: 100, step: 5, default: 50 },
            { name: 'angle', label: 'Launch Angle (°)', type: 'range', min: 15, max: 75, step: 5, default: 45 },
            { name: 'height', label: 'Initial Height (m)', type: 'range', min: 0, max: 50, step: 1, default: 0 }
        ],
        render: function(containerId, params = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const settings = {
                velocity: params.velocity || this.controls[0].default,
                angle: params.angle || this.controls[1].default,
                height: params.height || this.controls[2].default
            };

            container.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: white;
                    text-align: center;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">${this.icon}</div>
                    <div style="font-size: 18px; margin-bottom: 8px;">Interactive ${this.title}</div>
                    <div style="font-size: 14px; opacity: 0.8; margin-bottom: 16px;">
                        Velocity: ${settings.velocity}m/s | Angle: ${settings.angle}° | Height: ${settings.height}m
                    </div>
                    <div style="font-size: 12px; opacity: 0.6;">
                        Projectile trajectory calculation
                    </div>
                </div>
            `;

            this.animate(container, settings);
        },
        animate: function(container, settings) {
            const inner = container.querySelector('div');
            if (inner) {
                let position = 0;
                setInterval(() => {
                    position += 5;
                    if (position > 100) position = 0;
                    inner.style.backgroundPosition = `${position}px 0`;
                }, 100);
            }
        }
    }
];

// Utility functions
const SimulationUtils = {
    getAll: () => SIMULATIONS_DATA,
    getById: (id) => SIMULATIONS_DATA.find(sim => sim.id === id),
    getFeatured: () => SIMULATIONS_DATA.filter(sim => sim.featured),
    getByCategory: (category) => SIMULATIONS_DATA.filter(sim => sim.category === category),
    getByDifficulty: (difficulty) => SIMULATIONS_DATA.filter(sim => sim.difficulty === difficulty),
    
    renderSimulation: (id, containerId, params = {}) => {
        const simulation = SIMULATIONS_DATA.find(sim => sim.id === id);
        if (simulation && simulation.render) {
            simulation.render(containerId, params);
        }
    },
    
    generateEmbedCode: (id) => {
        const simulation = SIMULATIONS_DATA.find(sim => sim.id === id);
        if (!simulation) return '';
        
        return `<!-- Physics Simulation: ${simulation.title} -->
<div class="physics-simulation" data-sim-id="${id}">
    <div class="simulation-container" id="sim-${id}-container" style="height: 400px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>${simulation.title}</strong> - ${simulation.description}
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    if (typeof SimulationUtils !== 'undefined') {
        SimulationUtils.renderSimulation('${id}', 'sim-${id}-container');
    }
});
</script>`;
    }
};

// Helper function to quickly embed simulations
function embedSimulation(id, containerId, params = {}) {
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof SimulationUtils !== 'undefined') {
            SimulationUtils.renderSimulation(id, containerId, params);
        }
    });
}

// Make available globally
if (typeof window !== 'undefined') {
    window.SIMULATIONS_DATA = SIMULATIONS_DATA;
    window.SimulationUtils = SimulationUtils;
    window.embedSimulation = embedSimulation;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SIMULATIONS_DATA, SimulationUtils };
}