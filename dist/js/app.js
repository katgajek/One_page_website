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

    const $menu = $(".sidebar");
    const $burger = $(".burger");
    var menuOpen;

    function openMenu(){
        $menu.css("right", "0");
        menuOpen = true;
    }

    function closeMenu(){
        $menu.css("right", "-320px");
        menuOpen = false;
    }

    function toggleSidebar(){
        $burger.toggleClass("active");

        if (menuOpen) {
            closeMenu();
        }else{
            openMenu();
        }
    }

    $burger.on("click tap", function() {
        toggleSidebar();
    });

    $(".sidebar a").on("click tap", function(e){
        e.preventDefault();

        const $a = $(this);
        const href = $a.attr("href");
        const $section = $(href);

        $('html, body').animate({
            scrollTop: $section.offset().top,

        },1000);

        $burger.removeClass("active");

        if (menuOpen) {
            closeMenu();
        }else{
            openMenu();
        }
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
        dots: true,
        arrows: true,
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

    //cert slideDown

    const $certBtn = $(".certBtn");

    $certBtn.on("click tap", function(){
           $(this).parent().next().slideToggle(500);
    })

});