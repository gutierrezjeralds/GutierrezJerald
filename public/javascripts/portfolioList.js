$(document).ready(function(){
    $('.fade-in1 img:gt(0)').hide();
    $('.fade-in2 img:gt(0)').hide();
    $('.fade-in3 img:gt(0)').hide();
    $('.fade-in4 img:gt(0)').hide();
    $('.fade-in5 img:gt(0)').hide();
    $('.fade-in6 img:gt(0)').hide();

    $('.fade-in1').hover(function() {
        $("#fade-in1-Href").addClass('box-shadow');
        timer = setInterval(function(){
            $('.fade-in1').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in1'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in2').hover(function() {
        $("#fade-in2-Href").addClass('box-shadow');
        timer = setInterval(function(){
            $('.fade-in2').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in2'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in3').hover(function() {
        $("#fade-in3-Href").addClass('box-shadow');
        timer = setInterval(function(){
            $('.fade-in3').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in3'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in4').hover(function() {
        $("#fade-in4-Href").addClass('box-shadow');
        timer = setInterval(function(){
            $('.fade-in4').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in4'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in5').hover(function() {
        $("#fade-in5-Href").addClass('box-shadow');
        timer = setInterval(function(){
            $('.fade-in5').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in5'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in6').hover(function() {
        $("#fade-in6-Href").addClass('box-shadow');
        timer = setInterval(function(){
            $('.fade-in6').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in6'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $(".fade-in1, .fade-in2, .fade-in3, .fade-in4, .fade-in5, .fade-in6").mouseleave(function(){
        $("#fade-in1-Href").removeClass('box-shadow');
        $("#fade-in2-Href").removeClass('box-shadow');
        $("#fade-in3-Href").removeClass('box-shadow');
        $("#fade-in4-Href").removeClass('box-shadow');
        $("#fade-in5-Href").removeClass('box-shadow');
        $("#fade-in6-Href").removeClass('box-shadow');
    });

    <!--$(function() {-->
        <!--$(".portfolio-list").find(".content-list").each(function() {-->
            <!--$(this).hover(function() {-->
                <!--//alert("blind");-->
                <!--timer = setInterval(function(){-->
                    <!--$(this).find(':first-child').fadeOut()-->
                        <!--.next('img').fadeIn()-->
                        <!--.end().appendTo($(this));-->
                    <!--},1000);-->
                <!--}, function() {-->
                <!--clearInterval(timer);-->
            <!--});-->
        <!--});-->
    <!--});-->
});