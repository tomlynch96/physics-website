---
layout: layout.html
title: "Chapter 1: Getting Started"
---

# Simple Harmonic Motion

This chapter covers the fundamental concepts of oscillatory motion, from basic principles to mathematical analysis.

## What You'll Learn

- Basic concepts of simple harmonic motion
- Mathematical foundations and differential equations  
- Energy conservation in oscillating systems
- Real-world applications of SHM

## Chapter Pages

<div class="page-list">
    <a href="/physics-website/chapters/chapter-1/page-1/" class="page-item">
        <span class="page-num">1</span>
        <div class="page-content">
            <h3>Introduction & Simulations</h3>
            <p>Interactive demos and basic concepts</p>
        </div>
        <span class="arrow">→</span>
    </a>

    <a href="/physics-website/chapters/chapter-1/page-2/" class="page-item">
        <span class="page-num">2</span>
        <div class="page-content">
            <h3>Mathematical Analysis</h3>
            <p>Equations and self-marking questions</p>
        </div>
        <span class="arrow">→</span>
    </a>

    <div class="page-item disabled">
        <span class="page-num">3</span>
        <div class="page-content">
            <h3>Advanced Applications</h3>
            <p>Coming soon...</p>
        </div>
        <span class="arrow">→</span>
    </div>
</div>

<style>
.page-list {
    margin: 2rem 0;
}

.page-item {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    margin: 0.5rem 0;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
}

.page-item:hover {
    border-color: var(--primary);
    transform: translateX(4px);
}

.page-item.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.page-item.disabled:hover {
    border-color: var(--border);
    transform: none;
}

.page-num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    font-weight: 600;
    margin-right: 1rem;
}

.page-item.disabled .page-num {
    background: var(--text-secondary);
}

.page-content {
    flex: 1;
}

.page-content h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1.1rem;
    font-weight: 500;
}

.page-content p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.arrow {
    color: var(--primary);
    font-weight: bold;
    transition: transform 0.2s ease;
}

.page-item:hover .arrow {
    transform: translateX(2px);
}

.page-item.disabled .arrow {
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .page-item {
        padding: 0.75rem 1rem;
    }
    
    .page-num {
        width: 1.75rem;
        height: 1.75rem;
        font-size: 0.9rem;
    }
}
</style>