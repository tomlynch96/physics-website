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

<div class="chapter-pages">
    <a href="/physics-website/chapters/chapter-1/page-1/" class="page-link">
        <div class="page-info">
            <span class="page-number">01</span>
            <div class="page-details">
                <h3>Introduction & Simulations</h3>
                <p>Interactive pendulum, wave interference, and electric field demos</p>
            </div>
        </div>
        <span class="page-arrow">→</span>
    </a>
    
    <a href="/physics-website/chapters/chapter-1/page-2/" class="page-link">
        <div class="page-info">
            <span class="page-number">02</span>
            <div class="page-details">
                <h3>Mathematical Analysis</h3>
                <p>Equations, calculations, and self-marking questions</p>
            </div>
        </div>
        <span class="page-arrow">→</span>
    </a>
    
    <div class="page-link coming-soon">
        <div class="page-info">
            <span class="page-number">03</span>
            <div class="page-details">
                <h3>Advanced Applications</h3>
                <p>Real-world examples and complex systems</p>
            </div>
        </div>
        <span class="page-arrow">→</span>
    </div>
</div>

Navigate through the pages to learn more!

<style>
.chapter-pages {
    margin: 32px 0;
}

.page-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    margin: 12px 0;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.page-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: var(--primary);
    transform: scaleY(0);
    transition: transform 0.3s ease;
}

.page-link:hover::before {
    transform: scaleY(1);
}

.page-link:hover {
    border-color: var(--primary);
    background: var(--surface-variant);
    transform: translateX(8px);
    box-shadow: var(--shadow);
}

.page-link.coming-soon {
    opacity: 0.6;
    cursor: not-allowed;
}

.page-link.coming-soon:hover {
    transform: none;
    border-color: var(--border);
    background: var(--surface);
    box-shadow: none;
}

.page-link.coming-soon::before {
    background: var(--text-secondary);
}

.page-info {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
}

.page-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
}

.page-link.coming-soon .page-number {
    background: var(--text-secondary);
}

.page-details h3 {
    margin: 0 0 4px 0;
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
}

.page-details p {
    margin: 0;
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.4;
}

.page-arrow {
    font-size: 20px;
    color: var(--primary);
    font-weight: bold;
    transition: transform 0.3s ease;
}

.page-link:hover .page-arrow {
    transform: translateX(4px);
}

.page-link.coming-soon .page-arrow {
    color: var(--text-secondary);
}

.page-link.coming-soon:hover .page-arrow {
    transform: none;
}

@media (max-width: 768px) {
    .page-link {
        padding: 16px 20px;
    }
    
    .page-info {
        gap: 16px;
    }
    
    .page-number {
        width: 40px;
        height: 40px;
        font-size: 14px;
    }
    
    .page-details h3 {
        font-size: 16px;
    }
    
    .page-details p {
        font-size: 13px;
    }
    
    .page-link:hover {
        transform: translateX(4px);
    }
}
</style>