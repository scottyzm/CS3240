$(document).ready(function() {
    $("#submit-button").click(function() {
        $("input:blank").css("background-color", "#4286f4");
        $("#contactForm").validate({
            submitHandler: function(form) {
                $.Zebra_Dialog('<p><strong>Thank you !</strong></p> ' +
                    '<p>We will be in touch soon.</p>', {
                        'type': 'confirmation'
                    });
            },
            rules: {
                cemail: {
                    required: true,
                    email: true
                }
            }
        });
    });
});