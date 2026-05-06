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

  // Background gradually becomes dark grayscale - sharp, dark, blurred
  gsap.fromTo(background,
    {
      filter: "grayscale(0%) brightness(1) contrast(1) blur(0px)"
    },
    {
      filter: "grayscale(100%) brightness(0.2) contrast(1.4) blur(4px)",
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
