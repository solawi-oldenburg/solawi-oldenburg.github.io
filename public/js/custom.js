$(window).bind('scroll', function() {
   if ($(window).scrollTop() > 33) {
       $('.navbar').addClass('colored-navbar');
   }
   else {
       $('.navbar').removeClass('colored-navbar');
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


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
