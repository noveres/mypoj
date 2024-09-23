$(function () {
    // 头部logo样式切换
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 0) {
            $(".index-header .logo").addClass('active');
        } else {
            $(".index-header .logo").removeClass('active');
        }
    });


    // 背景音乐播放和关闭
    $('.header a.aki-music').click(function () {
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


    // 角色小图轮播
    var swiper_small = new Swiper(".index-role .swiper_small", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: 3,
        watchSlidesProgress: true,
    });

    // 角色大图轮播
    var swiper_big = new Swiper(".index-role .swiper_big", {
        loop: false,
        spaceBetween: 0,
        navigation: {
            nextEl: ".index-role .swiper-button-next",
            prevEl: ".index-role .swiper-button-prev",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_small,
        },
    });


    // 首页新闻轮播
    var mySwiper1 = new Swiper('.index-news .swiper', {
        autoplay: false,
        speed: 800,
        autoHeight: true,
        loop: true,
        pagination: {
            el: '.index-news .swiper-pagination',
            clickable: true
        },
        on: {
            slideChangeTransitionEnd: function () {
                // 给焦点轮播图添加滚动字幕效果
                $('.index-news .akiswiper .desc').removeClass('active')
                $('.index-news .akiswiper .swiper-slide-active .desc').addClass('active')

                // 给焦点轮播图添加对应的标题和日期
                $('.index-news .news-aki-time').html($('.index-news .swiper-slide-active .hidden-time').html())
                $('.index-news .news-aki-title').html($('.index-news .swiper-slide-active .hidden-title').html())
            },
        },
    });


    // 首页游戏特色
    var mySwiper1 = new Swiper('.index-game .swiper', {
        autoplay: false,
        speed: 500,
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: ".index-game .swiper-button-next",
            prevEl: ".index-game .swiper-button-prev",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });

    // 模拟点击 首页游戏特色板块 轮播图切换功能
    $('.index-game .aki-prev').click(function () {
        $('.index-game .akiswiper .swiper-button-prev').trigger('click');
    })

    $('.index-game .aki-next').click(function () {
        $('.index-game .akiswiper .swiper-button-next').trigger('click');
    })


    // 首页设定档案
    var mySwiper1 = new Swiper('.index-files .swiper', {
        autoplay: false,
        speed: 500,
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: ".index-files .swiper-button-next",
            prevEl: ".index-files .swiper-button-prev",
        },
    });


    // 角色分页小图轮播
    var swiper_small2 = new Swiper(".jsjs-sec1 .swiper_small", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 5,
        watchSlidesProgress: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: ".jsjs-sec1 .swiper-button-next",
            prevEl: ".jsjs-sec1 .swiper-button-prev",
        },
        on: {
            slideChangeTransitionEnd: function () {
                // 给焦点轮播图添加滚动字幕效果
                let showsection = $('.jsjs-sec1 .swiper_small .swiper-slide-active .item').attr('showsection')

                $('.tab-content .tab-pane').removeClass('active')
                $('.' + showsection).addClass("active");
            },
        },
    });


    var xunhuan2

    // 暂停声音、初始化声音设置
    function zt_sound() {
        // 初始化声音设置 如清除定时器、所有声音暂停、取消播放按钮的激活样式
        clearInterval(xunhuan2);
        if ($('.now-sound').length > 0) {
            $('.now-sound')[0].pause();
            $('audio').removeClass('now-sound')
        }
        $('.aki-jsxq .js-cv .js-cv-btn').removeClass('active')
    }

    // 切换cv名称
    $('.aki-jsxq .js-cv label.lang-btn input').change(function () {
        zt_sound()

        if ($(this).prop('checked')) {
            $(this).parent('label').siblings('.js-cv-name').addClass('active')
        } else {
            $(this).parent('label').siblings('.js-cv-name').removeClass('active')
        }
    })


    // 播放声优语音
    $('.aki-jsxq .js-cv .js-cv-btn').click(function () {
        zt_sound()

        // 检测语音是日语还是中文
        let is_jp = $(this).siblings(".lang-btn").children('input').prop('checked');

        if (is_jp) {
            $(this).siblings(".aki-sound").children('.jp')[0].play()
            $(this).siblings(".aki-sound").children('.jp').addClass('now-sound')
        } else {
            $(this).siblings(".aki-sound").children('.cn')[0].play()
            $(this).siblings(".aki-sound").children('.cn').addClass('now-sound')
        }

        $(this).addClass('active')

        let that = $(this);
        xunhuan2 = setInterval(function () {
            if ($('.now-sound')[0].paused) {
                that.removeClass('active')
                clearInterval(xunhuan2);
            }
        }, 500)
    })


    // 角色详情小图轮播
    var swiper_small3 = new Swiper(".page-jsxq .swiper_small", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: "auto",
        watchSlidesProgress: true,
    });

    // 角色详情大图轮播
    var swiper_big3 = new Swiper(".page-jsxq .swiper_big", {
        loop: false,
        spaceBetween: 0,
        navigation: {
            nextEl: ".page-jsxq .swiper-button-next",
            prevEl: ".page-jsxq .swiper-button-prev",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_small3,
        },
        on: {
            slideChangeTransitionEnd: function () {
                zt_sound()
            },
        },
    });


    // 新闻分页轮播图
    var pagenews = new Swiper('.xwzx-sec1 .swiper', {
        autoplay: false,
        speed: 500,
        autoHeight: true,
        slidesPerView: "auto",
        loop: true,
        pagination: {
            el: '.xwzx-sec1 .swiper-pagination',
            clickable: true
        },
    });
})

