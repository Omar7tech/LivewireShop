import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimation() {
  const container = document.querySelector('#hero-container');
  if (!container) {
    console.log('Hero container not found');
    return;
  }

  const background = container.querySelector('.hero-background');
  const furniture = container.querySelector('.hero-furniture');
  const content = container.querySelector('#content');

  if (!background || !furniture || !content) {
    console.log('Layers not found', { background, furniture, content });
    return;
  }

  console.log('Hero animation initialized');

  const heroText = content.querySelector('.hero-text');

  // Set initial state immediately to prevent flash
  gsap.set(container, {
    clipPath: "circle(1% at 50% 50%)"
  });

  // Wait for all images to load
  const images = container.querySelectorAll('img');
  const imagePromises = Array.from(images).map(img => {
    if (img.complete) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      img.onload = resolve;
      img.onerror = resolve;
    });
  });

  Promise.all(imagePromises).then(() => {
    console.log('All images loaded, starting animation');

    // Entire hero expands from perfect circle
    gsap.to(container, {
      clipPath: "circle(100% at 50% 50%)",
      duration: 1.8,
      ease: "power2.out"
    });

    // Entrance animation - text slides from completely off-screen right
    if (heroText) {
      gsap.from(heroText, {
        x: window.innerWidth,
        duration: 2,
        ease: "power3.out",
        delay: 1
      });
    }

    // Buttons slide in from right - no fade to preserve liquid effect
    const heroButtons = container.querySelector('.hero-buttons');
    if (heroButtons) {
      gsap.from(heroButtons, {
        x: 400,
        duration: 1.5,
        ease: "power3.out",
        delay: 1.5
      });
    }
  });

  // Scroll parallax - text moves DOWN behind furniture
  gsap.to(content, {
    y: 300,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  });

  // Optimized - lighter effect, no blur for better performance
  gsap.fromTo(background,
    {
      filter: "brightness(1) saturate(1)"
    },
    {
      filter: "brightness(0.4) saturate(0.3)",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    }
  );

  // Mouse parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = container.getBoundingClientRect();

    // Normalize mouse position (-0.5 to 0.5)
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    // Parallax with depth - background subtle, furniture prominent
    gsap.to(background, {
      x: x * 15,
      y: y * 15,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(furniture, {
      x: x * 35,
      y: y * 35,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to([background, furniture], {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  };

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);
}
