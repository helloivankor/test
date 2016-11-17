// animation
$('.animated').appear(function() {

    var elem = $(this);
    var animation = elem.data('animation');

    if (!elem.hasClass('visible')) {
        var animationDelay = elem.data('animation-delay');
        if (animationDelay) {
            setTimeout(function() {
                elem.addClass(animation + " visible");
            }, animationDelay);
        } else {
            elem.addClass(animation + " visible");
        }
    }
});

if ($("#wobble").length > 0) {
    var four = document.getElementById('wobble');

    function wobble() {
        var dist = 60;
        var id = setInterval(function() {
            if (dist % 2 == 0) {
                var deg = 180 + dist;
            } else {
                var deg = 180 - dist;
            }

            four.style.transform = "rotate(" + deg + "deg)";

            if (dist > 15) {
                dist -= 11;
            } else {
                dist = -dist;
            }
        }, 1000);
    }

    window.addEventListener('load', function() {
        wobble()
    });
}

// animation

$(document).ready(function() {

    jQuery(document).ready(function() {
        jQuery('input.js_input-numb').live('input keyup', function(e) {
            jQuery(this).val(jQuery(this).val().replace(/[^\d]/g, ''));
        });
    });

    // diagram 

    // diagram

    //
    $(document).on('mouseenter', '.js_gen_block .js_item_gen', function() {

        $('.js_container_div').html($(this).find('.js_item_div').html());

    });


    $(".box-video").click(function() {
        $('iframe', this)[0].src += "&amp;autoplay=1";
        $(this).addClass('open');
    });

    // if($("about-box__item").length > 0) {
    $('.about-box__item').each(function() {

        $(this).appear(function() {

            var $endNum = parseInt($(this).find('.about-num').text());

            $(this).find('.about-num').countTo({

                from: 0,

                to: $endNum,

                speed: 3000,

                refreshInterval: 30,

            });

        }, {

            accX: 0,

            accY: 0

        });

    });
    // }

    // HEADER 



    // var element = $("#navigation-main");

    // var lastScrollTop = 0;

    // var header = $("#header");
    // var window_height = $(window).height();

    // var navigation_bar = $("#navigation-main");

    // var navigation_height = navigation_bar.outerHeight();

    // if (window_height <= 680) {
    //     header.css('height', 120);
    // } else {
    //     header.css('height', 200);
    // }




    // $(window)
    //     .bind('scroll', function() {
    //         var header = $("#header");
    //         var header_height = header.outerHeight();
    //         var current_scroll = $(this).scrollTop();
    //         var win_height = $(this).height();
    //         var scroll_direction;
    //         var menu_position;

    //         if ($('body').hasClass('home')) {} else {}

    //         if (current_scroll <= lastScrollTop) {
    //             menu_position = header_height;
    //             scroll_direction = "up";
    //         } else {
    //             menu_position = header_height + navigation_height;
    //             scroll_direction = "down";
    //         }

    //         if ((current_scroll < (menu_position))) {
    //             navigation_bar.css({
    //                 'top': '+' + 50 + 'px',
    //                 'position': 'absolute'
    //             });
    //         } else {
    //             navigation_bar.css({
    //                 'top': '-' + navigation_height + 'px',
    //                 'position': 'fixed'
    //             });

    //             if (current_scroll <= lastScrollTop) {
    //                 navigation_bar.css({
    //                     'top': '0'
    //                 });
    //             }
    //         }

    //         lastScrollTop = current_scroll;

    //     })
    //     .trigger('scroll');


    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 33) {
            $(".header-bottom").addClass("fix");
        } else {
            $(".header-bottom").removeClass("fix");
        }
    });
    // HEADER

    if ($('#map-contacts').length > 0) {
        initialize();
    }

    $('input[data-validate="phone"]').mask("+380 (99) 999 99 99");

    // swiper

    //initialize swiper when document ready  
    var mySwiper = new Swiper('.banner-main', {
        loop: true,
        autoplay: 6000,
        speed: 800,
    })
    var mySwiper = new Swiper('.company-slider', {
        // Optional parameters
        loop: true,
        spaceBetween: 0,
        slidesPerView: 6,
        nextButton: '.company-next',
        prevButton: '.company-prev',
        speed: 1200,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 320px

            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetweenSlides: 20
            },
            // when window width is <= 640px
            800: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            }
        }
    })
    var mySwiper = new Swiper('.proj-slider', {
        // Optional parameters
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        nextButton: '.proj-next',
        prevButton: '.proj-prev',
        speed: 1200,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 320px

            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetweenSlides: 20
            },
            // when window width is <= 640px
            800: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            }
        }
    })
    var mySwiper = new Swiper('.serv-slider', {
        // Optional parameters
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        nextButton: '.serv-next',
        prevButton: '.serv-prev',
        speed: 1200,
    })


    /*fancybox*/
    $('.fancybox').fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    // swiper

    // upload resume
    $('input[type="file"]').on('change', function() {
        var filename = $('.upload').val().split('\\').pop();
        $(this).parent().find('mark').text(filename);
    });
    // upload resume
    // head menu
    $(document).on('mouseover', '.head-menu__item', function() {
        $('.head-menu__item').find('.drop').removeClass('active');
        $(this).find('.drop').addClass('active');
    })
    $(document).on('mouseout', '.head-menu__item', function() {
            $(this).find('.drop').removeClass('active');
        })
        // head menu

    $(document).on('mouseover', '.project-head__item ', function() {
        $(this).addClass('act');
        $('.project-head__item ').find('.proj-dropdown').removeClass('active');
        $(this).find('.proj-dropdown').addClass('active');
    })
    $(document).on('mouseout', '.project-head__item ', function() {
        $(this).find('.proj-dropdown').removeClass('active');
        $(this).removeClass('act');
    })
    $(document).on('touchstart', '.project-head__item ', function() {
        if ($('.project-head__item ').hasClass('act')) {
            $('.project-head__item ').removeClass('act');
            $('.proj-dropdown').removeClass('active');
        } else {
            $('.project-head__item').not(this).removeClass('act');
            $(this).toggleClass('act');
            $('.proj-dropdown').not(this).removeClass('active');

            $(this).find('.proj-dropdown').toggleClass('active');
        }
        return false
    });



    $(document).on('click, touchstart', '.js_infographic-item', function() {
        $(this).find('.infograph-list').slideToggle();
    })

    // mobile menu 

    $("#menu").mmenu({
        "offCanvas": {
            "position": "right"
        },
        "iconPanels": true,
        "extensions": [
            "pagedim-black"
        ],
        "navbar": {
            title: "Меню"
        },
        "navbars": [{
            "position": "bottom",
            "content": [
                "<a class='fa fa-facebook' href='#/'></a>",
                "<a class='fa fa-vk' href='#/'></a>",
                "<a class='fa fa-instagram' href='#/'></a>",
                "<a class='fa fa-google-plus' href='#/'></a>",
                "<a class='fa fa-youtube' href='#/'></a>",
                "<a class='fa fa-linkedin' href='#/'></a>"
            ]
        }]
    });
    // var api = $(".nav-top").data( "mmenu");
    //  api.bind('opening', function () {
    //      var bodyTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop + '70' + 'px');;
    //      $('.header-bottom').css('top',bodyTop);
    //  });
    //  api.bind('opened', function () {
    //      $('#mm-blocker').addClass('visible');
    //  });
    //  api.bind('closing', function () {
    //      $('#mm-blocker').removeClass('visible');
    //  });
    //  api.bind('closed', function () {
    //      $('.header-bottom').css('top',"0");
    //  });


    // mobile menu



    $('.js_sidebar').on('click', function() {
        $('.sidebar-box').slideToggle();
    });


    // search start 
    $('.js_search').on('click', function() {
        $(this).addClass('act-s');
        $('.search-box').fadeIn(0).addClass('active');
        $('.search-box').find('input').trigger("focus");
        $('.search-box').find('input:focus');
        setTimeout(function() {
            $('.search-box').find('form').addClass('act-s');
        }, 700);
        setTimeout(function() {
            $('.search-box').find('input').trigger("focus");
            $('.search-box').find('input:focus');
        }, 1500);
        $('body').addClass('noscroll');
    });
    $('.js_close').on('click', function() {
        $('.search-box').find('form').removeClass('act-s');
        setTimeout(function() {
            $('.search-box').removeClass('active').delay(800).fadeOut(0);
            $('body').removeClass('noscroll');
            $('.js_search').removeClass('act-s');
        }, 700);
    });
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            $('.js_close').click();
            return false;
        }
    });


    // seacrh end 



    // go to top
    $(function() {
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 100) {
                $(".go-to-top").fadeOut(400);
            } else {
                $(".go-to-top").show(400);
            }
        });
        $('.go-to-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
    // go to top   
    // google map 
    function initialize() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 14,
            scrollwheel: false,
            draggable: true,
            disableDefaultUI: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(50.418949, 30.478302),

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "stylers": [

                    {
                        "hue": "#dce4e9"
                    }
                ]
            }]
        };

        function closeInfoWindows() {
            for (var i = 0; i < infowindow.length; i++) {
                infowindow[i].close();
            }
        }
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map-contacts');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        var markers = [{
                latLng: [50.418949, 30.478302],
                icon: 'images/marker-click.png',
            },

        ];


        // Let's also add a marker while we're at it

        var infowindow = [];
        var contentmap = '<div class="objectmap__head">г. Киев, ул. Пироговского, 19/4</div>'
        for (var i in markers) {
            console.log(markers[i])
            infowindow[i] = new google.maps.InfoWindow({
                content: contentmap
            });
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(markers[i].latLng[0], markers[i].latLng[1]),
                map: map,
                icon: markers[i].icon,
                preserveViewport: false
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    // closeInfoWindows();
                    infowindow[i].open(map, marker);
                    map.setCenter(marker.getPosition());
                    map.setZoom(15);
                };
            })(marker, i));
        }
    }
    // google map




});



