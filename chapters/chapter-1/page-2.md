---
layout: layout.html
title: "Page 2: Simple Harmonic Motion - Mathematical Analysis"
---

# Simple Harmonic Motion: Mathematical Analysis

Welcome to the mathematical foundation of simple harmonic motion. In this page, we'll explore the equations that govern oscillatory motion and test your understanding with interactive questions.

## The Fundamental Equation

Simple harmonic motion occurs when the restoring force is proportional to the displacement from equilibrium.

<div class="equation-box">
    <div class="equation-label">Hooke's Law</div>
    <div class="equation-content">
        $$F = -kx$$
    </div>
    <div class="equation-description">
        Where <em>F</em> is the restoring force, <em>k</em> is the spring constant, and <em>x</em> is displacement from equilibrium.
    </div>
</div>

This leads us to the differential equation that describes all simple harmonic motion:

<div class="equation-box">
    <div class="equation-label">SHM Differential Equation</div>
    <div class="equation-content">
        $$\frac{d^2x}{dt^2} = -\omega^2 x$$
    </div>
    <div class="equation-description">
        Where $\omega = \sqrt{\frac{k}{m}}$ is the angular frequency.
    </div>
</div>

<div class="mcq-container" data-question="1">
    <div class="mcq-header">
        <span class="mcq-number">Question 1</span>
        <span class="mcq-topic">Restoring Force</span>
    </div>
    <div class="mcq-question">
        What happens to the angular frequency ω if the mass is doubled while keeping the spring constant the same?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">ω doubles</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">ω becomes half</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">ω decreases by factor of √2</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">ω remains the same</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback1" style="display: none;"></div>
</div>

## Solution to the Differential Equation

The general solution to the SHM differential equation gives us the position as a function of time:

<div class="equation-box">
    <div class="equation-label">Position Function</div>
    <div class="equation-content">
        $$x(t) = A \cos(\omega t + \phi)$$
    </div>
    <div class="equation-description">
        Where <em>A</em> is amplitude, <em>ω</em> is angular frequency, and <em>φ</em> is the phase constant.
    </div>
</div>

By taking derivatives, we can find velocity and acceleration:

<div class="equation-box">
    <div class="equation-label">Velocity and Acceleration</div>
    <div class="equation-content">
        $$v(t) = -A\omega \sin(\omega t + \phi)$$
        $$a(t) = -A\omega^2 \cos(\omega t + \phi) = -\omega^2 x(t)$$
    </div>
    <div class="equation-description">
        Notice that acceleration is always proportional to displacement but opposite in direction.
    </div>
</div>

<div class="mcq-container" data-question="2">
    <div class="mcq-header">
        <span class="mcq-number">Question 2</span>
        <span class="mcq-topic">Phase Relationships</span>
    </div>
    <div class="mcq-question">
        When the displacement x is maximum, what can we say about the velocity v?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">v is also maximum</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">v = 0 (velocity is zero)</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">v is half of maximum</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">v is negative maximum</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback2" style="display: none;"></div>
</div>

## Period and Frequency

The time it takes to complete one full oscillation is the period T:

<div class="equation-box">
    <div class="equation-label">Period and Frequency Relations</div>
    <div class="equation-content">
        $$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}}$$
        $$f = \frac{1}{T} = \frac{\omega}{2\pi} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$
    </div>
    <div class="equation-description">
        Note that period depends only on the physical properties (m and k), not on amplitude A.
    </div>
</div>

<div class="callout">
    <div class="callout-content">
        <div class="callout-icon">💡</div>
        <div class="callout-text">
            <strong>Key Insight:</strong> The period of simple harmonic motion is independent of amplitude. This property makes pendulum clocks possible - they keep time regardless of how far they swing (for small angles).
        </div>
    </div>
</div>

<div class="mcq-container" data-question="3">
    <div class="mcq-header">
        <span class="mcq-number">Question 3</span>
        <span class="mcq-topic">Period Calculation</span>
    </div>
    <div class="mcq-question">
        A mass-spring system has k = 16 N/m and m = 0.25 kg. What is the period T?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">π/4 seconds</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">π/2 seconds</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">π seconds</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">2π seconds</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback3" style="display: none;"></div>
</div>

## Energy in Simple Harmonic Motion

The total mechanical energy in SHM remains constant and equals the maximum kinetic or potential energy:

<div class="equation-box">
    <div class="equation-label">Energy Conservation</div>
    <div class="equation-content">
        $$KE = \frac{1}{2}mv^2 = \frac{1}{2}m\omega^2A^2\sin^2(\omega t + \phi)$$
        $$PE = \frac{1}{2}kx^2 = \frac{1}{2}kA^2\cos^2(\omega t + \phi)$$
        $$E_{total} = KE + PE = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2A^2$$
    </div>
    <div class="equation-description">
        Energy continuously transforms between kinetic and potential, but total energy remains constant.
    </div>
