if(/Android/.test(navigator.appVersion)) {
	window.addEventListener("resize", function() {
		if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
			document.activeElement.scrollIntoView();
		}
	});
}


var block = $('<div>').css({'height':'50px','width':'50px'}),
    indicator = $('<div>').css({'height':'200px'}),
    scrollbarWidth = 0;

$('body').append(block.append(indicator));
var w1 = $('div', block).innerWidth();    
block.css('overflow-y', 'scroll');
var w2 = $('div', block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);


var bodyScrollOptions = {
    reserveScrollBarGap: true
};

function openModal(hrefModal) {
    
    if ($(hrefModal).length > 0){
        $(hrefModal).fadeIn(300);
    
        bodyScrollLock.clearAllBodyScrollLocks();
        bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
		
		setTimeout(function() {
			$(hrefModal).find('.slick-slider').slick('setPosition');
		}, 0);
    }
}

function closeModals() {
	if (scrollbarWidth > 0) {
		$('.popup-block:not(:hidden)').fadeOut(200, function() {
            bodyScrollLock.clearAllBodyScrollLocks();
        });
	} else {
		$('.popup-block:not(:hidden)').fadeOut(200);
		
		bodyScrollLock.clearAllBodyScrollLocks();
	}
}


$(document.body).on('click','[data-toggle="modal"]',function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	openModal(hrefModal);
});

$(document.body).on('click','.popup-block__overlay',function(e) {
	var closeButton = $(this).children('[data-toggle="dismiss"]');
	
	if (e.target != this) {
//		return false;
	} else {
		closeModals();
	}
});


$(document.body).on('click','[data-toggle="dismiss"]',function(e) {
	e.preventDefault();
	
	closeModals();
});

$('.main-image-slider').slick({
	arrows: true,
	asNavFor: '.main-text-slider',
	prevArrow: '<div class="main-slider__arrow prev"><i class="ic-short-arr-left"></i></div>',
    nextArrow: '<div class="main-slider__arrow next"><i class="ic-middle-arr-right"></i></div>'
});

$(".main-text-slider").slick({
	arrows: false,
	dots: true,
	fade: true,
	asNavFor: '.main-image-slider',
	autoplay: true,
    autoplaySpeed: 4000,
	customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<span class="slick-dot"></span>';
	}
});

$(".project__slider").slick({
	arrows: true,
	dots: true,
	fade: true,
	prevArrow: '<div class="article-slider__arrow prev"><i class="ic-short-arr-left"></i></div>',
    nextArrow: '<div class="article-slider__arrow next"><i class="ic-middle-arr-right"></i></div>',
	customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<span class="slick-dot"></span>';
	},
    responsive: [
        {
            breakpoint: 768,
            settings: {
                fade: false
            }
        }
    ]
});

$(".solutions-slider.tab1").slick({
	slidesToShow: 3,
  	slidesToScroll: 3,
	dots: true,
	arrows: false,
	customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<span class="slick-dot"></span>';
	},
	responsive: [
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '120px',
			dots: false,
			arrows: true,
			nextArrow: '.navigate--right.for1',
			prevArrow: '.navigate--left.for1',
		  }
		},
		{
			breakpoint: 567,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '50px',
				dots: false
			}
		  },
	  ]
});

$(".solutions-slider.tab2").slick({
	slidesToShow: 3,
  	slidesToScroll: 3,
	arrows: false,
	dots: true,
	customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<span class="slick-dot"></span>';
	},
	responsive: [
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '120px',
			dots: false,
			arrows: true,
			nextArrow: '.navigate--right.for2',
			prevArrow: '.navigate--left.for2',
		  }
		},
		{
			breakpoint: 567,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '50px',
				dots: false
			}
		  },
	  ]
});

$('#menu_btn').on('click', function(){
		
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('#mobile_menu').removeClass('active');
		$('.mobile--fix').removeClass('mobile--fix--active');
        
		bodyScrollLock.clearAllBodyScrollLocks();
	} else {
		$(this).addClass('active');
		$('#mobile_menu').addClass('active');
		$('.mobile--fix').addClass('mobile--fix--active');
        
        bodyScrollLock.clearAllBodyScrollLocks();
		bodyScrollLock.disableBodyScroll('#mobile_menu', bodyScrollOptions);
	}


});

