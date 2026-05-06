import { initHeroAnimation } from './hero-animation.js';
import { initNavAnimation } from './nav-animation.js';

document.addEventListener('livewire:navigated', () => {
  initHeroAnimation();
  initNavAnimation();
});
