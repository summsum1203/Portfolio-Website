/**
 * SASSY.CODE PORTFOLIO - MAIN INTERACTIVITY
 * Author: Summer Bethany Davis
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark 'Neon Noir' vs Light 'Luxe Daylight')
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const currentTheme = localStorage.getItem('sassy_theme') || 'dark';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '☀️';
    }
    localStorage.setItem('sassy_theme', theme);
  }

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      applyTheme(isLight ? 'dark' : 'light');
    });
  }

  // 1b. SASSy Brand Video Teaser Toggle
  const videoToggleBtn = document.getElementById('btn-toggle-video');
  const videoContainer = document.getElementById('brand-video-container');
  const brandVideo = document.getElementById('brand-video');

  if (videoToggleBtn && videoContainer) {
    videoToggleBtn.addEventListener('click', () => {
      const isVisible = videoContainer.style.display === 'block';
      videoContainer.style.display = isVisible ? 'none' : 'block';
      videoToggleBtn.setAttribute('aria-expanded', !isVisible);
      videoToggleBtn.innerHTML = isVisible ? '<span>▶ Watch 10s SASSy Brand Intro</span>' : '<span>✕ Hide Brand Intro</span>';
      if (!isVisible && brandVideo) {
        brandVideo.play().catch(() => {});
      } else if (brandVideo) {
        brandVideo.pause();
      }
    });
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('btn-mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isShown = navLinks.style.display === 'flex';
      navLinks.style.display = isShown ? 'none' : 'flex';
      if (!isShown) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'var(--bg-surface)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.boxShadow = '0 15px 30px rgba(0,0,0,0.5)';
        navLinks.style.borderBottom = '1px solid var(--border-subtle)';
      }
    });

    // Close menu when clicking any nav item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }

  // 3. Project Filtering System
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Case Study Deep Dive Modal Data & Controller
  const modalOverlay = document.getElementById('case-study-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body-content');

  const caseStudies = {
    'unleashing-truth': {
      title: 'Unleashing Truth — Accessible Advocacy Platform',
      tag: 'Advocacy & Community Web App',
      heroImg: 'assets/img/unleashtruth.jpg',
      overview: 'A digital home built to empower voices through empathetic storytelling, modern semantic markup, and rigorous WCAG 2.1 AA accessibility compliance.',
      challenge: 'Advocacy platforms often suffer from cluttered typography, low contrast ratios, and poor screen-reader support. The mission was to build a sanctuary on the web where every visitor, regardless of physical or cognitive ability, can read, interact, and engage effortlessly.',
      solution: 'Crafted a high-contrast design system in Figma with scalable typography and intuitive navigation. Built from scratch with semantic HTML5 landmarks, CSS custom properties, and vanilla JavaScript for dynamic components without heavy bundle bloat.',
      tech: ['Semantic HTML5', 'CSS3 / Sass', 'JavaScript ES6+', 'WCAG 2.1 AA', 'Figma Prototyping', 'Git/GitHub'],
      features: [
        '100% keyboard navigable with skip-to-content links and custom focus rings',
        'Optimized for screen readers with proper ARIA attributes and structured landmarks',
        'Performance score 98+ with ultra-fast page load times under 1.5 seconds',
        'Responsive layout scaling seamlessly from 320px mobile to ultra-wide displays'
      ],
      links: {
        demo: 'https://summsum1203.github.io/Portfolio-Website/',
        github: 'https://github.com/summsum1203/Portfolio-Website.git'
      }
    },
    'pawtique': {
      title: 'Paw’tique Boutique — Modern Pet Care & E-Commerce Concept',
      tag: 'E-Commerce & Brand Experience',
      heroImg: 'assets/img/pawtique.jpg',
      overview: 'An engaging, heartwarming digital storefront concept celebrating boutique pet lifestyle and advocacy, inspired by Summer’s beloved rescue dog, Shysti Mae.',
      challenge: 'Pet parents want an online shopping experience that feels personalized, joyful, and trustworthy rather than transactional and cold.',
      solution: 'Engineered a vibrant, accessible e-commerce layout featuring custom product discovery grids, interactive cart states, and joyful micro-interactions that celebrate pet companionship.',
      tech: ['HTML5', 'Modern CSS Grid & Flexbox', 'JavaScript ES6+', 'UI/UX Design', 'Responsive Web Design'],
      features: [
        'Custom interactive product card layouts with hover state depth',
        'Mobile-first responsive flow optimized for quick thumb navigation',
        'Integrated brand identity and playful iconography',
        'Clean, modular code structure ready for Shopify or Headless CMS integration'
      ],
      links: {
        demo: '#',
        github: 'https://github.com/summsum1203'
      }
    },
    'pomodoro': {
      title: 'SASSy Pomodoro & Focus Studio',
      tag: 'Productivity Application',
      heroImg: 'assets/img/pomodoro.png',
      overview: 'A sleek, customizable productivity web application engineered to beat procrastination with interval science, soothing audio feedback, and clean state architecture.',
      challenge: 'Most Pomodoro timers are either clunky with distracting ads or rigid with no customization for non-standard focus sessions.',
      solution: 'Developed a responsive timer with state management for custom work/break intervals, session streak tracking, visual progress rings, and a relaxing ambient aesthetic.',
      tech: ['React / JavaScript', 'TypeScript', 'CSS3 Transitions', 'Web Audio API', 'Local Storage API'],
      features: [
        'Precision interval countdown engine with pause, reset, and custom session lengths',
        'Persistent streak and session statistics saved to LocalStorage',
        'Subtle audio chimes on session completion with mute control',
        'Lightweight, zero-dependency codebase ensuring instant loading'
      ],
      links: {
        demo: '#',
        github: 'https://github.com/summsum1203'
      }
    },
    'health-hub': {
      title: 'Health Communications Hub & Visual Infographics',
      tag: 'Healthcare Clarity & Information Design',
      heroImg: 'assets/img/infographic-health.png',
      overview: 'A public healthcare communication project transforming complex medical data and public wellness guidelines into accessible, digestible infographics and web layouts.',
      challenge: 'Critical health information is often trapped in dense bureaucratic language and confusing PDF reports that alienate the general public.',
      solution: 'Designed an educational hub utilizing visual hierarchy, clear color coding, and empathetic typography to make health information actionable and crystal clear for all audiences.',
      tech: ['Information Architecture', 'Figma & Adobe Tools', 'Semantic HTML5', 'Responsive CSS', 'Accessibility Auditing'],
      features: [
        'High-legibility typography designed for readers of all ages and vision capabilities',
        'Visual data breakdowns converting complex statistics into clear charts and callouts',
        'Cross-platform layout optimized for both screen viewing and high-resolution print'
      ],
      links: {
        demo: '#',
        github: 'https://github.com/summsum1203'
      }
    },
    'component-lab': {
      title: 'SASSy UI Component Lab',
      tag: 'Design System & Component Library',
      heroImg: 'assets/img/portfolio-prev.jpg',
      overview: 'A curated collection of accessible, production-ready micro-components including dynamic changelogs, custom select menus, accessible datepickers, and testimonial flip cards.',
      challenge: 'Third-party component libraries frequently come with massive bundle weight and poor keyboard accessibility out of the box.',
      solution: 'Handcrafted reusable UI primitives adhering to strict WAI-ARIA authoring practices, silky 60fps animations, and zero heavy dependencies.',
      tech: ['HTML5 Custom Elements', 'Modern CSS/SCSS', 'JavaScript ES6+', 'ARIA Authoring Practices'],
      features: [
        'Full keyboard navigation (Arrow keys, Enter, Escape, Space)',
        'Zero dependencies—pure native browser power',
        'Themable via CSS custom properties'
      ],
      links: {
        demo: '#',
        github: 'https://github.com/summsum1203'
      }
    },
    'shysti-mae': {
      title: 'The Shysti Mae Project — Canine Advocacy & Community Storytelling',
      tag: 'Community & Pet Advocacy',
      heroImg: 'assets/img/shysti-mae.jpg',
      overview: 'An interactive digital storytelling campaign celebrating canine rescue advocacy, responsible pet care, and community connection—inspired by Summer’s beloved companion and Chief Happiness Officer, Shysti Mae.',
      challenge: 'Animal rescue initiatives often struggle to engage audiences through traditional adoption channels that rely on repetitive or emotionally overwhelming messaging.',
      solution: 'Engineered an uplifting, high-empathy visual storytelling campaign with responsive photography galleries, community outreach touchpoints, and clear calls to action for local animal shelters.',
      tech: ['Brand Storytelling', 'Visual Identity', 'Semantic HTML5', 'Responsive Media', 'WCAG 2.1 AA'],
      features: [
        'Emotionally resonant storytelling framework designed for maximum community shareability',
        'Mobile-first responsive media gallery with accessible alt-text hierarchies',
        'Built to elevate adoption visibility and pet foster awareness in regional communities',
        'Special interactive tribute to Shysti Mae, Summer’s constant coding companion'
      ],
      links: {
        demo: '#',
        github: 'https://github.com/summsum1203'
      }
    }
  };

  document.querySelectorAll('[data-open-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studyKey = btn.getAttribute('data-open-study');
      const data = caseStudies[studyKey];
      if (!data || !modalOverlay || !modalBody) return;

      modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <span class="section-tag" style="margin-bottom: 0.5rem;">${data.tag}</span>
          <h2 style="font-size: 2rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">${data.title}</h2>
          <p style="color: var(--text-muted); font-size: 1.05rem;">${data.overview}</p>
        </div>

        <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 2rem; border: 1px solid var(--border-subtle); max-height: 380px;">
          <img src="${data.heroImg}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
          <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <h4 style="color: var(--sassy-pink); margin-bottom: 0.5rem; font-size: 1.05rem;">The Challenge</h4>
            <p style="color: var(--text-muted); font-size: 0.9rem;">${data.challenge}</p>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <h4 style="color: var(--cyber-cyan); margin-bottom: 0.5rem; font-size: 1.05rem;">The SASSy Solution</h4>
            <p style="color: var(--text-muted); font-size: 0.9rem;">${data.solution}</p>
          </div>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 0.75rem;">Key Engineering Highlights</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
            ${data.features.map(f => `<li style="font-size: 0.92rem; color: var(--text-main); display: flex; gap: 0.5rem;"><span style="color: var(--cyber-cyan); font-weight: bold;">✔</span> ${f}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 0.75rem;">Tech Stack & Tools</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; flex-wrap: wrap;">
          ${data.links.demo && data.links.demo !== '#' ? `<a href="${data.links.demo}" target="_blank" rel="noopener" class="btn btn-cyan btn-card">Live Demo ↗</a>` : ''}
          <a href="${data.links.github}" target="_blank" rel="noopener" class="btn btn-primary btn-card">View Repository</a>
          <button class="btn btn-outline btn-card" onclick="document.getElementById('case-study-modal').classList.remove('open')">Close Case Study</button>
        </div>
      `;

      modalOverlay.classList.add('open');
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
      }
    });

    // Close on Escape key for full keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        modalOverlay.classList.remove('open');
      }
    });
  }

  // 5. Contact Form Simulation with Live Validation
  const contactForm = document.getElementById('portfolio-contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all fields so we can connect!');
        return;
      }

      // Generate a mailto link with pre-filled content to ensure guaranteed message delivery
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const mailtoBody = encodeURIComponent(`Hi Summer,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n-- Sent from your SASSy Portfolio`);
      
      if (formFeedback) {
        formFeedback.textContent = `Thank you, ${name}! Launching your email client to deliver your message to Summer...`;
        formFeedback.classList.add('success');
      }

      setTimeout(() => {
        window.location.href = `mailto:summerD1203@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        contactForm.reset();
      }, 900);
    });
  }

  // 6. Smooth Active Navigation Spy
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
});
