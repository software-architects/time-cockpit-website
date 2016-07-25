/// <reference path="../typings/jquery/jquery.d.ts" />
function sendContactForm() {
}
$(document).ready(function () {
    $("input,select,textarea").blur(function (eventObject) {
        $(eventObject.target).addClass("tc-touched");
        if ($(eventObject.target).is(":invalid")) {
            $("div[data-message-for='" + eventObject.target.id + "']").addClass("tc-error-visible");
        }
        else {
            $("div[data-message-for='" + eventObject.target.id + "']").removeClass("tc-error-visible");
        }
    });
});
