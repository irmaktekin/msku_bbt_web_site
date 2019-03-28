
/* Theme Author: Kadir Karayakalı
    Version: 1.0
*/

$(document).ready(function($) {
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".fixed-top").removeClass("menu-bg");
            $(".fixed-top").addClass("change-fix-top");
        } else {
            $(".fixed-top").removeClass("change-fix-top");
            $(".fixed-top").addClass("menu-bg");
        }
    });

    $(document).on('click', '.animate', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
    });
});
