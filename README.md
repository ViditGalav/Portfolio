# 🚀 Vidit Galav - Portfolio Website

A stunning, animated portfolio website showcasing blockchain development expertise, certifications, and professional achievements.

## ✨ Features

### 🎨 **Visual Design**
- **Dark Theme**: Modern blockchain-inspired dark color scheme
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: GSAP-powered animations and transitions
- **Particle Effects**: Interactive background particle system
- **Gradient Accents**: Beautiful gradient overlays and highlights

### 🎯 **Interactive Elements**
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive cards and buttons with animations
- **Typing Effect**: Animated text typing in hero section
- **Counter Animations**: Animated statistics counters
- **Skill Bars**: Animated progress bars for skills
- **Parallax Effects**: Subtle parallax scrolling effects

### 📱 **Sections**
1. **Hero Section**: Animated introduction with particle background
2. **About Section**: Professional summary with profile card
3. **Experience**: Timeline of work experience
4. **Certifications**: Interactive certification showcase
5. **Projects**: Project portfolio with live links
6. **Skills**: Animated skill bars and technology icons
7. **Contact**: Professional contact information and social links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **GSAP**: Professional animations and scroll triggers
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Inter & JetBrains Mono)

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone or Download**
   ```bash
   # If using git
   git clone <repository-url>
   
   # Or download the ZIP file and extract
   ```

2. **Open the Website**
   ```bash
   # Option 1: Open directly in browser
   double-click index.html
   
   # Option 2: Use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Use Live Server extension in VS Code
   ```

3. **View the Portfolio**
   - Open your browser and navigate to the website
   - Enjoy the animated experience!

## 🎨 Customization Guide

### Colors
The color scheme is defined in CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #10b981;    /* Success/accent color */
    --accent-color: #f59e0b;       /* Warning/highlight color */
    --text-primary: #f8fafc;       /* Primary text color */
    --bg-primary: #0f172a;         /* Main background */
    --bg-secondary: #1e293b;       /* Secondary background */
}
```

### Content Updates

#### 1. **Personal Information**
Edit the hero section in `index.html`:
```html
<div class="hero-title">
    <h1 class="title-line">Vidit Galav</h1>
    <p class="title-subtitle">Blockchain Developer & CTO</p>
</div>
```

#### 2. **About Section**
Update the about text and profile information:
```html
<div class="about-text">
    <p>Your updated bio here...</p>
</div>
```

#### 3. **Experience Timeline**
Modify the experience items in the timeline:
```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Position</h3>
        <h4>Company Name</h4>
        <p class="timeline-date">2023 - Present</p>
        <ul>
            <li>Your achievement 1</li>
            <li>Your achievement 2</li>
        </ul>
    </div>
</div>
```

#### 4. **Certifications**
Update certification cards:
```html
<div class="cert-card">
    <div class="cert-icon">
        <i class="fas fa-certificate"></i>
    </div>
    <h3>Certification Name</h3>
    <p>Issuing Organization</p>
    <span class="cert-date">2023</span>
</div>
```

#### 5. **Projects**
Add your projects:
```html
<div class="project-card">
    <div class="project-image">
        <img src="project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-sm">Live Demo</a>
            <a href="#" class="btn btn-sm btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

#### 6. **Skills**
Update skill bars with your proficiency levels:
```html
<div class="skill-item">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>90%</span>
    </div>
    <div class="skill-bar" data-level="90">
        <div class="skill-progress"></div>
    </div>
</div>
```

#### 7. **Contact Information**
Update contact details:
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h3>Email</h3>
        <p>your.email@example.com</p>
    </div>
</div>
```

### Images and Assets

#### Profile Picture
Replace `profile-image.jpg` with your photo:
- Recommended size: 400x400px
- Format: JPG, PNG, or WebP
- Place in the same directory as `index.html`

#### Project Images
Add project screenshots:
- Recommended size: 600x400px
- Format: JPG, PNG, or WebP
- Update image paths in project cards

#### Favicon
Replace `favicon.ico` with your custom favicon:
- Size: 32x32px or 16x16px
- Format: ICO, PNG, or SVG

## 🎭 Animation Customization

### GSAP Animations
The animations are controlled in `script.js`. Key animation functions:

- `initAnimations()`: Hero section animations
- `animateSkillBars()`: Skill bar progress animations
- `animateCounters()`: Statistics counter animations
- `initHoverEffects()`: Interactive hover effects

### Particle System
Customize the particle animation in the `ParticleAnimation` class:
```javascript
this.particleCount = 100;  // Number of particles
this.particles.push({
    size: Math.random() * 2 + 1,  // Particle size range
    opacity: Math.random() * 0.5 + 0.2  // Opacity range
});
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Optimizations
- Collapsible navigation menu
- Optimized touch targets
- Simplified animations for performance
- Responsive typography scaling

## ⚡ Performance Optimizations

### Loading Speed
- Optimized images and assets
- Minified CSS and JavaScript (for production)
- Efficient animation rendering
- Lazy loading for images

### Browser Compatibility
- Modern browsers (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- Graceful degradation for older browsers
- CSS Grid and Flexbox fallbacks

## 🔧 Development

### File Structure
```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
├── profile-image.jpg   # Profile picture
├── project-images/     # Project screenshots
└── favicon.ico         # Website favicon
```

### Local Development
1. Use a local server for development
2. Enable browser developer tools
3. Test responsive design with device emulation
4. Validate HTML and CSS

### Production Deployment
1. Optimize images (compress, WebP format)
2. Minify CSS and JavaScript files
3. Enable GZIP compression
4. Set up proper caching headers
5. Test across different browsers and devices

## 🎯 SEO Optimization

### Meta Tags
The website includes essential meta tags:
- Title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Viewport settings for mobile

### Structured Data
Add JSON-LD structured data for better search engine understanding:
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vidit Galav",
    "jobTitle": "Blockchain Developer",
    "url": "https://yourwebsite.com"
}
</script>
```

## 🚀 Deployment Options

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings (not needed for static sites)
3. Deploy automatically on push to main branch

### Vercel
1. Import your GitHub repository to Vercel
2. Configure as static site
3. Deploy with automatic updates

### Custom Domain
1. Purchase domain from domain registrar
2. Configure DNS settings
3. Update deployment platform settings
4. Enable HTTPS (automatic with most platforms)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **GSAP**: Professional animation library
- **Font Awesome**: Icon library
- **Google Fonts**: Typography
- **Unsplash**: Stock images (if used)

## 📞 Support

If you need help customizing your portfolio or have questions:
- Check the customization guide above
- Review the code comments for guidance
- Test in different browsers and devices

---

**Built with ❤️ for showcasing blockchain development expertise**

*Last updated: December 2024*


