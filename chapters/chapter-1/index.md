---
layout: layout.html
title: "Chapter 1: Mechanics - Motion and Forces"
---

# 🚀 Chapter 1: Mechanics - Motion and Forces

This chapter covers the foundation of physics - how objects move and the forces that cause motion. From simple displacement to complex collisions, you'll master the fundamental principles that govern everything from falling apples to spacecraft trajectories.

## What's Inside

- Kinematics and motion description
- Newton's laws of motion
- Energy and momentum conservation
- Projectile motion analysis
- Force equilibrium and moments
- Motion through fluids

## Purpose

Master the fundamentals:
- Describe motion using displacement, velocity, and acceleration
- Apply Newton's laws to solve motion problems
- Analyze energy transformations and conservation
- Understand momentum and collision physics

---

*Foundation physics that applies to everything that moves!*

## Chapter Pages

<a href="/physics-website/chapters/chapter-1/introduction-to-motion/" class="chapter-link">
    <span class="page-number">1</span>
    <div class="page-info">
        <strong>Introduction to Motion</strong>
        <p>Displacement, velocity, acceleration concepts and vector analysis</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<a href="/physics-website/chapters/chapter-1/equations-of-motion/" class="chapter-link">
    <span class="page-number">2</span>
    <div class="page-info">
        <strong>Equations of Motion</strong>
        <p>SUVAT equations derivation and problem-solving techniques</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<a href="/physics-website/chapters/chapter-1/forces-and-newtons-laws/" class="chapter-link">
    <span class="page-number">3</span>
    <div class="page-info">
        <strong>Forces and Newton's Laws</strong>
        <p>Three laws of motion with free body diagrams</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<a href="/physics-website/chapters/chapter-1/projectile-motion/" class="chapter-link">
    <span class="page-number">4</span>
    <div class="page-info">
        <strong>Projectile Motion</strong>
        <p>Independence of motion components and trajectory analysis</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<a href="/physics-website/chapters/chapter-1/momentum-and-collisions/" class="chapter-link">
    <span class="page-number">5</span>
    <div class="page-info">
        <strong>Momentum and Collisions</strong>
        <p>Conservation laws and impulse calculations</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<a href="/physics-website/chapters/chapter-1/equilibrium-and-moments/" class="chapter-link">
    <span class="page-number">6</span>
    <div class="page-info">
        <strong>Equilibrium and Moments</strong>
        <p>Balanced forces and rotational equilibrium</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<a href="/physics-website/chapters/chapter-1/terminal-velocity/" class="chapter-link">
    <span class="page-number">7</span>
    <div class="page-info">
        <strong>Terminal Velocity</strong>
        <p>Motion through fluids and drag forces</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<style>
.chapter-link {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    margin: 8px 0;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
}

.chapter-link:hover {
    border-color: var(--primary);
    transform: translateX(4px);
}

.chapter-link.disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.chapter-link.disabled:hover {
    transform: none;
    border-color: var(--border);
}

.page-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    font-weight: 600;
    font-size: 14px;
    margin-right: 16px;
    flex-shrink: 0;
}

.chapter-link.disabled .page-number {
    background: var(--text-secondary);
}

.page-info {
    flex: 1;
}

.page-info strong {
    display: block;
    font-size: 16px;
    margin-bottom: 4px;
    color: var(--text-primary);
}

.page-info p {
    margin: 0;
    font-size: 14px;
    color: var(--text-secondary);
}

.page-arrow {
    color: var(--primary);
    font-weight: bold;
    font-size: 18px;
    margin-left: 16px;
    transition: transform 0.2s ease;
}

.chapter-link:hover .page-arrow {
    transform: translateX(2px);
}

.chapter-link.disabled .page-arrow {
    color: var(--text-secondary);
}

.chapter-link.disabled:hover .page-arrow {
    transform: none;
}
</style>