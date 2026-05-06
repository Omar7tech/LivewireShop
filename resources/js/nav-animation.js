import { gsap } from 'gsap';

export function initNavAnimation() {
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');
  const mobileMenuOverlay = document.querySelector('#mobile-menu-overlay');
  const mobileMenuClose = document.querySelector('#mobile-menu-close');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  const hamburgerLines = document.querySelectorAll('.hamburger-line');

  if (!mobileMenuBtn || !mobileMenu) return;

  let isOpen = false;

  // Open menu animation
  function openMenu() {
    if (isOpen) return;
    isOpen = true;

    // Enable pointer events
    mobileMenuOverlay.style.pointerEvents = 'auto';

    // Animate overlay
    gsap.to(mobileMenuOverlay, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });

    // Slide in menu
    gsap.to(mobileMenu, {
      x: 0,
      duration: 0.5,
      ease: "power3.out"
    });

    // Stagger animate nav items
    gsap.from(mobileNavItems, {
      x: 50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08,
      delay: 0.2,
      ease: "power2.out"
    });

    // Hamburger to X animation
    gsap.to(hamburgerLines[0], {
      rotation: 45,
      y: 7,
      duration: 0.3,
      ease: "power2.inOut"
    });
    gsap.to(hamburgerLines[1], {
      opacity: 0,
      duration: 0.2,
      ease: "power2.inOut"
    });
    gsap.to(hamburgerLines[2], {
      rotation: -45,
      y: -7,
      duration: 0.3,
      ease: "power2.inOut"
    });
  }

  // Close menu animation
  function closeMenu() {
    if (!isOpen) return;
    isOpen = false;

    // Animate overlay
    gsap.to(mobileMenuOverlay, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        mobileMenuOverlay.style.pointerEvents = 'none';
      }
    });

    // Slide out menu
    gsap.to(mobileMenu, {
      x: '100%',
      duration: 0.4,
      ease: "power3.in"
    });

    // Hamburger back to lines
    gsap.to(hamburgerLines[0], {
      rotation: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.inOut"
    });
    gsap.to(hamburgerLines[1], {
      opacity: 1,
      duration: 0.2,
      ease: "power2.inOut"
    });
    gsap.to(hamburgerLines[2], {
      rotation: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.inOut"
    });
  }

  // Event listeners
  mobileMenuBtn.addEventListener('click', () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileMenuClose.addEventListener('click', closeMenu);
  mobileMenuOverlay.addEventListener('click', closeMenu);

  // Close menu when nav link is clicked
  mobileNavItems.forEach(item => {
    item.querySelector('a').addEventListener('click', closeMenu);
  });
}
