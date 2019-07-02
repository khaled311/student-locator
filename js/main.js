$(function() {


    // Adding Class To Navbar
    $(window).on('scroll', function() {
        if($(window).scrollTop() >= $("header").height() / 3){
            $(".navbar").addClass('scrolled')
        }else{
            $(".navbar").removeClass('scrolled')
        }
    });

    // Navbar Effect On Scroll
    var zero = 0;
    $(window).on('scroll', function() {
        $(".navbar").toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    });


    // Tabs
    $(".statis .container ul li").on('click', function() {
        var myClass = $(this).data("div");

        $(this).addClass("active").siblings().removeClass("active");

        $(".statis .container .right .sub").hide();
        
        $("." + myClass).fadeIn(500);
    });


    // Stop Propagation for input in last input
    $(".accordion .card:last-child button:last-child .right").on('click', function(e) {
        e.stopPropagation();
    });
    
})