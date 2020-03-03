/*glopal $, alert, console*/

$(function(){

    'use strict';
    /****** nav ******/
    /* open-menu */
    $("nav > .container > .row > div:first-child > div.bar").on("click", function(){
        $("nav > .container > .row > div:last-child").show(300);
        $("nav > .container > .row > div:first-child > div.close-menu").show();
    })
    /* close-menu */
    $("nav > .container > .row > div:first-child > div.close-menu").on("click", function(){
        $(this).hide();
        $("nav > .container > .row > div:last-child").hide(300);
    })
    $(window).resize(function(){
        var sw = $(window).innerWidth();
        if(sw > 750) {
            $("nav > .container > .row > div:last-child").show();
        }
        else {
            $("nav > .container > .row > div:last-child").hide();
            $("nav > .container > .row > div:first-child > div.close-menu").hide();
        }
    })

    /****** header ******/
    $("a[data-scroll]").on("click", function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top 
        }, 1000);
    })

    /****** ourwork ******/
    $(".our-work > .container > .row > div > div img, .our-work > .container > .row > div > div div.bordered-div").hover(function(){
        $(".OurWork > .container > .row > div > div  img").show( "scale", {percent: 120}, 2000 );
    },function(){
    });



    /****** MainCategory ******/
    var img, orginalsrc;
    $(".main-category > .container > .row > div > a").hover(function(){
        img = $(this).find("img");
        orginalsrc = img.attr("src");
        var without_png = orginalsrc.slice(0, orginalsrc.length-4);
        var wight_img = without_png + "-w.png";

        img.attr("src", wight_img).hide(10).fadeIn(100);
    },function(){
        img.attr("src", orginalsrc).hide(10).fadeIn(100);
    });



    /******  counter  , CounterFactory ******/
    if($("body").data("counter") == "c") {
        var check = true;
        check = true;
        $(window).scroll(function(){

            if($(window).scrollTop() > $(".counter , .counter-factory").offset().top - 300 && check){
                check = false;
                $('.timer').countTo({
                    from: 0,
                    speed: 2000
                });
            }
        });
    }



    /***** Slick slider *****/
     //starting the carousel1111111111111
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        infinite: true,
        centerMode: true,
        variableWidth: true,       
    });


    
    /*****popup menu-form ****/
    $(".ratings > .container > a").click(function(){
        $(".ratings > .popup").fadeIn(500);
    });
    $(".ratings > .popup, .ratings > .popup > .inner > i").click(function(){
        $(".ratings > .popup").fadeOut(500);
    });
    $(".ratings > .popup > .inner").click(function(e){
        e.stopPropagation();
    });
    /*choose the best start*/
    var starV = $(".ratings > .popup > .inner > form input[type='hidden']") ,
    star_0 = $(".ratings > .popup > .inner > form > div > i:eq(0)"),
    star_1 = $(".ratings > .popup > .inner > form > div > i:eq(1)"),
    star_4 = $(".ratings > .popup > .inner > form > div > i:eq(4)");

    star_0.click(function(){
        $(this).removeClass().addClass("fa fa-star").siblings().removeClass().addClass("fa fa-star-o");
        starV.attr("value", "1");
    });
    star_1.click(function(){
        star_0.removeClass().addClass("fa fa-star").siblings().removeClass().addClass("fa fa-star-o");
        $(this).removeClass().addClass("fa fa-star");
        starV.attr("value", "2");
    });
    $(".ratings > .popup > .inner > form > div > i:eq(2)").click(function(){
        star_0.removeClass().addClass("fa fa-star").siblings().removeClass().addClass("fa fa-star-o");
        star_1.removeClass().addClass("fa fa-star");
        $(this).removeClass().addClass("fa fa-star");
        starV.attr("value", "3");
    });
    $(".ratings > .popup > .inner > form > div > i:eq(3)").click(function(){
        star_4.removeClass().addClass("fa fa-star-o").siblings().removeClass().addClass("fa fa-star");
        star.attr("value", "4");
    });
    star_4.click(function(){
        $(".ratings > .popup > .inner > form > div > i").removeClass().addClass("fa fa-star");
        starV.attr("value", "5");
    });




    /*buttom-top*/ 
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 800){
            scrollButton.show();
        }
        else{
            scrollButton.hide();   
        }
    });
    
    scrollButton.click(function(){
        $("html, body").animate({ scrollTop: 0}, 2000);
    });

});