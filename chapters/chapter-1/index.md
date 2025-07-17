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

<a href="/physics-website/chapters/chapter-1/page-1/" class="chapter-link">
    <span class="page-number">1</span>
    <div class="page-info">
        <strong>Introduction & Simulations</strong>
        <p>Interactive demos and basic concepts</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<a href="/physics-website/chapters/chapter-1/page-2/" class="chapter-link">
    <span class="page-number">2</span>
    <div class="page-info">
        <strong>Mathematical Analysis</strong>
        <p>Equations and self-marking questions</p>
    </div>
    <span class="page-arrow">→</span>
</a>

<div class="chapter-link disabled">
    <span class="page-number">3</span>
    <div class="page-info">
        <strong>Advanced Applications</strong>
        <p>Coming soon...</p>
    </div>
    <span class="page-arrow">→</span>
</div>

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