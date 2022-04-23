const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = anime.timeline({
  duration: 1000,
  easing: "easeInOutExpo",
});

tl.add({
  targets: hero,
  height: ["0", "80%"],
})
  .add({
    delay: 300,
    duration: 1500,
    targets: hero,
    width: ["100%", "80%"],
  })
  .add({
    targets: headline,
    opacity: [0, 1],
    translateX: ["-10%", "0%"],
  })
  .add(
    {
      duration: 1500,
      targets: slider,
      translateX: ["-100%", "0%"],
    },
    "-=1500"
  )
  .add(
    {
      targets: logo,
      duration: 500,
      opacity: [0, 1],
      translateX: [30, 0],
    },
    "-=500"
  )
  .add(
    {
      targets: hamburger,
      duration: 500,
      opacity: [0, 1],
      translateX: [30, 0],
    },
    "-=500"
  );
