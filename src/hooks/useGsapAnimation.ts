"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

// Award Hover Reveal animation
export const useImageHoverReveal = () => {
  useEffect(() => {
    // Only run this effect on client side
    if (typeof window === 'undefined') return;

    const hoverItems = document.querySelectorAll<HTMLElement>(".hover-reveal-item");

    const moveImage = (e: MouseEvent, item: HTMLElement) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Using children[1] as in your original version
      const image = item.children[1] as HTMLElement;
      if (image) {
        image.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    // Properly typed event listener
    const handleMouseMove = (e: Event) => {
      moveImage(e as MouseEvent, e.currentTarget as HTMLElement);
    };

    hoverItems.forEach((item) => {
      item.addEventListener("mousemove", handleMouseMove as EventListener);
    });

    return () => {
      hoverItems.forEach((item) => {
        item.removeEventListener("mousemove", handleMouseMove as EventListener);
      });
    };
  }, []);
};

// home award animation
export const homeAwardAnimation = () => {
  const aw = gsap.matchMedia();
  aw.add("(min-width: 991px)", () => {
    const awardItems = document.querySelectorAll('.design-award-item');
    awardItems.forEach(function (div) {
      div.addEventListener('mouseenter', function () {
        gsap.to(div, {
          width: '100%',
          duration: 2,
          ease: 'expo.out'
        });
      });
      div.addEventListener('mouseleave', function () {
        gsap.to(div, {
          width: '70%',
          duration: 2,
          ease: 'expo.out'
        });
      });
    })
  });
};

// project animation
export const projectAnimation = () => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 767px)", () => {
    const panels = document.querySelectorAll<HTMLDivElement>(".des-portfolio-panel");

    panels.forEach((panel) => {
      // Initial panel state
      gsap.set(panel, {
        scale: 0.5,
        rotateZ: -20,
        transformOrigin: "center center",
        zIndex: 1,
      });

      // Animate panel
      gsap.to(panel, {
        scale: 1,
        rotateZ: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 90%",
          end: "top 0",
          scrub: 1,
          markers: false,
        },
      });

      const thumb = panel.querySelector<HTMLDivElement>(".tp-project-2-thumb");
      const img = thumb?.querySelector<HTMLImageElement>(".img");

      if (thumb && img) {
        // Initial img state
        gsap.set(img, {
          scale: 0.7,
          rotateZ: 0,
          transformOrigin: "center center",
          willChange: "transform",
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            end: "top 0",
            scrub: true,
            markers: false,
          },
        });

        // Animate thumb
        gsap.to(thumb, {
          scale: 1.8,
          rotateZ: 10,
          transformOrigin: "center center",
          willChange: "transform",
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            end: "top 0",
            scrub: true,
            markers: false,
          },
        });

        // Animate img rotation
        gsap.to(img, {
          rotateZ: -10,
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            end: "top 0",
            scrub: true,
            markers: false,
          },
        });
      }
    });
  });
};

// home three title character split animation
export const revealTextAnim = () => {
  const splitTypes = document.querySelectorAll(".reveal-text");

  splitTypes.forEach((char) => {
    const text = new SplitType(char as HTMLElement, { types: "words,chars" });

    gsap.fromTo(
      text.chars,
      { className: "char" },
      {
        className: "char revealed",
        scrollTrigger: {
         trigger: char,
					start: 'top 80%',
					end: 'top 20%',
					scrub: true,
					markers: false
        },
        stagger: 0.05,
      }
    );
  });
};