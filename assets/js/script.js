
$(document).ready(function() {
    $("#contact .thankyou").hide();
});

function formsubmit(){
    $("#contact .thankyou").show();
    $("#contact > h1").hide();
    $("#contact > h5").hide();
    $("#contact form").hide();
}