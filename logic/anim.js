export const skewEnter = () => {
  gsap.from(".skew-enter", {
    opacity: 0,
    duration: 1.2,
    delay: 0.15,
    stagger: 0.15,
    skewY: 10,
    y: 120,
    ease: Power4.easeOut,
  })
}
