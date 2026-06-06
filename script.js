/* ============================
   RAJLUX – JavaScript
   Interactions & Animations
   ============================ */

// ── DOM Ready ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // ─ 1. Preloader ─────────────────────────────────────
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.style.overflow = 'visible';
    }, 2200);
  });
  // Fallback
  setTimeout(() => preloader.classList.add('hidden'), 3500);

  // ─ 2. Particles Canvas ──────────────────────────────
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrame;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.6 + 0.1;
      this.gold = Math.random() > 0.6;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.gold ? '#c9a84c' : '#4a6080';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    animFrame = requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ─ 3. Header Scroll ─────────────────────────────────
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 80) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    if (scrollY > 400) scrollTopBtn.classList.add('visible');
    else scrollTopBtn.classList.remove('visible');

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─ 4. Hamburger Menu ─────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close on nav link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // ─ 5. Counter Animations ────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }

  // ─ 6. Intersection Observer (Scroll Reveal) ──────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger counters when hero stats visible
        if (entry.target.classList.contains('hero-stats')) {
          entry.target.querySelectorAll('.stat-number').forEach(el => animateCounter(el));
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Add reveal class to elements
  const revealTargets = [
    '.hero-stats',
    '.about-grid',
    '.service-card',
    '.feature-card',
    '.process-step',
    '.portfolio-item',
    '.testimonial-card',
    '.contact-item',
    '.contact-form',
    '.section-header',
    '.cta-content'
  ];

  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${index * 0.08}s`;
      revealObserver.observe(el);
    });
  });

  // ─ 7. Portfolio Filter ────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // // ─ 8. Testimonial Carousel ───────────────────────────
  // const track = document.getElementById('testimonial-track');
  // const dots = document.querySelectorAll('.dot');
  // let currentSlide = 0;
  // let autoSlideInterval;
  // let cardsPerView = getCardsPerView();

  // function getCardsPerView() {
  //   if (window.innerWidth <= 768) return 1;
  //   if (window.innerWidth <= 1024) return 2;
  //   return 3;
  // }

  // function getTotalSlides() {
  //   const cards = track.querySelectorAll('.testimonial-card');
  //   return Math.max(0, cards.length - cardsPerView + 1);
  // }

  // function goToSlide(index) {
  //   const cards = track.querySelectorAll('.testimonial-card');
  //   const totalSlides = getTotalSlides();
  //   currentSlide = Math.max(0, Math.min(index, totalSlides - 1));

  //   const cardWidth = cards[0] ? cards[0].offsetWidth + 32 : 0;
  //   track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

  //   dots.forEach((dot, i) => {
  //     dot.classList.toggle('active', i === currentSlide);
  //   });
  // }

  // document.getElementById('carousel-prev').addEventListener('click', () => {
  //   goToSlide(currentSlide - 1 < 0 ? getTotalSlides() - 1 : currentSlide - 1);
  //   resetAutoSlide();
  // });

  // document.getElementById('carousel-next').addEventListener('click', () => {
  //   goToSlide(currentSlide + 1 >= getTotalSlides() ? 0 : currentSlide + 1);
  //   resetAutoSlide();
  // });

  // dots.forEach((dot, index) => {
  //   dot.addEventListener('click', () => {
  //     goToSlide(index);
  //     resetAutoSlide();
  //   });
  // });

  // function startAutoSlide() {
  //   autoSlideInterval = setInterval(() => {
  //     goToSlide(currentSlide + 1 >= getTotalSlides() ? 0 : currentSlide + 1);
  //   }, 4500);
  // }

  // function resetAutoSlide() {
  //   clearInterval(autoSlideInterval);
  //   startAutoSlide();
  // }

  // startAutoSlide();

  // window.addEventListener('resize', () => {
  //   cardsPerView = getCardsPerView();
  //   goToSlide(0);
  // });

  // ─ 9. Contact Form ───────────────────────────────────
  const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('.submit-btn');

  // Get form values
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  const phone = document.getElementById('fphone').value;
  const service = document.getElementById('fservice').value;
  const message = document.getElementById('fmessage').value;

  btn.innerHTML = '<span>Sending...</span> ⏳';
  btn.style.opacity = '0.8';
  btn.disabled = true;

  setTimeout(() => {

    // WhatsApp Number (with country code, no +)
    const whatsappNumber = "918148753891";

    const whatsappMessage =
`*New Contact Form Submission*

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
🛠 Service: ${service}

📝 Message:
${message}`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Existing UI
    btn.innerHTML = '<span>Message Sent!</span> ✅';
    btn.style.opacity = '1';
    formSuccess.style.display = 'block';

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    form.reset();

    setTimeout(() => {
      btn.innerHTML = `
        <span>Send Message</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>`;
      btn.disabled = false;
      formSuccess.style.display = 'none';
    }, 4000);

  }, 1800);
});

  // ─ 10. Smooth Scroll for All Anchor Links ────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerH = header.offsetHeight;
        const targetTop = target.offsetTop - headerH;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });

  // ─ 11. Card Hover Glow Mouse Tracking ────────────────
  document.querySelectorAll('.service-card, .feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background = `radial-gradient(ellipse at ${x}% ${y}%, rgba(201,168,76,0.08) 0%, var(--navy-card) 60%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });

  // ─ 12. Gold Sparkle Cursor Trail ─────────────────────
  let sparkleTimeout;
  const sparkleColors = ['#c9a84c', '#f0d080', '#ffd700', '#8b6914'];

  document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.6) return; // throttle
    const sparkle = document.createElement('div');
    const size = Math.random() * 6 + 2;
    sparkle.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${sparkleColors[Math.floor(Math.random() * sparkleColors.length)]};
      left: ${e.clientX - size / 2}px;
      top: ${e.clientY - size / 2}px;
      opacity: 0.8;
      transition: all 0.6s ease;
      box-shadow: 0 0 ${size * 2}px rgba(201,168,76,0.5);
    `;
    document.body.appendChild(sparkle);
    requestAnimationFrame(() => {
      sparkle.style.transform = `translate(${(Math.random() - 0.5) * 30}px, ${(Math.random() - 0.5) * 30}px) scale(0)`;
      sparkle.style.opacity = '0';
    });
    setTimeout(() => sparkle.remove(), 600);
  });

  // ─ 13. Section Entrance Animations ───────────────────
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
  });

  // ─ 14. Marquee Pause on Hover ─────────────────────────
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    marqueeTrack.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeTrack.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }

  // ─ 15. Hamburger Animation ────────────────────────────
  hamburger.addEventListener('click', function() {
    const spans = this.querySelectorAll('span');
    if (this.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // ─ 16. Page Load Entrance Animation ─────────────────
  document.querySelectorAll('.hero-content > *').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 2400 + (i * 150));
  });

});
