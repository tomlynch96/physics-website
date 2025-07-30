---
layout: layout.html
title: "Introduction to Motion"
---

# Introduction to Motion

Welcome to the fundamental concepts of motion! In this lesson, we'll explore the difference between vectors and scalars, understand distance versus displacement, and learn how to add vectors together.

## Vectors and Scalars

<div class="equation-box">
    <div class="equation-label">Vector</div>
    <div class="equation-content">
        A quantity with magnitude and direction
    </div>
    <div class="equation-description">
        Examples: force, displacement, velocity, acceleration
    </div>
</div>

<div class="equation-box">
    <div class="equation-label">Scalar</div>
    <div class="equation-content">
        A quantity with a magnitude only
    </div>
    <div class="equation-description">
        Examples: mass, distance, speed, temperature, time
    </div>
</div>

For example, **force** is a **vector**. You can push forwards, pull backwards, lift upwards or press downwards. It has a magnitude (e.g. 10N) and a direction (e.g. diagonally up and left)

**Temperature** is a **scalar.** If somebody asks you how hot it is, you would never say '20 degrees Celsius -- to the left!' Temperature only has a magnitude.

<div class="mcq-container" data-question="1">
    <div class="mcq-header">
        <span class="mcq-number">Question 1</span>
        <span class="mcq-topic">Scalars and Vectors</span>
    </div>
    <div class="mcq-question">
        Which type of quantity is mass?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">Vector</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">Scalar</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback1" style="display: none;"></div>
</div>

## Distance and displacement

If you go for a run, there are a number of devices which are able to track how far you've travelled.

![Digital fitness watch displaying running distance and time on screen](/physics-website/images/chapter-1/fitness-watch-display.png)

<div class="mcq-container" data-question="2">
    <div class="mcq-header">
        <span class="mcq-number">Question 2</span>
        <span class="mcq-topic">Distance Tracking</span>
    </div>
    <div class="mcq-question">
        Does this value change if you ran off in the other direction?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">Yes</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">No</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback2" style="display: none;"></div>
</div>

<div class="mcq-container" data-question="3">
    <div class="mcq-header">
        <span class="mcq-number">Question 3</span>
        <span class="mcq-topic">Quantity Types</span>
    </div>
    <div class="mcq-question">
        So what kind of quantity is being tracked?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">Scalar</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">Vector</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback3" style="display: none;"></div>
</div>

<div class="equation-box">
    <div class="equation-label">Distance</div>
    <div class="equation-content">
        A scalar quantity representing the total length of path travelled by an object, regardless of direction.
    </div>
    <div class="equation-description">
        The SI unit for distance is metres (m).
    </div>
</div>

<div class="equation-box">
    <div class="equation-label">Displacement</div>
    <div class="equation-content">
        A vector quantity that represents the change in position of an object. It is the straight-line distance from the initial position to the final position, measured in a specific direction.
    </div>
    <div class="equation-description">
        The SI unit for displacement is metres (m).
    </div>
</div>

![Diagram showing curved path taken (distance) versus straight line from start to finish (displacement)](/physics-website/images/chapter-1/distance-vs-displacement-diagram.png)

<div class="mcq-container" data-question="4">
    <div class="mcq-header">
        <span class="mcq-number">Question 4</span>
        <span class="mcq-topic">Distance Calculation</span>
    </div>
    <div class="mcq-question">
        You walk 1 km to the shops, then 1km back home - what is the distance you have travelled?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">1km</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">2km</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">0km</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">More information needed</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback4" style="display: none;"></div>
</div>

<div class="mcq-container" data-question="5">
    <div class="mcq-header">
        <span class="mcq-number">Question 5</span>
        <span class="mcq-topic">Displacement Calculation</span>
    </div>
    <div class="mcq-question">
        You walk 1 km to the shops, then 1km back home - what is your overall displacement?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">1km</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">2km</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">0km</span>
        </div>
        <div class="mcq-option" data-option="d">
            <span class="option-label">D</span>
            <span class="option-text">More information needed</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback5" style="display: none;"></div>
</div>

## Velocity and speed

Cars have a speedometer to show how fast the car is travelling.

<div class="mcq-container" data-question="6">
    <div class="mcq-header">
        <span class="mcq-number">Question 6</span>
        <span class="mcq-topic">Speedometer Reading</span>
    </div>
    <div class="mcq-question">
        If the speedometer shows a positive number (e.g.30mph) on a journey to the shops, does it show a negative reading (e.g. -30mph) as you travel home?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">Yes</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">No</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback6" style="display: none;"></div>