/* --------------- start validation --------------*/

function validate(form) {
    var error_class = "error";
    var norma_class = "pass";
    var item = form.find("[required]");
    var e = 0;
    var reg = undefined;

    function mark(object, expression) {

        if (expression) {

            object.parents('.form-col').addClass(error_class).removeClass(norma_class).find('.error').show();

            e++;

        } else

            object.parents('.form-col').addClass(norma_class).removeClass(error_class).find('.error').hide();
    }


    form.find("[required]").each(function() {
        switch ($(this).attr("data-validate")) {
            case undefined:
                mark($(this), $.trim($(this).val()).length == 0);
                break;
            case "email":
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark($(this), !reg.test($.trim($(this).val())));
                break;
            case "phone":
                reg = /[0-9 -()+]{10}$/;
                mark($(this), !reg.test($.trim($(this).val())));
                break;
            case "pass":
                password = true;
                reg = /^[a-zA-Z0-9_-]{6,}$/;
                mark($(this), !reg.test($.trim($(this).val())));
                password = false;
                break;
            case "pass1":
                mark($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
                break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark($(this), !reg.test($.trim($(this).val())));
                break
        }
    })
    e += form.find("." + error_class).size();
    if (e == 0)
        return true;
    else {
        $('.js_alert_error').show();
        setTimeout(function() {
            $('.js_alert_error').hide();
        }, 4000);
        form.find('.error input:first').focus();
        return false;
    }
}
$(".js_validate button, .js_validate input[type=submit]").on("click", function() {
    if (!validate($(this).parents(".js_validate")))
        return false;

    else {
        $('.modal').modal('hide')
        $('#ref-success').modal('show')
        return false;
    }
});
$('#ref-success, #forgot').on('shown.bs.modal', function(event) {
    $('body').addClass('modal-open');
});


/* --------------- end validation --------------*/


/*! http://mths.be/placeholder v2.0.7 by @mathias */


$(function(window, document, $) {

    // Opera Mini v7 doesn t support placeholder although its DOM seems to indicate so
    var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function() {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this
                .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.placeholder')
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function(element) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }

                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function(element, value) {
                var $element = $(element);

                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }

                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != safeActiveElement()) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function() {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function() {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({
                            'type': 'text'
                        });
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {
                            'type': 'text'
                        }));
                    }
                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-password': $input,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

    function safeActiveElement() {
        // Avoid IE9 `document.activeElement` of death
        // https://github.com/mathiasbynens/jquery-placeholder/pull/99
        try {
            return document.activeElement;
        } catch (err) {}
    }


}(this, document, jQuery));


if ($.browser.mozilla) {

    if ($.browser.version < '35') {

        alert('Ваш браузер устарел, пожалуйста обновите его').modal('show');

    }

}

if ($.browser.opera) {

    if ($.browser.version < '7') {

        alert('Ваш браузер устарел, пожалуйста обновите его').modal('show');

    }

}

if ($.browser.safari) {

    if ($.browser.version == '5.0') {

        alert('Ваш браузер устарел, пожалуйста обновите его').modal('show');

    }

}

$('input, textarea').placeholder();