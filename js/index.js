$(document).ready(function() {


    // preloaed
    window.addEventListener('load', function() {
        document.querySelector('body').classList.add("loaded")
    });



    // language
    $("#language-ar").click(function() {

        var element = $(".text-on");
        var element2 = $(".text-off");

        element.removeClass("text-on").addClass("text-off");
        element2.removeClass("text-off").addClass("text-on");

    });
    $("#language-en").click(function() {

        var element3 = $(".text-off");
        var element4 = $(".text-on");

        element3.removeClass("text-off").addClass("text-on");
        element4.removeClass("text-on").addClass("text-off");

    });


    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('.scroll-animet').slideDown(1000);
        } else {
            $('.scroll-animet').slideUp(500);
        }
    });


    // owner
    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("Read Less");
            $("#text").slideDown(100);
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("Read More");
            $("#text").slideUp(100);
        }
    });

    $('#myCarousel').carousel({
        interval: false
    })

    $('.carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });


});
// scrollup btn
$(window).scroll(function() {

    if ($(window).scrollTop() >= 500) {
        $('.scrollup-btn').fadeIn(500);
    } else {
        $('.scrollup-btn').fadeOut(500);
    }
});
$('.scrollup-btn').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});



// form