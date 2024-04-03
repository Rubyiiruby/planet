;(function () {
  new WOW().init()

  var tween = gsap
    .timeline()
    .from('.loading', {
      opacity: 1,
      duration: 1.5,
    })
    .from('.cloud-animation', {
      opacity: 0,
      duration: 1,
      y: 20,
    })
    .from('.satr-animation', {
      opacity: 0,
      duration: 1,
      y: -20,
    })
    .from('.dragon-animation', {
      opacity: 0,
      duration: 1,
      x: 20,
    })
    .from('.slogan-animation', {
      opacity: 0,
      duration: 1,
      y: 5,
    })

  $(window).on('scroll', function () {
    700 < $(window).scrollTop() ? $('.applyOnline').fadeIn(300) : $('.applyOnline').fadeOut(300)
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
  $('.goNotice').on('click', function () {
    $('body, html').animate(
      {
        scrollTop: $('.notice').offset().top,
      },
      400
    )
  })
  $('.openRate').on('click', function (e) {
    e.stopPropagation()

    $('.notice-rate-box').css({
      display: 'block',
    })
  })
  $(document).on('click', function () {
    $('.notice-rate-box').css({
      display: 'none',
    })
  })

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset

    ;['A', 'B', 'C', 'D', 'E', 'F'].forEach((itemName) => {
      const item = document.querySelector(`.item${itemName}`)
      const speed = Number(item.dataset.speed)
      item.style.transform = `translateY(${scrollY * speed}px)`
    })
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