</div>

<div class="equation-box">
    <div class="equation-label">Speed</div>
    <div class="equation-content">
        A scalar quantity that measures how fast an object is moving, regardless of direction. It is the rate of change of distance with respect to time.
    </div>
    <div class="equation-description">
        The SI unit for speed is m/s.
    </div>
</div>

<div class="equation-box">
    <div class="equation-label">Velocity</div>
    <div class="equation-content">
        A vector quantity that measures the rate of change of displacement with respect to time. It describes both how fast an object is moving and in which direction.
    </div>
    <div class="equation-description">
        The SI unit for velocity is m/s.
    </div>
</div>

## Adding vectors

If you run 4km, and then run 3km -- your total distance is 7km, regardless of the directions travelled in. With displacement, or any other vector quantity (e.g. force), it's not so simple.

Let take the scenario where you travel 4km North and then 3 km East.

![Grid diagram showing 4km North movement followed by 3km East movement, forming two sides of a right triangle](/physics-website/images/chapter-1/vector-addition-4km-north-3km-east.png)

<div class="mcq-container" data-question="7">
    <div class="mcq-header">
        <span class="mcq-number">Question 7</span>
        <span class="mcq-topic">Displacement Definition</span>
    </div>
    <div class="mcq-question">
        Which correctly describes displacement?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">A vector quantity that represents the change in position of an object. It is the straight-line distance from the initial position to the final position, measured in a specific direction</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">A scalar quantity representing the total length of path travelled by an object, regardless of direction</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback7" style="display: none;"></div>
</div>

So, in order to calculate the addition of two displacements (4km North plus 3 km East) we need to calculate the straight-line distance from the initial position to the final position.

![Same grid diagram now showing the resultant displacement as the hypotenuse of the right triangle formed by the two perpendicular vectors](/physics-website/images/chapter-1/vector-addition-resultant-displacement.png)

Since our two individual displacement vectors are at 90° to each other, this is the same as calculating the hypotenuse of a right-angle triangle. For this we use Pythagoras theorem.

<div class="example-box">
    <div class="example-header">
        <span class="example-icon">💡</span>
        <span class="example-title">Worked Example</span>
    </div>
    <div class="example-problem">
        <strong>Problem:</strong> Calculate the magnitude of displacement for a journey travelling 4km North and 3km East
    </div>
    <div class="example-solution">
        <strong>Solution:</strong>
        <div class="solution-steps">
            <div class="solution-step">
                <strong>Step 1:</strong> Draw a diagram like the one below
                <p>The two displacement vectors form two sides of a right-angled triangle.</p>
            </div>
            <div class="solution-step">
                <strong>Step 2:</strong> Use Pythagoras theorem to calculate the hypotenuse, H, of the triangle
                <div class="solution-equation">$$H^2 = 4^2 + 3^2$$</div>
                <div class="solution-calculation">
                    $$H^2 = 16 + 9 = 25$$
                    $$H = \sqrt{25} = 5 \text{ km}$$
                </div>
            </div>
        </div>
    </div>
    <div class="example-answer">
        <strong>Answer:</strong> The magnitude of displacement is 5km
    </div>
</div>

<div class="mcq-container" data-question="8">
    <div class="mcq-header">
        <span class="mcq-number">Question 8</span>
        <span class="mcq-topic">Pythagoras Application</span>
    </div>
    <div class="mcq-question">
        Why were we able to use Pythagoras' Theorem in the worked example?
    </div>
    <div class="mcq-options">
        <div class="mcq-option" data-option="a">
            <span class="option-label">A</span>
            <span class="option-text">Because we were adding displacements</span>
        </div>
        <div class="mcq-option" data-option="b">
            <span class="option-label">B</span>
            <span class="option-text">Because the vectors we were adding formed 2 sides of a triangle</span>
        </div>
        <div class="mcq-option" data-option="c">
            <span class="option-label">C</span>
            <span class="option-text">Because the vectors we were adding formed 2 sides of a right-angle triangle</span>
        </div>
    </div>
    <div class="mcq-feedback" id="feedback8" style="display: none;"></div>
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
        <strong>Problem:</strong> Calculate the overall magnitude displacement of a journey consisting of 7km West followed by 3km South
    </div>
    <div class="practice-solution" style="display: none;">
        <strong>Solution:</strong>
        <div class="solution-steps">
            <div class="solution-step">
                <strong>Step 1:</strong> Identify the given information
                <ul>
                    <li>First displacement: 7km West</li>
                    <li>Second displacement: 3km South</li>
                    <li>These vectors are perpendicular (90° to each other)</li>
                </ul>
            </div>
            <div class="solution-step">
                <strong>Step 2:</strong> Apply Pythagoras theorem
                <div class="solution-equation">$$H^2 = 7^2 + 3^2$$</div>
            </div>
            <div class="solution-step">
                <strong>Step 3:</strong> Calculate the result
                <div class="solution-calculation">
                    $$H^2 = 49 + 9 = 58$$
                    $$H = \sqrt{58} = 7.62 \text{ km (to 2 d.p.)}$$
                </div>
            </div>
        </div>
        <div class="practice-answer">
            <strong>Answer:</strong> The magnitude of displacement is 7.62 km
        </div>
    </div>
