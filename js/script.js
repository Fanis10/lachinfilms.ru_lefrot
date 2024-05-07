// $('[data-fancybox]').fancybox({
//     backFocus: false,
// });

Fancybox.bind("[data-fancybox]", {
    backFocus: false,
});

$(document).ready(function () {
    $('.story__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 736,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    });
});

var velocity = 0.1;

function update() {
    var pos = $(window).scrollTop();
    $('.story__item').each(function () {
        var $element = $(this);
        let elementPosition = this.getBoundingClientRect();
        if (document.documentElement.clientWidth > 768) {
            let height = this.offsetTop + 1500;
            $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
        } else {
            let height = this.offsetTop + 600;
            $(this).css('backgroundPosition', '0% ' + Math.round((height - pos) * velocity) + 'px');
        }


    });
};

$(window).bind('scroll', update);


document.getElementById('bottom-video-1').addEventListener('ended', myHandler, false);

function myHandler(e) {
    document.getElementById('bottom-video-2').play()
}


var lastScrollTop = 0;

let videoWrap = document.querySelector('.dance__video-wrap');
let firstVideo = document.querySelector('#bottom-video-1');

let imageWrap = document.querySelectorAll('.story__main-img');

$(document).scroll(function () {
    if ($(this).scrollTop() > 10) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $("header").addClass("absolute");
            $("header").removeClass("sticky");
            if (document.documentElement.clientWidth > 768) {
                $(".open-nav").removeClass("hidden");
                $(".header-nav").addClass("close");
                $(".wrap-nav").removeClass("open");
            }
        } else {
            //вверх
            $("header").addClass("sticky");
            $("header").removeClass("absolute");
            if (document.documentElement.clientWidth > 768) {
                $(".open-nav").removeClass("hidden");
                $(".header-nav").addClass("close");
                $(".wrap-nav").removeClass("open");
            }
        }
        lastScrollTop = st;
    } else {
        $("header").removeClass("sticky");
        $("header").removeClass("absolute");
        if (document.documentElement.clientWidth > 768) {
            $(".open-nav").addClass("hidden");
            $(".header-nav").removeClass("close");
            $(".wrap-nav").addClass("open");
        }
    }


    let videoPosition = videoWrap.getBoundingClientRect();
    if(document.documentElement.clientHeight  - videoPosition.top >= 0) {
        firstVideo.play();
    }


    for (let i = 0; i < imageWrap.length; i++) {
        let imagePosition = imageWrap[i].getBoundingClientRect();
        let offset;

        if (document.documentElement.clientWidth > 768) {
            offset = 100;
        } else {
            offset = 0;
        }

        if(document.documentElement.clientHeight  - imagePosition.top - offset >= 0) {
            imageWrap[i].classList.add('story__main-img--animation')
        }
    }





});


$(document).ready(function () {
    $(".scrolltothetop").click(function () {
        return $("body,html").animate({scrollTop: 0}, 1200), !1;
    })
});

$(".video-background").on("click", ".link-sound", function (e) {
    e.preventDefault();
    var o = $(this),
        t = $("#video");
    o.toggleClass("on"),
        o.hasClass("on") ? t.prop("muted", !1) : t.prop("muted", !0);
});
$(".dance__wrap-1").on("click", ".link-sound", function (e) {
    e.preventDefault();
    var o = $(this),
        t = $("#bottom-video-1");
    o.toggleClass("on"),
        o.hasClass("on") ? t.prop("muted", !1) : t.prop("muted", !0);
});
$(".dance__wrap-2").on("click", ".link-sound", function (e) {
    e.preventDefault();
    var o = $(this),
        t = $("#bottom-video-2");
    o.toggleClass("on"),
        o.hasClass("on") ? t.prop("muted", !1) : t.prop("muted", !0);
});
$(".open-nav").click(function () {
    $(".wrap-nav").addClass("open");
    $(".header-nav").removeClass("close");
    if (document.documentElement.clientWidth > 768) {
        $(".open-nav").addClass('hidden');
    }
});
$(".close-nav").click(function () {
    $(".wrap-nav").removeClass("open");
});
