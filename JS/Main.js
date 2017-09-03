$(document).ready(function() {
    $("#get_to_know").click(function() {
        $('html,body').animate({
            scrollTop: $("#begin_main ").offset().top
        }, 1000)
    });
});
