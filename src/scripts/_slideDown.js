function slideDown() {
    const $certBtn = $(".certBtn");

    $certBtn.on("click tap", function () {
        $(this).parent().next().slideToggle(500);
    })
}

export default slideDown;