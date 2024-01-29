;(function () {
  new WOW().init()

  var tween = gsap
    .timeline()
    .from('.loading', {
      opacity: 1,
      duration: 1,
    })
    .from('.slogan-animation', {
      opacity: 0,
      duration: 0.3,
      y: 20,
    })
    .from('.subtitle-animation', {
      opacity: 0,
      duration: 0.3,
      y: 20,
    })
    .from('.girl-animation', {
      opacity: 0,
      duration: 0.3,
      y: 20,
    })
    .from('.boy-animation', {
      opacity: 0,
      duration: 0.3,
      y: 20,
    })
    // .from('.target-animation', {
    //   opacity: 0,
    //   duration: 0.3,
    //   y: 20,
    // })
    .from('.features-animation', {
      opacity: 0,
      duration: 0.3,
      y: 20,
    })

  $(window).on('scroll', function () {
    800 < $(window).scrollTop() ? $('.goTop').fadeIn(300) : $('.goTop').fadeOut(300)
  })
  $('.goTop').on('click', function () {
    $('body, html').animate(
      {
        scrollTop: 0,
      },
      400
    )
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
