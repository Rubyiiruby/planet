;(function () {
  new WOW().init()

  var tween = gsap
    .timeline()
    .from('.kv-wrapper', { opacity: 0, duration: 1 })
    .from('.slogan', {
      opacity: 0,
      delay: 0.5,
      onStart: function () {
        $('.slogan').addClass('animate__bounceIn')
      },
    })
    .from('.coin', {
      opacity: 0,
      duration: 0.25,
      delay: 0.25,
      scale: 0.9,
    })
    .from('.person-1', {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      y: 50,
      ease: 'back.inOut(1.4)',
    })
    .from('.person-2', {
      opacity: 0,
      duration: 0.5,
      y: -50,
      ease: 'back.inOut(1.4)',
    })
})()
