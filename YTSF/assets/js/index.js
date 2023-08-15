;(function () {
  new WOW().init()

  var tween = gsap
    .timeline()
    .from('.kv-wrapper', { opacity: 0, duration: 1 })
    .from('.kv-cont', {
      opacity: 0,
      duration: 0.25,
      delay: 0.25,
    })
    .from('.rabbit1', {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      y: 50,
      ease: 'back.inOut(1.4)',
    })
    .from('.rabbit2', {
      opacity: 0,
      duration: 0.5,
      y: 50,
      ease: 'back.inOut(1.4)',
    })
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

  const tabShow = 0
  const tabNavItems = $('.projectTab-item')
  const tabContentItems = $('.projectTab-cont')
  tabNavItems.eq(tabShow).addClass('active')
  tabContentItems.hide().eq(tabShow).fadeIn(500)

  const changeTab = function (idx) {
    tabNavItems.removeClass('active')
    tabNavItems.eq(idx).addClass('active')

    tabContentItems.eq(idx).stop(false, true).fadeIn(500).siblings().hide()
  }

  tabNavItems.each(function (idx, item) {
    $(item).on('click', function () {
      changeTab(idx)
    })
  })
})()