$(document).ready(function(){

	$(".solution-tabs li").click(function(){

		var dataTab = $(this).attr('data-tab');
		
		$('.tab-content').hide();
		$('#tab-content-'+dataTab).fadeIn();
	
		$('.solution-tabs li').removeClass("active");
		$(this).addClass('active');

		$('.solutions-slider').slick('resize');
		$('.solutions-slider').slick('setPosition');

	});

	$(".product-desc-tabs li").click(function(){

		var dataTab = $(this).attr('data-product-tab');
		
		$('.product-desc-content').hide();
		$('#product-desc-content-'+dataTab).fadeIn();
	
		$('.product-desc-tabs li').removeClass("active");
		$(this).addClass('active');

	});

	$(".service-tabs li").click(function(){

		var dataTab = $(this).attr('data-tab');
		
		$('.service-tab-content').hide();
		$('#service-tab-content-'+dataTab).fadeIn();
	
		$('.service-tabs li').removeClass("active");
		$(this).addClass('active');

	});
    
    $('#service-tabs-select').on('change', function() {
        var dataTab = $(this).val();
		
		$('.service-tab-content').hide();
		$('#service-tab-content-'+dataTab).fadeIn();
	
		$('.service-tabs li').removeClass("active");
		$('.service-tabs li[data-tab="' + dataTab + '"]').addClass('active');
    });

});

// open search form start
$('.search-btn').click(function(e){

	e.preventDefault();
	$('.search-form').addClass('open');
	$('.search-form__input').focus();
	$(this).addClass('hide');

});

$('.search-form__close').click(function(){

	$('.search-form').removeClass('open');
	$('.search-btn').removeClass('hide');
	$('.search-form__result').hide();

});

$('.search-form__input').focus(function(){
	$('.search-form__result').show();
});

$(document).on('click', function(e){
	
	if (!($(e.target).hasClass('search-form') || $(e.target).parents().hasClass('search-form'))) {
		$('.search-form__result').hide();
	}
});

// open search form end
$('.item-slider').slick({
	arrows: false,
	asNavFor: '.item-slider-preview',
	slidesToShow: 1,
	fade: true,
	infinite:false,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			dots: true,
              fade: false,
              infinite:false,
			customPaging: function(slider, i) {
				// this example would render "tabs" with titles
				return '<span class="slick-dot"></span>';
			}
		  }
		}
	  ]
});
var inf = $('.item-slider-preview__slide').length > 5;
$('.item-slider-preview').slick({
	vertical: true,
	slidesToShow: 5,
	arrows: true,
	slidesToScroll: 1,
	focusOnSelect: true,
	verticalSwiping: true,
	asNavFor: '.item-slider',
	infinite: inf
	
});

$('select').niceSelect();
$('.catalog-grid-item .product-card .product-card__desc').show();
$('.grid-btn-1').click(function(){

	$('.grid-btn').removeClass('active');
	$(this).addClass('active');
	$('.catalog-grid-item').removeClass().addClass('col-lg-6 col-xl-4 col-md-4 col-6 catalog-grid-item');
	$('.catalog-grid-item .product-card').removeClass('product-card--50-50 product-card--horizontal');
    $('.catalog-grid-item .product-card .product-card__desc').show();
	$('.banner').removeClass('banner--horizonal');
    $('.product-card__title.h4').addClass('product-card__title_new_plitka');
    $('.product-card__title.h4').removeClass('product-card__title_new_plitka_big');
});

$('.grid-btn-2').click(function(){

	$('.grid-btn').removeClass('active');
	$(this).addClass('active');
	// debugger;
    $('.product-card__title.h4').addClass('product-card__title_new_plitka_big');
    $('.product-card__title.h4').removeClass('product-card__title_new_plitka');
	$('.catalog-grid-item').removeClass().addClass('col-lg-6 col-6 catalog-grid-item');
	$('.catalog-grid-item .product-card').removeClass('product-card--horizontal');
    $('.catalog-grid-item .product-card .product-card__desc').hide();
	// $('.catalog-grid-item:first-child').removeClass().addClass('col-12 catalog-grid-item');
	// $('.catalog-grid-item:first-child .product-card').removeClass('product-card--horizontal').addClass('product-card product-card--50-50');
	$('.banner').removeClass('banner--horizonal');
});

