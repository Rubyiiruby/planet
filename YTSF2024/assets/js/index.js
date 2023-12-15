;(function () {
  new WOW().init()

  var tween = gsap
    .timeline()
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

  window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset
    const itemA = document.querySelector('.itemA')
    const itemB = document.querySelector('.itemB')
    const itemC = document.querySelector('.itemC')
    const itemD = document.querySelector('.itemD')
    const itemE = document.querySelector('.itemE')
    const itemF = document.querySelector('.itemF')
    const itemAMoveSpeed = Number(itemA.dataset.speed)
    const itemBMoveSpeed = Number(itemB.dataset.speed)
    const itemCMoveSpeed = Number(itemC.dataset.speed)
    const itemDMoveSpeed = Number(itemD.dataset.speed)
    const itemEMoveSpeed = Number(itemE.dataset.speed)
    const itemFMoveSpeed = Number(itemF.dataset.speed)

    itemA.style.transform = `translateY(${scrollPositionY * itemAMoveSpeed}px)`
    itemB.style.transform = `translateY(${scrollPositionY * itemBMoveSpeed}px)`
    itemC.style.transform = `translateY(${scrollPositionY * itemCMoveSpeed}px)`
    itemD.style.transform = `translateY(${scrollPositionY * itemDMoveSpeed}px)`
    itemE.style.transform = `translateY(${scrollPositionY * itemEMoveSpeed}px)`
    itemF.style.transform = `translateY(${scrollPositionY * itemFMoveSpeed}px)`
  })
})()
