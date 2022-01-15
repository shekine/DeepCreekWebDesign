gsap.registerPlugin(ScrollTrigger);

gsap.from(".square1", {duration:3, opacity: 0});
gsap.from(".square2", {duration:3, opacity: 0});
gsap.timeline()
  .to(".logo", {
    scrollTrigger: {
     trigger: ".logo",
      start: "top 29%",
      end: "top 10%",
      toggleActions: "restart pause reverse pause",
      scrub: 1,
      pin: true,
    },
    xPercent: -85,
    yPercent: -80,
    scale: 0.3,
  })
  .to(".logo", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 5%",
      toggleActions: "play pause reverse pause",
      scrub: true
    },
    opacity: 0
  });


gsap.to(".intro-name", {
  scrollTrigger: {
    trigger: ".intro-name",
    start: "top 100%",
    end: "top 70%",
    toggleActions: "restart pause reverse pause",
    scrub: 1.5,
  },
  y: -270,
  opacity: 1,
});

gsap.to(".intro-hook", {
  scrollTrigger: {
    trigger: ".intro-hook",
    start: "top 100%",
    end: "top 70%",
    toggleActions: "restart pause reverse pause",
    scrub: 1.5,
  },
  y: -260,
  opacity: 1,
});

let about = document.querySelector("section.about");
about.style.backgroundImage = `url(media/geometric.jpg)`;

gsap.to("section.about", {
  backgroundPosition: `50% ${innerHeight / 2}px`,
  ease: "none",
  scrollTrigger: {
    trigger: "section.about",
    scrub: true,
  }
});

gsap.from(".skill-item", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 100%",
    end: "bottom 100%",
    toggleActions: "play none none none",
  },
  y: 500,
  opacity: 0,
  stagger: 0.1    
});