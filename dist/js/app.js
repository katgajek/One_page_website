$(function(){


    //page scroll


    $(".main-nav a").on("click", function(e){
    e.preventDefault();

    const $a = $(this);
    const href = $a.attr("href");
    const $section = $(href);
    console.log($section);
    $('html').animate({
        scrollTop: $section.offset().top
    },1000);
    });

    $(window).scroll(function(){


    $(".speech").each(function(i){
        const bottomOfItem = $(this).offset().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();

        if(bottomOfWindow>bottomOfItem){
            $(this).animate({opacity: '1'},1500);
        }
    })

    });

    //burger menu

    $('.burger').click(function(){
        $(this).toggleClass('active');
    });


});