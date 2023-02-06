$(document).ready(function () {

    $(window).on('load', function () {
        $('.ff').fadeOut(5e3, function () {
            $(this).remove('.ff');
            $('body').css('overflow', 'auto');
        });
    });/*end of loading*/

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 100) {

            $('.main-nav').removeClass('bg-transparent').addClass('bg-nav-transparent')

        } else {

            $('.main-nav').addClass('bg-transparent').removeClass('bg-nav-transparent')

        }//end of else

    });//end of window scroll

});//end of document ready