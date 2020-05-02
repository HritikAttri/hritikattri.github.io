$(document).ready(function() {

    /* ======================== */
    /* Sticky navigation */
    /* ======================== */

    $(".js--projects").waypoint(function(direction) {
        if(direction === "down") {
            $("nav").addClass("sticky-nav");
        } else {
            $("nav").removeClass("sticky-nav");
        }
    }, {
        offset: "60px"
    });

    /* ======================== */
    /* Scroll on clicking buttons */
    /* ======================== */

    $(".js--scroll-to-my-projects").click(function() {
        $("html, body").animate({scrollTop: $(".js--projects").offset().top - 30}, 1000);
    });

    $(".js--scroll-to-contact-me").click(function() {
        $("html, body").animate({scrollTop: $(".js--footer").offset().top}, 1000);
    });

    /* ======================== */
    /* Animations on scroll */
    /* ======================== */

    $(".js--projects-part-1").waypoint(function(direction) {
        $(".js--projects-part-1").addClass("animated fadeIn");
    }, {
        offset: "70%"
    });

    $(".js--projects-part-2").waypoint(function(direction) {
        $(".js--projects-part-2").addClass("animated fadeIn");
    }, {
        offset: "70%"
    });

    $(".js--projects-part-3").waypoint(function(direction) {
        $(".js--projects-part-3").addClass("animated fadeIn");
    }, {
        offset: "70%"
    });

    $(".js--projects-part-4").waypoint(function(direction) {
        $(".js--projects-part-4").addClass("animated fadeIn");
    }, {
        offset: "70%"
    });

    $(".js--projects-part-5").waypoint(function(direction) {
        $(".js--projects-part-5").addClass("animated fadeIn");
    }, {
        offset: "70%"
    });

    $(".js--projects-part-6").waypoint(function(direction) {
        $(".js--projects-part-6").addClass("animated fadeIn");
    }, {
        offset: "70%"
    });


    /* ======================== */
    /* Reponsive navigation */
    /* ======================== */

    $(".js--mobile-nav").click(function() {
        var nav = $(".js--main-nav");
        nav.slideToggle(200);
    })
});