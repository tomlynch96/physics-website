# A-Level Physics Interactive Learning Platform

A comprehensive curriculum supplement for A-Level Physics students covering all major UK exam board specifications (AQA, OCR A, Edexcel). Features interactive simulations, mathematical analysis, and self-marking questions designed for both mobile and desktop learning.

## 🎯 Project Overview

**Purpose**: Curriculum supplement covering most A-Level Physics content through interactive learning.
**Target Audience**: A-Level Physics students (UK specifications)
**Content Strategy**: 24 planned chapters with 139 individual lessons
**Current Focus**: Chapter 1 (Mechanics) + full simulation library

## 📊 Current Status

- ✅ **Chapter 0**: Demo & Testing (2 lessons) - Active testing environment
- 🚧 **Chapter 1**: Mechanics - Motion and Forces (7 lessons) - In active development
- 📋 **Chapters 2-24**: Planned (see `physics_website_structure.md` for full outline)
- 🎮 **Simulations**: Full course library across all physics topics

## 🏗️ Technical Architecture

### Core Technologies
- **Static Site Generator**: Eleventy (11ty) v2.0.1
- **Hosting**: GitHub Pages with automated deployment
- **Styling**: Custom CSS with mobile-first responsive design
- **Simulations**: Custom HTML files with JavaScript + Canvas
- **Math Rendering**: MathJax for equations
- **Data Management**: Single source of truth architecture

### Key Design Principles
- **Mobile & Desktop Compatible**: Responsive design works across all devices
- **Single Source of Truth**: All chapter/page data managed in one location
- **Modular Simulations**: Individual HTML files that can be embedded anywhere
- **Specification Mapping**: Content tagged to exam board requirements

## 📁 Repository Structure & File Functions

### 🗂️ Root Configuration Files

**`package.json`**
- Project metadata and dependencies
- Build scripts: `npm run build` (static generation) and `npm run serve` (development server)
- Single dependency: Eleventy v2.0.1

**`.eleventy.js`**
- Eleventy configuration and build settings
- Defines shortcodes for chapter navigation (`{% chapterNav %}`) and index generation (`{% chapterIndex %}`)
- Handles computed data for automatic chapter/page slug detection
- Manages passthrough copying of assets (CSS, JS, images, simulations)
- Uses `_data/chapters.js` as single source of truth for all navigation

**`.github/workflows/deploy.yml`**
- Automated GitHub Actions deployment to GitHub Pages
- Triggers on pushes to main branch
- Handles Node.js setup, dependency installation, and site building

### 📚 Content Data Management

**`_data/chapters.js`** - **SINGLE SOURCE OF TRUTH**
- Master file containing ALL chapter and page information
- Rich metadata: titles, descriptions, icons, categories, learning outcomes
- Complete page structure for each chapter
- Status control (`active`, `coming-soon`) for visibility management
- Exam board specification tags (planned)
- **This is the ONLY file to edit when adding new chapters/pages**

**`js/chapter-navigation.js`**
- Client-side navigation helpers and utilities
- Keyboard shortcuts for page navigation (Ctrl+Arrow keys)
- Simulation embed code generation
- Smooth scrolling and UI enhancements
- **Pure client-side**: No server dependencies

### 🎨 Styling & Assets

**`css/style.css`**
- Main stylesheet with comprehensive responsive design
- CSS custom properties for consistent theming
- Mobile-first approach with desktop enhancements
- Navigation, hero sections, cards, and content styling
- Advanced features: animations, hover effects, accessibility focus states

**`css/simulations.css`**
- Dedicated styles for simulation pages and embedded simulations
- Modal overlays for fullscreen simulation viewing
- Control panels and filter interfaces
- Responsive grid layouts for simulation cards

### 🎮 Simulations System

**`simulations/` Directory**
- Individual HTML files for each physics simulation
- **Self-contained**: Each file includes HTML, CSS, and JavaScript
- **Embeddable**: Can be called from any chapter page
- **Example**: `simulations/standing-wave.html` - Complete interactive standing wave simulator

**`simulations/index.md`**
- Master simulation browser page
- Displays all available simulations with filtering
- Powered by `_includes/simulations.html` template

**`js/simulations-data.js`**
- Simulation metadata and management system
- `SIMULATIONS_DATA` array with all simulation definitions
- `SimulationUtils` class for embedding and rendering
- Categories, difficulty levels, and control parameters
- **Generates embed codes** for easy insertion into lessons

### 🎭 Template System

**`_includes/` Directory - Template Components**

**`_includes/layout.html`**
- Standard page layout for lesson content
- Includes header, navigation, content area, and footer
- Loads simulation scripts and navigation JavaScript
- Mobile menu functionality

**`_includes/landing.html`**
- Homepage template with dynamic features
- Typewriter effect hero section
- Simulation carousel with auto-play
- Expandable chapter cards (pulls from `_data/chapters.js`)
- **Fully responsive** with touch/swipe support

**`_includes/simulations.html`**
- Dedicated template for simulation browser page
- Interactive filtering by category and difficulty
- Modal system for viewing simulations
- Embed code generation and copy functionality

**`_includes/navigation.html`**
- Site-wide navigation component
- Desktop dropdown menus and mobile overlay
- Dynamically populated from `_data/chapters.js`
- **Responsive**: Adapts to screen size automatically

