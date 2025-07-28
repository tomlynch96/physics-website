---
layout: layout.html
title: "Updated Template Showcase - All Content Types"
---

# 🎨 Updated Template Showcase Page

This page demonstrates all the corrected content templates based on your feedback. All templates now use consistent styling and proven functionality.

## Definitions Template (Using Equation Box Style)

<div class="equation-box">
    <div class="equation-label">Velocity</div>
    <div class="equation-content">
        The rate of change of displacement with respect to time, measured in metres per second (m/s).
    </div>
    <div class="equation-description">
        Velocity is a vector quantity - it has both magnitude and direction. Related to speed, but speed is scalar.
    </div>
</div>

<div class="equation-box">
    <div class="equation-label">Acceleration</div>
    <div class="equation-content">
        The rate of change of velocity with respect to time, measured in metres per second squared (m/s²).
    </div>
    <div class="equation-description">
        Can be positive (speeding up) or negative (slowing down). Also a vector quantity.
    </div>
</div>

## Equations Template (Same as Page-2)

<div class="equation-box">
    <div class="equation-label">Kinematic Equation</div>
    <div class="equation-content">
        $$v = u + at$$
    </div>
    <div class="equation-description">
        Where <em>v</em> is final velocity (m/s), <em>u</em> is initial velocity (m/s), <em>a</em> is acceleration (m/s²), and <em>t</em> is time (s).
    </div>
</div>

<div class="equation-box">
    <div class="equation-label">Newton's Second Law</div>
    <div class="equation-content">
        $$F = ma$$
    </div>
    <div class="equation-description">
        Where <em>F</em> is the net force in Newtons (N), <em>m</em> is mass in kilograms (kg), and <em>a</em> is acceleration in metres per second squared (m/s²).
    </div>
</div>

## Practice Questions Template (New - Blue Theme with Toggle)

<div class="practice-box">
    <div class="practice-header">
        <div class="practice-header-left">
            <span class="practice-icon">📝</span>
            <span class="practice-title">Practice Question</span>
        </div>
        <button class="toggle-solution" onclick="toggleSolution(this)">Show Solution</button>
    </div>
    <div class="practice-problem">
        <strong>Problem:</strong> A car accelerates from rest at 3.0 m/s² for 8.0 seconds. Calculate its final velocity.
    </div>
    <div class="practice-solution" style="display: none;">
        <strong>Solution:</strong>
        <div class="solution-steps">
            <div class="solution-step">
                <strong>Step 1:</strong> Identify given information
                <ul>
                    <li>Initial velocity: u = 0 m/s (starts from rest)</li>
                    <li>Acceleration: a = 3.0 m/s²</li>
                    <li>Time: t = 8.0 s</li>
                    <li>Final velocity: v = ? (unknown)</li>
                </ul>
            </div>
            <div class="solution-step">
                <strong>Step 2:</strong> Choose appropriate equation
                <div class="solution-equation">$v = u + at$</div>
            </div>
            <div class="solution-step">
                <strong>Step 3:</strong> Substitute values and calculate
                <div class="solution-calculation">
                    $v = 0 + (3.0)(8.0) = 24 \text{ m/s}$
                </div>
            </div>
        </div>
        <div class="practice-answer">
            <strong>Answer:</strong> The final velocity is 24 m/s
        </div>
    </div>
</div>

<div class="practice-box">
    <div class="practice-header">
        <div class="practice-header-left">
            <span class="practice-icon">📝</span>
            <span class="practice-title">Practice Question</span>
        </div>
        <button class="toggle-solution" onclick="toggleSolution(this)">Show Solution</button>
    </div>
    <div class="practice-problem">
        <strong>Problem:</strong> Calculate the force required to accelerate a 12 kg mass at 2.5 m/s².
    </div>
    <div class="practice-solution" style="display: none;">
        <strong>Solution:</strong>
        <div class="solution-steps">
            <div class="solution-step">
                <strong>Step 1:</strong> Identify given information
                <ul>
                    <li>Mass: m = 12 kg</li>
                    <li>Acceleration: a = 2.5 m/s²</li>
                    <li>Force: F = ? (unknown)</li>
                </ul>
            </div>
            <div class="solution-step">
                <strong>Step 2:</strong> Choose appropriate equation
                <div class="solution-equation">$F = ma$</div>
            </div>
            <div class="solution-step">
                <strong>Step 3:</strong> Substitute values and calculate
                <div class="solution-calculation">
                    $F = 12 \times 2.5 = 30 \text{ N}$
                </div>
            </div>
        </div>
        <div class="practice-answer">
            <strong>Answer:</strong> The required force is 30 N
        </div>
    </div>
</div>

