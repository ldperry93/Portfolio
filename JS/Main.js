$(document).ready(function () {
    $("#get_to_know").click(function () {
        $('html,body').animate({
            scrollTop: $("#begin_main ").offset().top
        }, 1000)
    });

    // Email
    $("#contact_me").submit(function (event) {
        event.preventDefault();

        var $captcha = $('#recaptcha');
        var capthca_response = grecaptcha.getResponse();

        var $inputs = $('#contact_me :input');

        var values = {};
        $inputs.each(function () {
            values[this.name] = $(this).val();
        });

        if (!values.name || values.name.length < 1 || !values.email || values.email.length < 1 || !values.message || values.message.length < 1 || capthca_response.length === 0) {
            if ($('#email-message').length === 0) {
                $('#form-container').append('<div id="email-message">Please fill out the whole form</div>');
            }
            return
        }



        if ($('#email-message').length !== 0) {
            $('#email-message').empty()
        }

        $('#contact_me').slideUp();
        $('#form-container').append('<div id="email-message">Thanks for reaching out! I will be in touch soon!</div>');
    });
});
