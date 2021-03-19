$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.height();
    let headerH = header.height();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let width = $(document).width();

    $(window).on("scroll load resize", function() {
        introH = intro.height();
        scrollPos = $(this).scrollTop();
        width = $(window).width();

        if(scrollPos + headerH + 10 >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        if(scrollPos + headerH + 10 >= introH, width < 825) {
            nav.css("margin-top", "10px");
        } else {
            nav.css("margin-top", "0");
        }
    });

    let advert = $("#advert");
    let advertH = advert.height();
    let main = $("#main");
    let mainH = main.height();
    let advert1 = $("#advert1");
    let advert2 = $("#advert2");
    let advert3 = $("#advert3");

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();
        mainH = main.height();
        advertH = advert.height();

        if(mainH - advertH * 5 / 6 < scrollPos) {
            advert1.addClass("active");
        }

        if(mainH - advertH * 1 / 2 < scrollPos) {
            advert2.addClass("active");
        }

        if(mainH - advertH * 1 / 6 < scrollPos) {
            advert3.addClass("active");
        }
    });

    let burger__item = $("#burger__item");
    let burger__item__top = $("#burger__item__top");
    let burger__item__btm = $("#burger__item__btm");
    let burger = $("#burger");
    let nav__link = $(".nav__link");
    let nav__contacts = $("#nav__contacts");

    $("#burger").click(function() {
        burger__item.toggleClass("check");
        burger__item__top.toggleClass("check");
        burger__item__btm.toggleClass("check");
        burger.toggleClass("check");
        nav.toggleClass("check");
        nav__link.toggleClass("check");
        nav__contacts.toggleClass("check");
    });

});
