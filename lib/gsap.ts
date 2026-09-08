'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registering in a module body would run during SSR, where ScrollTrigger has no
// document to attach to. Guarding on `window` keeps the import tree safe for
// server components that only re-export client children.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
