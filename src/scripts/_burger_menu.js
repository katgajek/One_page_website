function burgerMenu() {
    const $menu = $(".sidebar");
    const $burger = $(".burger");
    var menuOpen;

    function openMenu() {
        $menu.css("right", "0");
        menuOpen = true;
    }

    function closeMenu() {
        $menu.css("right", "-320px");
        menuOpen = false;
    }

    function toggleSidebar() {
        $burger.toggleClass("active");

        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    $burger.on("click tap", () => {
        toggleSidebar();
    });

    $(".sidebar a").on("click tap", function (e) {
        e.preventDefault();

        const $a = $(this);
        const href = $a.attr("href");
        const $section = $(href);

        $('html, body').animate({
            scrollTop: $section.offset().top,

        }, 1000);

        $burger.removeClass("active");

        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

}

export default burgerMenu;