$(function () {
    // 背景音乐播放和关闭
    $('.header .aki-music').click(function () {
        $(this).toggleClass('active')
        if ($(this).hasClass("active")) {
            $('#body-bgm')[0].play();
        } else {
            $('#body-bgm')[0].pause();
        }
        let that = $(this);
        let xunhuan = setInterval(function () {
            if ($('#body-bgm')[0].paused) {
                that.removeClass('active')
                clearInterval(xunhuan);
            }
        }, 500)
    })


    // 显示隐藏视频弹窗层
    $('.video-hidden').click(function () {
        $('.video-alert').removeClass('active')
        $('html').removeClass('active')
        $('.video-alert video')[0].pause();
    })

    $('.video-show').click(function () {
        $('.video-alert').addClass('active')
        $('html').addClass('active')
        $('.video-alert video')[0].play();
    })


    var mySwiper1 = new Swiper('.page-news .swiper', {
        autoplay: {
            delay: 3500,
        },
        speed: 800,
        autoHeight: true,
        loop: true,
        pagination: {
            el: '.page-news .swiper-pagination',
            clickable: true
        }
    });


    // 角色小图轮播
    var swiper_small = new Swiper(".page-role .swiper_small", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: 4,
        watchSlidesProgress: true,
        direction: "vertical",
    });

    // 角色大图轮播
    var swiper_big = new Swiper(".page-role .swiper_big", {
        loop: false,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_small,
        },
    });
})