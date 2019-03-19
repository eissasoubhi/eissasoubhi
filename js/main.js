---
  layout: null
sitemap:
exclude: 'yes'
---

  $(document).ready(function () {
    $('a.aboutme-button').click(function (e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
      currentWidth = $('.panel-cover').width()
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.content-wrapper').addClass('animated slideInRight')
        setTimeout(() => {
          $('.content-wrapper').removeClass('animated slideInRight')
        }, 1000)
      } else {
        $('.panel-cover').css('max-width', currentWidth)
        $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
      }
      addCollapsedClassToBody()
    })

    if (window.location.hash && window.location.hash == '#aboutme') {
      $('.panel-cover').addClass('panel-cover--collapsed')
      addCollapsedClassToBody()
    }

    if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
      $('.panel-cover').addClass('panel-cover--collapsed')
      addCollapsedClassToBody()
    }

    $('.btn-mobile-menu').click(function () {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })

    $('.navigation-wrapper .aboutme-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
    })
  });

function addCollapsedClassToBody() {
  $('body').addClass('cover-collapsed');
}