## Examples Template (Green Theme - Worked Examples)

<div class="example-box">
    <div class="example-header">
        <span class="example-icon">💡</span>
        <span class="example-title">Worked Example</span>
    </div>
    <div class="example-problem">
        <strong>Problem:</strong> A ball is thrown upward with an initial velocity of 25 m/s. How high will it go? (Take g = 10 m/s²)
    </div>
    <div class="example-solution">
        <strong>Solution:</strong>
        <div class="solution-steps">
            <div class="solution-step">
                <strong>Step 1:</strong> Identify given information
                <ul>
                    <li>Initial velocity: u = 25 m/s (upward)</li>
                    <li>Final velocity: v = 0 m/s (at maximum height)</li>
                    <li>Acceleration: a = -10 m/s² (gravity acts downward)</li>
                    <li>Displacement: s = ? (unknown)</li>
                </ul>
            </div>
            <div class="solution-step">
                <strong>Step 2:</strong> Choose appropriate equation
                <div class="solution-equation">$v^2 = u^2 + 2as$</div>
            </div>
            <div class="solution-step">
                <strong>Step 3:</strong> Substitute values and calculate
                <div class="solution-calculation">
                    $0^2 = 25^2 + 2(-10)s$
                    $0 = 625 - 20s$
                    $20s = 625$
                    $s = 31.25 \text{ m}$
                </div>
            </div>
        </div>
    </div>
    <div class="example-answer">
        <strong>Answer:</strong> The ball will reach a maximum height of 31.25 m
    </div>
</div>

## Multiple Choice Questions Template (Same as Page-2)

<div class="mcq-container" data-question="1">
    <div class="mcq-header">
        <span class="mcq-number">Question 1</span>
        <span class="mcq-topic">Kinematics</span>
    </div>
    <div class="mcq-question">
        A ball is thrown upward with an initial velocity of 20 m/s. What is its velocity after 3 seconds? (Take g = 10 m/s²)
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">10 m/s upward</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">10 m/s downward</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">50 m/s upward</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">30 m/s downward</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback1" style="display: none;"></div>
</div>

<div class="mcq-container" data-question="2">
    <div class="mcq-header">
        <span class="mcq-number">Question 2</span>
        <span class="mcq-topic">Forces</span>
    </div>
    <div class="mcq-question">
        What is the unit of force in the SI system?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">Joule (J)</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">Newton (N)</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">Watt (W)</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">Pascal (Pa)</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback2" style="display: none;"></div>
</div>

## Callouts Template (Existing - No Changes)

<div class="callout">
    <div class="callout-content">
        <div class="callout-icon">💡</div>
        <div class="callout-text">
            <strong>Key Point:</strong> Remember that velocity and acceleration are vector quantities - they have both magnitude and direction. This is crucial when solving problems involving motion in multiple dimensions.
        </div>
    </div>
</div>

<div class="callout">
    <div class="callout-content">
        <div class="callout-icon">⚠️</div>
        <div class="callout-text">
            <strong>Warning:</strong> Always check your units! Make sure all quantities are in standard SI units before substituting into equations. Common mistakes include mixing km/h with m/s.
        </div>
    </div>
</div>

## Simulation Embedding Template (No Changes)

<div class="physics-simulation" data-sim-id="projectile-motion">
    <div class="simulation-container" id="sim-projectile-showcase2" style="height: 400px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>Projectile Motion Simulator</strong> - Explore how launch angle and initial velocity affect the trajectory of projectiles under gravity.
    </div>
</div>

## Summary of Changes Made

✅ **Equations**: Now uses the exact same CSS as your working page-2.md  
✅ **Definitions**: Uses same equation-box style for consistency  
✅ **MCQ Questions**: Copied exact HTML structure and CSS from page-2.md  
✅ **Practice Questions**: New template with blue theme and toggle functionality  
✅ **Examples**: Kept the same (green theme for worked examples)  

All templates now use proven, working code from your existing pages!

---

**Navigation:**
- [Back to Chapter 0](/physics-website/chapters/chapter-0/)
- [Home](/physics-website/)

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js"></script>

