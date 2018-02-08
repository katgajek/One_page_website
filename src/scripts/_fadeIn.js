//box fadeIn
function boxFadein() {
    $(window).scroll(() => {

        $(".speech").each(function() {
            const bottomOfItem = $(this).offset().top + $(this).outerHeight();
            const bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfItem) {
                $(this).addClass("active");
            }
        })
    });
}


//main-hero fadeIn
function mainHero() {
    $('.main-hero').animate({
            opacity: 1
        }, 2000
    );
}


export default boxFadein;
export default mainHero;