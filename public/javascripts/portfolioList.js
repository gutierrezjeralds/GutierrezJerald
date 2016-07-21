$(document).ready(function(){
    $('.fade-in1 img:gt(0)').hide();
    $('.fade-in2 img:gt(0)').hide();
    $('.fade-in3 img:gt(0)').hide();
    $('.fade-in4 img:gt(0)').hide();
    $('.fade-in5 img:gt(0)').hide();
    $('.fade-in6 img:gt(0)').hide();

    $('.fade-in1').hover(function() {
        timer = setInterval(function(){
            $('.fade-in1').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in1'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in2').hover(function() {
        timer = setInterval(function(){
            $('.fade-in2').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in2'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in3').hover(function() {
        timer = setInterval(function(){
            $('.fade-in3').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in3'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in4').hover(function() {
        timer = setInterval(function(){
            $('.fade-in4').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in4'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in5').hover(function() {
        timer = setInterval(function(){
            $('.fade-in5').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in5'));
            },1000);
        }, function() {
        clearInterval(timer);
    });

    $('.fade-in6').hover(function() {
        timer = setInterval(function(){
            $('.fade-in6').find(':first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo($('.fade-in6'));
            },1000);
        }, function() {
        clearInterval(timer);
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