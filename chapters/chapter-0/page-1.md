---
layout: layout.html
title: "Introduction & Simulations Demo"
---

# Introduction & Simulations Demo

(Keep all your existing content below this)

Write your content here. You can use:

- **Bold text**
- *Italic text*
- Lists like this one
- Links to other pages

<div class="physics-simulation" data-sim-id="standing-wave">
    <div class="simulation-container" id="sim-standing-wave-container" style="height: 600px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>Standing Wave Simulator</strong> - Your original interactive simulation with full functionality
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    if (typeof SimulationUtils !== 'undefined') {
        SimulationUtils.renderSimulation('standing-wave', 'sim-standing-wave-container');
    }
});
</script>

## Interactive Pendulum Simulation

Let's explore pendulum motion with this interactive simulation:

<div class="physics-simulation" data-sim-id="pendulum">
    <div class="simulation-container" id="sim-pendulum-container" style="height: 400px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>Simple Pendulum</strong> - Explore the motion of a simple pendulum and understand period, frequency, and energy conservation.
    </div>
</div>

<script>
// Load simulation when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof SimulationUtils !== 'undefined') {
        // You can pass custom parameters here
        SimulationUtils.renderSimulation('pendulum', 'sim-pendulum-container', {
            length: 1.5,
            angle: 20,
            gravity: 9.81
        });
    }
});
</script>

## Wave Interference Example

Here's another simulation showing wave interference:

<div class="physics-simulation" data-sim-id="wave-interference">
    <div class="simulation-container" id="sim-wave-container" style="height: 400px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>Wave Interference</strong> - Visualize how waves interact through constructive and destructive interference patterns.
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    if (typeof SimulationUtils !== 'undefined') {
        SimulationUtils.renderSimulation('wave-interference', 'sim-wave-container', {
            frequency1: 4,
            frequency2: 5,
            amplitude: 1.2
        });
    }
});
</script>

## Quick Embed Example

For even simpler embedding, you can use the helper function:

<div class="physics-simulation" data-sim-id="electric-field">
    <div class="simulation-container" id="sim-electric-container" style="height: 400px; margin-bottom: 16px;"></div>
    <div class="simulation-caption">
        <strong>Electric Field Visualization</strong> - Interactive electric field mapping with customizable charge configurations.
    </div>
</div>

<script>
// Simple one-liner embedding
embedSimulation('electric-field', 'sim-electric-container', {
    charge1: 8,
    charge2: -3,
    distance: 15
});
</script>

## Content Section

Add your main content here. This framework makes it easy to focus on writing while keeping everything organized.

You can also link to the full simulations browser: [View All Simulations](/physics-website/simulations/)

---

**Navigation:**
- [Back to Chapter 1](/physics-website/chapters/chapter-1/)
- [Next - Page 2](/physics-website/chapters/chapter-1/page-2/)
- [Home](/physics-website/)