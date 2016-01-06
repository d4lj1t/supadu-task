function bindMobileNav() {
    $(".js-mobile-menu-trigger").click(function () {
        var trigger = $(this);
        var target = $(".mobile-navigations-wrapper, .global-container");
        if (trigger.hasClass("active")) {
            trigger.removeClass("active");
            target.animate({ marginLeft: "-=267" }, 500);
        } else {
            trigger.addClass("active");
            target.animate({ marginLeft: "+=267" }, 500);
        }
    });


    $(".main-nav-item .js-accordion-indicator").click(function () {
        var trigger = $(this);
        var wrapper = $(this).closest(".main-nav-item");
        var target = wrapper.find(".main-nav-dropdown");
        if (!wrapper.hasClass("active")) {
            target.slideDown();
            wrapper.addClass("active");
        } else {
            target.slideUp();
            wrapper.removeClass("active");
        }
    });
}

$(document).ready(function () {
    bindMobileNav();
});