<style>
/* Practice Question Styling - Blue theme to match site */
.practice-box {
    background: var(--surface);
    border: 2px solid var(--primary);
    border-radius: var(--radius);
    margin: 32px 0;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.practice-header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.practice-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.practice-icon {
    font-size: 20px;
}

.practice-title {
    font-size: 16px;
    font-weight: 600;
}

.toggle-solution {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.toggle-solution:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
}

.practice-problem, .practice-solution {
    padding: 20px 24px;
}

.practice-problem {
    background: rgba(26, 115, 232, 0.05);
    border-bottom: 1px solid rgba(26, 115, 232, 0.1);
}

.practice-solution {
    transition: all 0.3s ease;
}

.solution-steps {
    margin-top: 16px;
}

.solution-step {
    margin-bottom: 16px;
    padding-left: 16px;
    border-left: 3px solid var(--primary);
}

.solution-equation, .solution-calculation {
    background: var(--surface-variant);
    padding: 12px;
    border-radius: 6px;
    margin: 8px 0;
    text-align: center;
}

.practice-answer {
    background: rgba(26, 115, 232, 0.1);
    border-top: 1px solid rgba(26, 115, 232, 0.2);
    padding: 16px;
    margin-top: 16px;
    border-radius: 6px;
    font-size: 18px;
}

/* Example box styling (keeping existing green theme) */
.example-box {
    background: var(--surface);
    border: 2px solid #0f9d58;
    border-radius: var(--radius);
    margin: 32px 0;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.example-header {
    background: linear-gradient(135deg, #0f9d58 0%, #0d8547 100%);
    color: white;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.example-icon {
    font-size: 20px;
}

.example-title {
    font-size: 16px;
    font-weight: 600;
}

.example-problem, .example-solution, .example-answer {
    padding: 20px 24px;
}

.example-problem {
    background: rgba(15, 157, 88, 0.05);
    border-bottom: 1px solid rgba(15, 157, 88, 0.1);
}

.example-answer {
    background: rgba(15, 157, 88, 0.1);
    border-top: 1px solid rgba(15, 157, 88, 0.2);
    font-size: 18px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .practice-header {
        flex-direction: column;
        gap: 12px;
        align-items: stretch;
    }
    
    .toggle-solution {
        text-align: center;
    }
    
    .practice-problem, .practice-solution {
        padding: 16px 20px;
    }
    
    .solution-step {
        padding-left: 12px;
    }
    
    .example-problem, .example-solution, .example-answer {
        padding: 16px 20px;
    }
}
</style>

<script>
// Initialize simulations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize MathJax
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
    
    // Initialize simulations if available
    if (typeof SimulationUtils !== 'undefined') {
        SimulationUtils.renderSimulation('projectile-motion', 'sim-projectile-showcase2', {
            velocity: 50,
            angle: 45,
            gravity: 9.81
        });
    }
    
    // MCQ System Configuration - EXACT same as page-2.md
    const questions = {
        1: {
            correct: 'b',
            explanation: 'Correct! Using v = u + at: v = 20 + (-10)(3) = 20 - 30 = -10 m/s. The negative sign indicates downward motion, so the ball is moving at 10 m/s downward after 3 seconds.'
        },
        2: {
            correct: 'b',
            explanation: 'Correct! The Newton (N) is the SI unit of force, named after Sir Isaac Newton. One Newton is the force required to accelerate a 1 kg mass at 1 m/s².'
        }
    };
    
    // MCQ Event Handlers - EXACT same as page-2.md
    document.querySelectorAll('.mcq-option').forEach(option => {
        option.addEventListener('click', function() {
            const container = this.closest('.mcq-container');
            const questionNum = container.dataset.question;
            const selectedOption = this.dataset.option;
            
            container.querySelectorAll('.mcq-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            this.classList.add('selected');
            checkMCQAnswer(questionNum, selectedOption);
        });
    });
    
    function checkMCQAnswer(questionNum, selectedOption) {
        const container = document.querySelector(`[data-question="${questionNum}"]`);
        const feedback = document.getElementById(`feedback${questionNum}`);
        const question = questions[questionNum];
        
        if (!question) return;
        
        const isCorrect = selectedOption === question.correct;
        
        container.querySelectorAll('.mcq-option').forEach(option => {
            const optionLetter = option.dataset.option;
            option.style.pointerEvents = 'none';
            
            if (optionLetter === question.correct) {
                option.classList.add('correct');
            } else if (option.classList.contains('selected') && optionLetter !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        feedback.style.display = 'block';
        feedback.className = `mcq-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = `
            <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
            ${question.explanation}
        `;
        
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// Practice Question Toggle Function
function toggleSolution(button) {
    const practiceBox = button.closest('.practice-box');
    const solution = practiceBox.querySelector('.practice-solution');
    
    if (solution.style.display === 'none' || solution.style.display === '') {
        solution.style.display = 'block';
        button.textContent = 'Hide Solution';
        
        // Trigger MathJax re-rendering for any equations in the solution
        if (window.MathJax) {
            MathJax.typesetPromise([solution]);
        }
        
        // Smooth scroll to show the solution
        setTimeout(() => {
            solution.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        solution.style.display = 'none';
        button.textContent = 'Show Solution';
    }
}
</script>