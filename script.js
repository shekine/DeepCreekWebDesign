gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({
//   autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
// });

gsap.from(".square1", {duration:3, opacity: 0});
gsap.from(".square2", {duration:3, opacity: 0});
gsap.to(".logo", {
  scrollTrigger: {
    trigger: ".logo",
    start: "top 30%",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
    pin: true,
  },
  xPercent: -85,
  yPercent: -105,
  scale: 0.3,
});

gsap.to(".intro-name", {
  scrollTrigger: {
    trigger: ".intro-name",
    start: "top 105%",
    end: "top 85%",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -250,
  opacity: 1,
});

gsap.to(".intro-hook", {
  scrollTrigger: {
    trigger: ".intro-hook",
    start: "top 105%",
    end: "top 85%",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
  },
  y: -240,
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
});