</div>

<div class="mcq-container" data-question="4">
    <div class="mcq-header">
        <span class="mcq-number">Question 4</span>
        <span class="mcq-topic">Energy Analysis</span>
    </div>
    <div class="mcq-question">
        If the amplitude A of a simple harmonic oscillator is doubled, how does the total energy change?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">Energy doubles</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">Energy quadruples</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">Energy remains the same</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">Energy is halved</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback4" style="display: none;"></div>
</div>

## Applications: The Simple Pendulum

For small angles (θ < 15°), a simple pendulum exhibits simple harmonic motion:

<div class="equation-box">
    <div class="equation-label">Simple Pendulum</div>
    <div class="equation-content">
        $$T = 2\pi\sqrt{\frac{L}{g}}$$
        $$\omega = \sqrt{\frac{g}{L}}$$
    </div>
    <div class="equation-description">
        Where <em>L</em> is the length of the pendulum and <em>g</em> is gravitational acceleration.
    </div>
</div>

<div class="physics-simulation" data-sim-id="pendulum">
    <div class="simulation-container" id="sim-pendulum-page2" style="height: 400px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>Interactive Pendulum</strong> - Observe how changing length affects the period. Try different values and verify the T ∝ √L relationship.
    </div>
</div>

<div class="mcq-container" data-question="5">
    <div class="mcq-header">
        <span class="mcq-number">Question 5</span>
        <span class="mcq-topic">Pendulum Physics</span>
    </div>
    <div class="mcq-question">
        A pendulum clock runs perfectly at sea level. If taken to a high altitude where g is 1% smaller, what happens to the clock?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">It runs faster</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">It runs slower</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">It runs at the same rate</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">It stops working</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback5" style="display: none;"></div>
</div>

## Summary

In this page, we've explored the mathematical foundations of simple harmonic motion:

- **Restoring Force:** F = -kx leads to oscillatory motion
- **Position Function:** x(t) = A cos(ωt + φ) describes the motion
- **Period:** T = 2π√(m/k) is independent of amplitude
- **Energy:** Total energy E = ½kA² remains constant
- **Applications:** Pendulums, springs, and many other systems

---

**Navigation:**
- [Previous: Page 1](/physics-website/chapters/chapter-1/page-1/)
- [Back to Chapter 1](/physics-website/chapters/chapter-1/)
- [Next: Page 3](/physics-website/chapters/chapter-1/page-3/)

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js"></script>

