$(function() {

	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		$(".header-nav > ul").slideToggle(  );
		$("body").toggleClass("mobile-nav-active");
	});

	if ( $(window).width() < 767 ) { 

		$('.header-nav >ul li').each(function() {
			if ($(this).find('ul').length && $(this).find('ul').children('li').length) {
				$(this).children("a").after('<span class="opener"></span>');
			}
		});

		$('li.menu-item-has-children .opener').click(function() {
			if ($(this).parent().hasClass('opened')) {
				$(this).parent().removeClass('opened');
				$(this).siblings('ul').stop().slideUp(300);
			} else {
				$(this).parent().addClass('opened').siblings('.opened').removeClass('opened').children('ul').stop().slideUp(300);
				$(this).siblings('ul').stop().slideDown(300);
			}
			return false;
		});
	};

var screenWidthSlide = $(window).width();

  switch (true) {
      case screenWidthSlide <= 1599 && screenWidthSlide >= 768:
          margin = 30;
          break;

      case screenWidthSlide < 768:
          margin = 18;
          break;

      default:
          margin = 60;
          break;
  }


  $('.gazetky-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: margin,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: false,
        autoWidth:true,
        autoplayTimeout:2000,
        smartSpeed: 700
    });








    /*badges*/
/*    $('.isotope-items').isotope(function () {
        itemSelector: '.item'
    });



    $('.badges-menu ul li').click(function () {
        $('.badges-menu ul li').removeClass('active');
        $(this).addClass('active');


        var selector = $(this).attr('data-filter');
        $('.isotope-items').isotope({
            filter: selector
        });
        return false;
    });
*/
});