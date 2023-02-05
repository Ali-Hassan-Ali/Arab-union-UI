$(document).ready(function () {

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 100) {

            $('.navbar').removeClass('bg-transparent').addClass('bg-nav-transparent')

        } else {

            $('.navbar').addClass('bg-transparent').removeClass('bg-nav-transparent')

        }//end of else

    });//end of window scroll

});//end of document ready