$('.grid-btn-3').click(function(){

	$('.grid-btn').removeClass('active');
	$(this).addClass('active');
    $('.product-card__title.h4').removeClass('product-card__title_new_plitka_big');
    $('.product-card__title.h4').removeClass('product-card__title_new_plitka');
	$('.catalog-grid-item').removeClass().addClass('col-12 catalog-grid-item');
	$('.catalog-grid-item .product-card').removeClass('product-card--50-50').addClass('product-card product-card--horizontal');
    $('.catalog-grid-item .product-card .product-card__desc').show();
	$('.banner').addClass('banner--horizonal');

});


$('.filter__block').each(function(){

	var parent = $(this);
	var title = $(this).find('.filter__block-title');
	var body = $(this).find('.filter__block-body');

	title.click(function(){

		if(parent.hasClass('open')){
			parent.removeClass('open');
			body.hide();
		} else {
			parent.addClass('open');
			body.show();
		}

	});

});

$('.filter-mobile-btn').click(function(){
	$('#filter').show();
    $('.filter__mobile-button').addClass('active');
    bodyScrollLock.clearAllBodyScrollLocks();
	bodyScrollLock.disableBodyScroll('#filter', bodyScrollOptions);
	
});

$('.filter__close-btn').click(function(){
	$('#filter').hide();
    $('.filter__mobile-button').removeClass('active');
	bodyScrollLock.clearAllBodyScrollLocks();
});

$(".article-slider").slick({
	arrows: true,
	dots: true,
	fade: true,
    adaptiveHeight: true,
    prevArrow: '<div class="article-slider__arrow prev"><i class="ic-short-arr-left"></i></div>',
    nextArrow: '<div class="article-slider__arrow next"><i class="ic-middle-arr-right"></i></div>',
	customPaging: function(slider, i) {
        // this example would render "tabs" with titles
        return '<span class="slick-dot"></span>';
	},
    responsive: [
        {
            breakpoint: 768,
            settings: {
                fade: false
            }
        }
    ]
});

$(".recommended-section__slider").slick({
	arrows: true,
	dots: false,
    slidesToShow: 3,
	fade: false,
    prevArrow: '<div class="recommended-section__arrow prev"><i class="ic-short-arr-left"></i></div>',
    nextArrow: '<div class="recommended-section__arrow next"><i class="ic-middle-arr-right"></i></div>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: 'unslick'
        }
    ]
});

window.numberPretty = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

$(document).off('keypress keyup blur', '.only-digits').on('keypress keyup blur', '.only-digits', function(event) {
	$(this).val(numberPretty($(this).val().replace(/[^0-9]/g, '')));
	
	if ((event.which < 48 || event.which > 57) && event.which != 32) {
		event.preventDefault();
	}
    
});

$('.focus-delete').each(function() {
    
    $(this).on('focusin', function() {
        var thisVal = $(this).val();
        
        $(this).val('');
        
        $(this).attr('data-old-value', thisVal);
    });
    
    $(this).on('focusout', function() {
        var thisVal = $(this).val();
        var thisOldVal = $(this).attr('data-old-value');
        
        if (thisVal == '') {
            $(this).val(thisOldVal);
        }
    });
});

$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
        
        if (count <= 1) {
            count = 1;
            $(this).addClass('disabled');
        } else {
            $(this).removeClass('disabled');
        }
        
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
        
        $(this).parent().find('.minus').removeClass('disabled');
        
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
    
    $('.minus').each(function() {
        var thisInput = $(this).parent().find('input');
        
        if ($(thisInput).val() == '1') {
            $(this).addClass('disabled');
        }
    });
});


