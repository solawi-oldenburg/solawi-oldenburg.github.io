$(window).bind('scroll', function() {
   if ($(window).scrollTop() > 20) {
       $('.navbar').addClass('colored');
   }
   else {
       $('.navbar').removeClass('colored');
   }
});



// open menu dropdown on mouseover
$(function () {
    $(".dropdown-hover").hover(
        function () {
            $(this).addClass('open')
        },
        function () {
            $(this).removeClass('open')
        }
        );
});

$(document).ready(function () {
    //Handles menu drop down
    $('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });
});