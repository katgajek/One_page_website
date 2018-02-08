function pageScroll() {
    $(".main-nav a").on("click", function (e) {
        e.preventDefault();

        const $a = $(this);
        const href = $a.attr("href");
        const $section = $(href);

        $('html').animate({
            scrollTop: $section.offset().top
        }, 1000);
    });
}

export default pageScroll;