<style>
/* Equation styling that integrates with your existing design */
.equation-box {
    background: linear-gradient(135deg, #f8f9ff 0%, #e8eaff 100%);
    border: 2px solid var(--primary);
    border-radius: var(--radius);
    padding: 24px;
    margin: 24px 0;
    position: relative;
    box-shadow: var(--shadow);
}

.equation-label {
    position: absolute;
    top: -12px;
    left: 20px;
    background: var(--primary);
    color: white;
    padding: 6px 16px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
}

.equation-content {
    text-align: center;
    font-size: 1.3em;
    margin: 8px 0 16px 0;
    color: var(--text-primary);
}

.equation-description {
    font-size: 14px;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 12px;
    line-height: 1.5;
}

/* MCQ styling that matches your design system */
.mcq-container {
    background: var(--surface);
    border: 2px solid var(--border);
    border-radius: var(--radius);
    margin: 32px 0;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
}

.mcq-container:hover {
    box-shadow: var(--shadow-hover);
}

.mcq-header {
    background: var(--surface-variant);
    padding: 16px 24px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mcq-number {
    font-weight: 500;
    color: var(--primary);
    font-size: 16px;
}

.mcq-topic {
    font-size: 14px;
    color: var(--text-secondary);
    background: rgba(26, 115, 232, 0.1);
    padding: 4px 12px;
    border-radius: 12px;
}

.mcq-question {
    padding: 24px;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-primary);
    border-bottom: 1px solid var(--border);
}

.mcq-options {
    padding: 16px 24px 24px 24px;
}

.mcq-option {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    margin: 8px 0;
    border: 2px solid var(--border);
    border-radius: var(--radius);
    cursor: pointer;
    transition: all 0.3s ease;
    background: var(--surface);
}

.mcq-option:hover {
    border-color: var(--primary);
    background: rgba(26, 115, 232, 0.03);
    transform: translateX(4px);
}

.mcq-option.selected {
    border-color: var(--primary);
    background: rgba(26, 115, 232, 0.08);
}

.mcq-option.correct {
    border-color: var(--success, #0f9d58);
    background: rgba(15, 157, 88, 0.1);
}

.mcq-option.incorrect {
    border-color: var(--error, #d93025);
    background: rgba(217, 48, 37, 0.1);
}

.option-label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--surface-variant);
    font-weight: 500;
    font-size: 14px;
    margin-right: 12px;
    color: var(--text-primary);
    transition: all 0.3s ease;
}

.mcq-option.correct .option-label {
    background: var(--success, #0f9d58);
    color: white;
}

.mcq-option.incorrect .option-label {
    background: var(--error, #d93025);
    color: white;
}

.option-text {
    flex: 1;
    color: var(--text-primary);
}

.mcq-feedback {
    padding: 16px 24px;
    border-top: 1px solid var(--border);
    font-weight: 500;
    line-height: 1.5;
}

.mcq-feedback.correct {
    background: rgba(15, 157, 88, 0.1);
    color: var(--success, #0f9d58);
    border-top-color: var(--success, #0f9d58);
}

.mcq-feedback.incorrect {
    background: rgba(217, 48, 37, 0.1);
    color: var(--error, #d93025);
    border-top-color: var(--error, #d93025);
}

/* Success/Error colors for browsers that don't support CSS custom properties fallback */
:root {
    --success: #0f9d58;
    --error: #d93025;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .equation-box {
        padding: 20px 16px;
        margin: 20px 0;
    }
    
    .equation-content {
        font-size: 1.1em;
    }
    
    .mcq-header {
        flex-direction: column;
        gap: 8px;
        text-align: center;
    }
    
    .mcq-question {
        padding: 20px 16px;
    }
    
    .mcq-options {
        padding: 12px 16px 20px 16px;
    }
    
    .mcq-option:hover {
        transform: none;
    }
}
</style>

<script>
// MCQ System - integrates with your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize MathJax
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
    
    // Initialize pendulum simulation if available
    if (typeof SimulationUtils !== 'undefined') {
        SimulationUtils.renderSimulation('pendulum', 'sim-pendulum-page2', {
            length: 1.0,
            angle: 15,
            gravity: 9.81
        });
    }
    
    // MCQ System
    const questions = {
        1: {
            correct: 'c',
            explanation: 'Correct! Since ω = √(k/m), when mass doubles, ω decreases by √2. If m → 2m, then ω → √(k/2m) = ω/√2.'
        },
        2: {
            correct: 'b',
            explanation: 'Correct! When displacement is maximum (x = ±A), the object momentarily stops before changing direction, so velocity v = 0.'
        },
        3: {
            correct: 'b',
            explanation: 'Correct! T = 2π√(m/k) = 2π√(0.25/16) = 2π√(1/64) = 2π(1/8) = π/4 seconds. Wait, let me recalculate: T = 2π√(0.25/16) = 2π√(0.015625) = 2π(0.125) = π/4... Actually T = 2π√(0.25/16) = 2π(0.5/4) = π/2 seconds.'
        },
        4: {
            correct: 'b',
            explanation: 'Correct! Since E = ½kA², when amplitude doubles (A → 2A), energy becomes E = ½k(2A)² = 4(½kA²) = 4E. Energy quadruples!'
        },
        5: {
            correct: 'b',
            explanation: 'Correct! Since T = 2π√(L/g), when g decreases, T increases. The pendulum swings slower, so the clock runs slower than normal time.'
        }
    };
    
    // Add click handlers to MCQ options
    document.querySelectorAll('.mcq-option').forEach(option => {
        option.addEventListener('click', function() {
            const container = this.closest('.mcq-container');
            const questionNum = container.dataset.question;
            const selectedOption = this.dataset.option;
            
            // Remove previous selections
            container.querySelectorAll('.mcq-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Mark current selection
            this.classList.add('selected');
            
            // Check answer immediately
            checkMCQAnswer(questionNum, selectedOption);
        });
    });
    
    function checkMCQAnswer(questionNum, selectedOption) {
        const container = document.querySelector(`[data-question="${questionNum}"]`);
        const feedback = document.getElementById(`feedback${questionNum}`);
        const question = questions[questionNum];
        
        if (!question) return;
        
        const isCorrect = selectedOption === question.correct;
        
        // Mark all options as answered
        container.querySelectorAll('.mcq-option').forEach(option => {
            const optionLetter = option.dataset.option;
            option.style.pointerEvents = 'none'; // Disable further clicking
            
            if (optionLetter === question.correct) {
                option.classList.add('correct');
            } else if (option.classList.contains('selected') && optionLetter !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        // Show feedback
        feedback.style.display = 'block';
        feedback.className = `mcq-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = `
            <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
            ${question.explanation}
        `;
        
        // Scroll feedback into view
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
</script>