jQuery(document).ready(function($){
    $('.ham-menu').on('click',function(){

        $(this).toggleClass("active");
        $('.nav-items').slideToggle();


    });
});