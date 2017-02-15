$(document).ready(function() {
    $("#submit-button").click(function() {
        if ($("#name").val().length === 0) {
            alert("Please fill in your name");
        }
    });
});