### 📖 Content Pages

**Chapter Structure**: `/chapters/chapter-X/`
- Each chapter has an `index.md` overview page
- Individual lesson pages follow pattern: `lesson-slug.md`
- Uses `layout.html` template with automatic navigation
- **Auto-generated navigation** between pages using `{% chapterNav %}`

**Example Content Files**:
- `chapters/chapter-0/index.md` - Chapter overview with lesson links
- `chapters/chapter-0/page-1.md` - Individual lesson page
- `chapters/chapter-0/page-2.md` - Mathematical analysis with MCQ questions

**`index.md`** (Homepage)
- Uses `landing.html` template
- Dynamic hero with typewriter effect
- Simulation carousel
- Chapter cards auto-generated from data

### 📋 Documentation

**`physics_website_structure.md`**
- Complete planned structure: 24 chapters, 139 lessons
- Detailed breakdown by topic and learning objectives
- Implementation priority phases
- **Reference document** for content planning

**`project_implementation_guide.md`**
- Technical implementation strategy
- Content organization principles
- Specification mapping approach
- Future development roadmap

## 🔄 Content Creation Workflow

### Adding New Lessons
1. **Write content** in Word documents
2. **Convert to Markdown** (using Claude assistance)
3. **Add to `_data/chapters.js`** in appropriate chapter's `pages` array
4. **Create lesson file** at `/chapters/chapter-X/lesson-slug.md`
5. **Use placeholder images** initially, replace later
6. **Tag with specification codes** in `_data/chapters.js`

### Adding New Simulations
1. **Create HTML file** in `/simulations/` directory
2. **Add metadata** to `js/simulations-data.js`
3. **Embed in lessons** using simulation utilities
4. **Test on both** mobile and desktop

### Publishing Updates
- **Commit changes** to main branch
- **GitHub Actions** automatically builds and deploys
- **Live updates** appear on GitHub Pages within minutes

## 🎮 Simulation Integration

### How Simulations Work
- **Individual HTML files** in `/simulations/` directory
- **Self-contained**: Include all CSS/JS internally
- **Responsive design**: Work on mobile and desktop
- **Embeddable**: Can be inserted into any lesson page

### Embedding in Lessons
```html
<div class="physics-simulation" data-sim-id="simulation-name">
    <div class="simulation-container" id="sim-container" style="height: 400px;"></div>
    <div class="simulation-caption">
        <strong>Simulation Title</strong> - Description
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    if (typeof SimulationUtils !== 'undefined') {
        SimulationUtils.renderSimulation('simulation-name', 'sim-container');
    }
});
</script>
```

### Simulation Categories
- **Mechanics**: Motion, forces, energy, momentum
- **Waves**: Wave properties, interference, standing waves
- **Electromagnetism**: Fields, circuits, electromagnetic induction
- **Quantum**: Photoelectric effect, wave-particle duality
- **Thermodynamics**: Heat transfer, gas laws

## 📚 Exam Board Coverage

### Supported Specifications
- **AQA**: A-Level Physics (7408)
- **OCR A**: A-Level Physics H556
- **Edexcel**: A-Level Physics (9PH0)

### Specification Mapping (Planned)
- Each lesson page tagged with relevant specification codes
- Future specification mapping page showing:
  - Exam board code → Website lesson coverage
  - Gap analysis for complete curriculum coverage
  - Cross-references between different board requirements

## 🛠️ Development Commands

```bash
# Development server with live reload
npm run serve

# Build static site for production
npm run build

# Install dependencies (first time setup)
npm install
```

## 📱 Browser Support

### Requirements
- **Modern browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile responsive**: iOS Safari, Android Chrome
- **JavaScript**: Required for simulations and navigation
- **HTML5 Canvas**: Required for physics simulations

### Performance Considerations
- **Lightweight**: Static site generation for fast loading
- **Progressive enhancement**: Basic content works without JavaScript
- **Responsive images**: Optimized for mobile data usage
- **Efficient animations**: CSS transforms and transitions

## 🔮 Future Development

### Immediate Priorities
1. **Complete Chapter 1**: All 7 mechanics lessons with embedded simulations
2. **Simulation library**: Full course coverage across all physics topics
3. **Specification tagging**: Add exam board codes to all content

### Medium Term
1. **Chapters 2-5**: Core A-Level topics (Energy, Materials, Waves, Interference)
2. **Specification mapping page**: Visual curriculum coverage tool
3. **Enhanced MCQ system**: More interactive self-assessment

### Long Term
1. **Complete 24 chapters**: Full A-Level coverage (139 lessons)
2. **Advanced simulations**: More complex interactive experiments
3. **Progress tracking**: Student learning analytics (if needed)

## 🏃‍♂️ Quick Start Guide

1. **Clone repository**
2. **Run `npm install`** to install Eleventy
3. **Run `npm run serve`** for development
4. **Edit `_data/chapters.js`** to add new content
5. **Create lesson files** in `/chapters/chapter-X/`
6. **Test on mobile and desktop**
7. **Commit to main branch** for automatic deployment

---

**Note**: This is a single-author project focused on creating comprehensive A-Level Physics educational content with interactive simulations. The architecture prioritizes ease of content creation while maintaining technical flexibility for future enhancements.
