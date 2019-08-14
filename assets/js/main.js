jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });
});

$(document).ready(function() {

    // Close search screen with Esc key
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            if ($(".initial-content").hasClass("is--hidden")) {
                $(".search-content").toggleClass("is--visible");
                $(".initial-content").toggleClass("is--hidden");
            }
        }
    });

    // Search toggle
    $(".search__toggle").on("click", function() {
     $(".search-content").toggleClass("is--visible");
     $(".initial-content").toggleClass("is--hidden");
     // set focus on input
     setTimeout(function() {
        $(".search-content input").focus();
     }, 400);
    });
});
