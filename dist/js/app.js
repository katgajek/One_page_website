$(function(){

    //main-hero fadeIn

    $('.main-hero').animate({
        opacity:1},3000
    );

    //page scroll - menu


    $(".main-nav a").on("click", function(e){
    e.preventDefault();

    const $a = $(this);
    const href = $a.attr("href");
    const $section = $(href);

    $('html').animate({
        scrollTop: $section.offset().top
    },1000);
    });


    //burger menu

    function toggleSidebar(){
        $(".burger").toggleClass("active");
        $(".sidebar").toggleClass("activeItem");

    }

    $(".burger-menu").on("click tap", function() {
        toggleSidebar();
    })

    $(".sidebar a").on("click tap", function(e){
        e.preventDefault();

        const $a = $(this);
        const href = $a.attr("href");
        const $section = $(href);

        $('html').animate({
            scrollTop: $section.offset().top,

        },1000);

    });

    //box fadeIn

    $(window).scroll(function(){

    $(".speech").each(function(i){
        const bottomOfItem = $(this).offset().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();

        if(bottomOfWindow>bottomOfItem){
            $(this).addClass("active");
        }
    })

    });

    //carousel

    $('#carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        arrows:true,
        responsive: [
            {
                breakpoint: 902,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    //

});