$(".client-select").on('change', 'select', function() {
	var value = $(this).val();
	var item = $('.client-item');

	if(value == 1) {
		item.parent().show();
		$(".clients-section__group--gos").show();
	} else if (value == 2) {
		item.parent().hide();
		$('.group-2').parent().show();
		$(".clients-section__group--gos").show();
		$(".clients-section__group--com").show();
	} else if (value == 3) {
		$(".clients-section__group--gos").hide();
		$(".clients-section__group--com").show();
		item.parent().hide();
		$('.group-3').parent().show();
	} else if (value == 4) {
		$(".clients-section__group--gos").hide();
		$(".clients-section__group--com").show();
		item.parent().hide();
		$('.group-4').parent().show();
	} else if (value == 5) {
		$(".clients-section__group--gos").show();
		$(".clients-section__group--com").hide();
		item.parent().hide();
		$('.group-5').parent().show();
	} else if (value == 6) {
		$(".clients-section__group--gos").show();
		$(".clients-section__group--com").show();
		item.parent().hide();
		$('.group-6').parent().show();
	} else if (value == 7) {
		$(".clients-section__group--gos").show();
		$(".clients-section__group--com").hide();
		item.parent().hide();
		$('.group-7').parent().show();
	} else if (value == 8) {
		$(".clients-section__group--gos").hide();
		$(".clients-section__group--com").show();
		item.parent().hide();
		$('.group-8').parent().show();
	} else if (value == 9) {
		$(".clients-section__group--gos").show();
		$(".clients-section__group--com").hide();
		item.parent().hide();
		$('.group-9').parent().show();
	} else if (value == 10) {
		$(".clients-section__group--gos").show();
		$(".clients-section__group--com").show();
		item.parent().hide();
		$('.group-10').parent().show();
	} else if (value == 11) {
		$(".clients-section__group--gos").hide();
		$(".clients-section__group--com").show();
		item.parent().hide();
		$('.group-11').parent().show();
	} else if (value == 12) {
		$(".clients-section__group--gos").show();
		$(".clients-section__group--com").show();
		item.parent().hide();
		$('.group-12').parent().show();
	} else if (value == 13) {
		$(".clients-section__group--gos").hide();
		$(".clients-section__group--com").show();
		item.parent().hide();
		$('.group-13').parent().show();
	}
	// do whatever with the value
});


/*$(document).ready(function(){

	$('.item-grid-list').masonry({
		// options
		itemSelector: '.item-grid',

	  });

});*/

$('.tel-mask').inputmask({
	mask: "+7 (999) 999 99 99",
	keepStatic: true,
	clearIncomplete: true,
	autoUnmask: false,
    removeMaskOnSubmit: false,
    showMaskOnHover: false
});

$.extend($.validator.messages, {
    required: "Необходимо принять согласие на обработку персональных данных",
    email: "Указан неправильный E-mail адрес",
    number: "Введите правильное число",
    digits: "Сюда можно ввоить только цифры"
});

$.validator.methods.email = function(value, element) {
	return this.optional( element ) || /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test( value );
};

$.validator.methods.number = function (value, element) {
	return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:[\s\.,]\d{3})+)(?:[\.,]\d+)?$/.test(value);
};


$(document).ready(function() {
	
    $(".form-validate").each(function() {
        $(this).validate({
			validateDelegate: function() {},
            onsubmit: true,
			errorElement: "div",
			errorPlacement: function (error, element) {
				error.addClass('error-message');

				var elementType = element.prop('type');
				
				switch(elementType) {
					case 'select-one':
						error.appendTo(element.parent());
						break;
						
					case 'checkbox':
						error.insertAfter(element.parent("label"));
						break;
						
					case 'radio':
						error.insertAfter(element.parent("label"));
						break;
						
					case 'file':
						error.appendTo(element.parent().parent());
						break;
						
					default:
						error.insertAfter(element);
						break;
					
				}

			},
			highlight: function (element, errorClass, validClass ) {
				$(element).addClass("has-error").parent().addClass("has-error");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass("has-error").parent().removeClass("has-error");
			}
		});
		
		setTimeout(function() {
		   $(this).find('.num-input').each(function() {
				$(this).rules('add', {
					required: true,
					number: true
				});
			});
			
			$(this).find('[type="email"]').each(function() {
				$(this).rules('add', {
					required: true,
					email: true
				});
			});
		}, 0);
	});
	
    $(".form-validate").submit(function (e) {
        // e.preventDefault();
        //
        // return false;
    });
});

