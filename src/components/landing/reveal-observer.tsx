"use client";

import { useEffect } from "react";

/**
 * Universal scroll-reveal observer.
 *
 * Anything tagged with `.animate-amp-reveal` starts
 * in its "primed" state (opacity 0, slight downward offset) and only fades up
 * once it enters the viewport. Above-the-fold elements get the in-view class
 * within a frame of mount, so the initial hero load still feels instant.
 *
 * Reduced-motion users skip the animation entirely (CSS handles that), but we
 * still mark elements in-view so we don't risk leaving anything hidden.
 */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".animate-amp-reveal",
    );
    if (targets.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "0px 0px 35% 0px",
        threshold: 0,
      },
    );

    // Mark anything already in (or near) view immediately so HMR / late paint
    // can't leave opacity-0 elements stranded.
    const revealIfVisible = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      if (rect.top < vh * 1.35 && rect.bottom > -vh * 0.1) {
        el.classList.add("is-in-view");
        return;
      }
      observer.observe(el);
    };

    targets.forEach((el) => revealIfVisible(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
