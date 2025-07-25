// _data/chapters.js - Single source of truth for all chapter data

module.exports = function() {
    return {
        chapters: [
            {
                id: 'chapter-0',
                number: 0,
                title: 'Demo & Testing Chapter',
                shortTitle: 'Demo & Testing',
                description: 'Experimental content and demos for testing website features',
                icon: '🧪',
                category: 'demo',
                status: 'active',
                featured: false,
                topics: [
                    'Interactive simulations testing',
                    'Mathematical analysis demos',
                    'Navigation system verification',
                    'Content formatting examples'
                ],
                learningOutcomes: [
                    'Test new simulations before adding to main curriculum',
                    'Experiment with content formats',
                    'Verify navigation and responsive design'
                ],
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
            {
                id: 'chapter-1',
                number: 1,
                title: 'Mechanics - Motion and Forces',
                shortTitle: 'Mechanics',
                description: 'Foundation of physics - motion, forces, and their applications',
                icon: '🚀',
                category: 'core',
                status: 'active',
                featured: true,
                topics: [
                    'Kinematics and motion description',
                    'Newton\'s laws of motion',
                    'Energy and momentum conservation',
                    'Rotational dynamics and equilibrium'
                ],
                learningOutcomes: [
                    'Describe motion using displacement, velocity, and acceleration',
                    'Apply Newton\'s laws to solve motion problems',
                    'Analyze energy transformations and conservation',
                    'Understand momentum and collision physics'
                ],
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
            {
                id: 'chapter-2',
                number: 2,
                title: 'Energy, Work and Power',
                shortTitle: 'Energy',
                description: 'Energy transformations, work calculations, and power in mechanical systems',
                icon: '⚡',
                category: 'core',
                status: 'coming-soon',
                featured: true,
                topics: [
                    'Work and energy concepts',
                    'Kinetic and potential energy',
                    'Energy conservation principles',
                    'Power and efficiency calculations'
                ],
                learningOutcomes: [
                    'Calculate work done and energy transformations',
                    'Apply conservation of energy to solve problems',
                    'Analyze power in mechanical systems',
                    'Understand efficiency in energy transfer'
                ],
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
            {
                id: 'chapter-3',
                number: 3,
                title: 'Materials and Their Properties',
                shortTitle: 'Materials',
                description: 'Material properties, stress, strain, and engineering applications',
                icon: '🔩',
                category: 'core',
                status: 'coming-soon',
                featured: false,
                topics: [
                    'Density and pressure calculations',
                    'Stress, strain, and Young\'s modulus',
                    'Material behavior under load',
                    'Safety factors and material selection'
                ],
                learningOutcomes: [
                    'Calculate material properties and behavior',
                    'Understand stress-strain relationships',
                    'Apply Young\'s modulus in engineering problems',
                    'Select appropriate materials for applications'
                ],
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
            },
            {
                id: 'chapter-4',
                number: 4,
                title: 'Waves and Wave Properties',
                shortTitle: 'Waves',
                description: 'Wave motion, properties, and behavior at boundaries',
                icon: '〰️',
                category: 'core',
                status: 'coming-soon',
                featured: false,
                topics: [
                    'Progressive wave properties',
                    'Wave equation and speed',
                    'Reflection and refraction',
                    'Diffraction and polarization'
                ],
                learningOutcomes: [
                    'Describe wave motion mathematically',
                    'Analyze wave behavior at boundaries',
                    'Understand diffraction and interference',
                    'Apply wave principles to real situations'
                ],
                pages: [
                    {
                        slug: 'wave-basics',
                        title: 'Wave Basics',
                        description: 'Progressive wave properties and classifications'
                    },
                    {
                        slug: 'wave-equation-and-speed',
                        title: 'Wave Equation and Speed',
                        description: 'Mathematical relationships in wave motion'
                    },
                    {
                        slug: 'reflection-and-refraction',
                        title: 'Reflection and Refraction',
                        description: 'Wave behavior at boundaries'
                    },
                    {
                        slug: 'diffraction-and-polarization',
                        title: 'Diffraction and Polarization',
                        description: 'Wave spreading and transverse wave properties'
                    },
                    {
                        slug: 'doppler-effect',
                        title: 'Doppler Effect',
                        description: 'Frequency changes due to relative motion'
                    }
                ]
            },
            {
                id: 'chapter-5',
                number: 5,
                title: 'Superposition and Interference',
                shortTitle: 'Interference',
                description: 'Wave combination, interference patterns, and standing waves',
                icon: '🌊',
                category: 'core',
                status: 'coming-soon',
                featured: true,
                topics: [
                    'Principle of superposition',
                    'Two-source interference',
                    'Young\'s double slit experiment',
                    'Standing wave formation'
                ],
                learningOutcomes: [
                    'Apply superposition principle to wave problems',
                    'Analyze interference patterns quantitatively',
                    'Understand standing wave formation',
                    'Calculate fringe spacing and wavelengths'
                ],
                pages: [
                    {
                        slug: 'principle-of-superposition',
                        title: 'Principle of Superposition',
                        description: 'Wave combination and interference patterns'
                    },
                    {
                        slug: 'two-source-interference',
                        title: 'Two-Source Interference',
                        description: 'Path difference and coherence requirements'
                    },
                    {
                        slug: 'youngs-double-slit',
                        title: 'Young\'s Double Slit',
                        description: 'Light interference and fringe calculations'
                    },
                    {
                        slug: 'standing-waves',
                        title: 'Standing Waves',
                        description: 'Node and antinode formation in confined systems'
                    },
                    {
                        slug: 'diffraction-gratings',
                        title: 'Diffraction Gratings',
                        description: 'Multiple slit interference and spectrum analysis'
                    }
                ]
            }
        ]
    };
};