</div>

<div class="callout">
    <div class="callout-content">
        <div class="callout-icon">💡</div>
        <div class="callout-text">
            <strong>Key Point:</strong> This approach of using Pythagoras' Theorem to find the resultant of two perpendicular vectors can be applied to all vectors -- not just displacement. Have a go at the practice question below.
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
        <strong>Problem:</strong> Two people pull on an object. One exerts a force of 100N to the left. The other exerts a force of 200N Upwards. By considering these two forces only, calculate the resultant force on the object.
    </div>
    <div class="practice-solution" style="display: none;">
        <strong>Solution:</strong>
        <div class="solution-steps">
            <div class="solution-step">
                <strong>Step 1:</strong> Identify the given information
                <ul>
                    <li>Force 1: 100N to the left</li>
                    <li>Force 2: 200N upwards</li>
                    <li>These forces are perpendicular (90° to each other)</li>
                </ul>
            </div>
            <div class="solution-step">
                <strong>Step 2:</strong> Apply Pythagoras theorem for the resultant force
                <div class="solution-equation">$$F_{resultant}^2 = 100^2 + 200^2$$</div>
            </div>
            <div class="solution-step">
                <strong>Step 3:</strong> Calculate the magnitude
                <div class="solution-calculation">
                    $$F_{resultant}^2 = 10000 + 40000 = 50000$$
                    $$F_{resultant} = \sqrt{50000} = 224 \text{ N (to 3 s.f.)}$$
                </div>
            </div>
        </div>
        <div class="practice-answer">
            <strong>Answer:</strong> The resultant force on the object is 224 N
        </div>
    </div>
</div>

---

**Navigation:**
- [Back to Chapter 1](/physics-website/chapters/chapter-1/)
- [Next: Equations of Motion](/physics-website/chapters/chapter-1/equations-of-motion/)

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js"></script>

<script>
// MCQ System Configuration
const questions = {
    1: {
        correct: 'b',
        explanation: 'Correct! Mass only has a magnitude. It does not have a direction'
    },
    2: {
        correct: 'b',
        explanation: 'Correct! No, you\'d be a little confused if your apple watch suggested you\'d ran -10km.'
    },
    3: {
        correct: 'a',
        explanation: 'Correct! You are tracking **distance** which is a scalar.'
    },
    4: {
        correct: 'b',
        explanation: 'Correct! When measuring distance, direction doesn\'t matter - the path length always accumulates the more you travel'
    },
    5: {
        correct: 'c',
        explanation: 'Correct! When measuring displacement you are comparing your initial and final position. If you are back home then this is 0km from where you started.'
    },
    6: {
        correct: 'b',
        explanation: 'Correct! The speedometer shows you **speed** which is a scalar. It has a magnitude (e.g. 30mph) but no direction.'
    },
    7: {
        correct: 'a',
        explanation: 'Correct! Displacement is a vector quantity that represents the change in position of an object. It is the straight-line distance from the initial position to the final position, measured in a specific direction'
    },
    8: {
        correct: 'c',
        explanation: 'Correct! When adding two vectors which are at 90 degrees to one another, Pythagoras\' Theorem can be used since the resultant vector is the hypotenuse.'
    }
};

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize MathJax for equation rendering
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
    
    // MCQ Event Handlers
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
        
        // Trigger MathJax re-rendering for equations in solution
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