---
layout: layout.html
title: "Chapter 1: Getting Started"
---

This is the first chapter of my website. Here you'll find the introduction and basic concepts.

## Chapter Overview

In this chapter, we'll cover:
- Basic concepts and introduction to simple harmonic motion
- Mathematical foundations and differential equations
- Energy conservation and applications
- Key principles of oscillatory motion

## Pages in This Chapter

<div class="chapter-page-grid">
    <a href="/physics-website/chapters/chapter-1/page-1/" class="page-card">
        <div class="page-number">Page 1</div>
        <div class="page-title">Introduction & Simulations</div>
        <div class="page-description">Basic concepts with interactive pendulum, wave interference, and electric field simulations</div>
        <div class="page-meta">
            <span class="page-duration">⏱️ 15 min</span>
            <span class="page-type">🔬 Interactive</span>
        </div>
    </a>
    
    <a href="/physics-website/chapters/chapter-1/page-2/" class="page-card">
        <div class="page-number">Page 2</div>
        <div class="page-title">Mathematical Analysis</div>
        <div class="page-description">Equations, differential analysis, period calculations, and self-marking questions</div>
        <div class="page-meta">
            <span class="page-duration">⏱️ 20 min</span>
            <span class="page-type">📐 Mathematical</span>
        </div>
    </a>
    
    <a href="/physics-website/chapters/chapter-1/page-3/" class="page-card coming-soon">
        <div class="page-number">Page 3</div>
        <div class="page-title">Advanced Applications</div>
        <div class="page-description">Real-world examples and complex systems</div>
        <div class="page-meta">
            <span class="page-duration">⏱️ Coming Soon</span>
            <span class="page-type">🚀 Advanced</span>
        </div>
    </a>
</div>

Navigate through the pages to learn more!

<style>
.chapter-page-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin: 32px 0;
}

.page-card {
    background: var(--surface);
    border: 2px solid var(--border);
    border-radius: var(--radius);
    padding: 24px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow);
    position: relative;
    overflow: hidden;
}

.page-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(26, 115, 232, 0.1), transparent);
    transition: left 0.5s;
}

.page-card:hover::before {
    left: 100%;
}

.page-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary);
}

.page-card.coming-soon {
    opacity: 0.6;
    cursor: not-allowed;
}

.page-card.coming-soon:hover {
    transform: none;
    box-shadow: var(--shadow);
    border-color: var(--border);
}

.page-number {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
}

.page-card.coming-soon .page-number {
    background: var(--text-secondary);
}

.page-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 8px;
    line-height: 1.3;
}

.page-description {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 16px;
}

.page-meta {
    display: flex;
    gap: 12px;
    font-size: 12px;
    color: var(--text-tertiary);
}

.page-duration,
.page-type {
    display: flex;
    align-items: center;
    gap: 4px;
}

@media (max-width: 768px) {
    .chapter-page-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    
    .page-card {
        padding: 20px;
    }
}
</style>