// $('#title-search-input').on('click', function() {
//     	setTimeout(()=>{
//     		$('#mobile_menu').scrollTop(0);
//     	}, 300)
// 	})

$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroller').fadeIn();
        } else {
            $('.scroller').fadeOut();
        }
    });
    $('.scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$(document).on('submit', '.search-form', function (e) {
	var textField = $(this).find('input[type=text]');
	if (textField.val().length === 0) {
		e.preventDefault();
		e.stopPropagation();
		textField.focus();
	}
});

$(function() {
    // вызываем форму
    $(document).on("click", ".call_get_price_form", function(e) {
    	e.preventDefault();// отменяем переход по ссылке

    	var this_ = $(this);
    	if(this_.hasClass("disabled"))
    		return false;
        
        this_.addClass("disabled");

        $.ajax({
            url: "/include/popups/get_price_popup.php",
            type: "POST",
            data: {},
            success: function(data) {
            	$("body").append(data);
            	$("#get_price-popup").fadeIn();
        	this_.removeClass("disabled");
            }
        });
    });

    // а это для закрытия формы
    $(document).on("click", ".close_form", function(e) {
        e.preventDefault();
        $("#get_price-popup").hide().remove();
    });
});

function toggleHeader(){
	var scroll_status = $(document).scrollTop();
	    if(scroll_status > 31)
	        $(".header__main").addClass("header_fixed");
	    else
	        $(".header__main").removeClass("header_fixed");
	}
	
	$(document).scroll(function(){
	    toggleHeader();
	});

$( document ).ready(function() {
   $('.call_get_price_form').click(function(){
	   
	  var name_product =   $(this).parents('.product-card').find('.product-card__title a').text();
	  var articul =   '';
		
		if(name_product == ''){
		name_product = 	$('h1').text();
		 var articul =   $('.item__article label').text();
		}
	   
	   setTimeout(function(){
		$('#articul').val(articul);
	   $('#name_product').val(name_product);
}, 2000);
	  
   });
});


$( document ).ready(function() {
  
$('.projects_slider_oncategory .project-item-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


var block_anchor = $('.filter__block-body.filter__block-body--pad-top').text();

if(block_anchor.trim().length == 0){
	$('.filter__block-body.filter__block-body--pad-top').hide();
}
});

$( document ).ready(function() {
	var pointer = 10;
    if ($('.article-card').length <= 10) {
        $('#load-more-news').hide();
    }
    $('.article-card').each(function(index) {
        $(this).attr('art-index', index + 1);
        if (index >= 10) {
            $(this).hide();
        }
    });
    $('#load-more-news').click(function() {
        if (pointer + 10 > $('.article-card').length) {
            pointer = $('.article-card').length;
            $('#load-more-news').hide();
        } else {
            pointer += 10;
        }
        for (var i = 0; i < $('.article-card').length; i++) {
            if (i > pointer - 10 && i <= pointer) {
               $("[art-index='" + i + "']").show();
            } 
        }
    });

	var swiper = new Swiper('.project-item-list-wrap.swiper', {
		slidesPerView: 3,
		spaceBetween: 15,
		 breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        },
	});
	$(document).on('click', '.seo--front-more', function () {
		var t = $(this);

		$('.seo--front-hidden').removeClass('seo--front-hidden');
		t.addClass('seo--front-hidden')
	})
});


function scrollToTop(elTop) {
	window.scrollTo({
	  elTop,
	  behavior: "smooth",
	});
  }
  function offset(el) {
	var rect = el.getBoundingClientRect(),
	  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {
	  top: rect.top + scrollTop,
	  left: rect.left + scrollLeft,
	};
  }
  document.querySelectorAll(".toform__btn--js").forEach((link) => {
	link.addEventListener("click", function (e) {
	  e.preventDefault();
	  let top = +offset(document.querySelector('#main-form')).top - 200;
	  window.scrollTo({
		top,
		behavior: "smooth",
	  });
	});
  });
