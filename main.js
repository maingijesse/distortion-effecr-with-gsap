// distortion effect

new hoverEffect({
  parent: document.querySelector(".distortion"),
  intensity: 0.2,
  image1: "./images/01.png",
  image2: "./images/02.png",
  displacementImage: "./images/diss.png",
  imagesRatio: 380 / 300,
})

// text
gsap.from(".text h1 .hidetext", {
  duration: 1.5,
  y: "100%",
  delay: 1,
  ease: Expo.easeInOut,
})

gsap.from(".text h3 .hidetext", {
  duration: 1.5,
  y: "100%",
  delay: 1.2,
  ease: Expo.easeInOut,
})

gsap.from(".text p .hidetext", {
  duration: 1.5,
  y: "100%",
  delay: 1.3,
  ease: Expo.easeInOut,
})

gsap.from(".text h2", {
  duration: 1.5,
  opacity: 0,
  x: -1000,
  ease: Expo.easeInOut,
})
gsap.from(".sponsor img", {
  duration: 1.5,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut,
})
gsap.from(".sponsor p", {
  duration: 1.5,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut,
})
gsap.from(".distortion", {
  duration: 2,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut,
  delay: 1.5,
})

// navbar

gsap.from(".navbar div", {
  duration: 1.5,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut,
  stagger: 0.8,
})

// media
gsap.from(".media ul li", {
  duration: 1.5,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
  stagger: 0.8,
  delay: 1.5,
})

// overlays
gsap.to(".first", {
  duration: 1,
  top: "-100%",
  delay: 0.5,
  ease: Expo.easeInOut,
})
gsap.to(".second", {
  duration: 1,
  top: "-100%",
  delay: 0.7,
  ease: Expo.easeInOut,
})
gsap.to(".third", {
  duration: 1,
  top: "-100%",
  delay: 0.9,
  ease: Expo.easeInOut,
})
