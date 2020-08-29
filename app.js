const hero = document.querySelectorAll(".hero");
const slider = document.querySelectorAll(".slider");
const logo = document.querySelectorAll("#logo");
const hamburger = document.querySelectorAll(".hamburger");
const headline = document.querySelectorAll(".headline");

const tl = new TimelineMax( /* { repeat: 2, repeatDelay: 3 } */ );

tl.fromTo(hero, 1, {
    height: "0%"
  }, {
    height: "80%",
    ease: Power2.easeInOut
  })
  .fromTo(
    hero,
    1.2, {
      width: "100%"
    }, {
      width: "80%",
      ease: Power2.easeInOut
    }
  )
  .fromTo(
    slider,
    1.2, {
      x: "-100%"
    }, {
      x: "0%",
      ease: Power2.easeInOut
    },
    "-=1.2"
  )
  .fromTo(logo, 0.5, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.5")
  .fromTo(hamburger, 0.5, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.5")
  .fromTo(headline, 0.5, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.5");