/// <reference path="../typings/jquery/jquery.d.ts" />

function sendForm(eventData: any) {
    var form = $(eventData.target).parents("form").first();

    var requiredVar = "input[required], select[required], textarea[required]";
    var emptyrequiredVar = "input[data-empty-required], select[data-empty-required], textarea[data-empty-required]";

    if (form.find(requiredVar).filter((index: number, elem: Element) => { return !(<any>elem).value; }).length > 0) {
        return false;
    }

    if(form.find(emptyrequiredVar).filter((index: number, elem: Element) => { return (<any>elem).value; }).length > 0){
            return false;
    }

    form.submit();
    return true;
}

function createAccount(eventData: any) {

    if (sendForm(eventData)) {
        alert("Create new Account");
    }
}

$(document).ready(function () {

    $("input,select,textarea").blur(function (eventObject: JQueryEventObject) {
        $(eventObject.target).addClass("tc-touched");

        if ($(eventObject.target).is(":invalid"))
        {
            $("span[data-message-for='" + eventObject.target.id + "']").addClass("tc-error-visible");
        }
        else
        {
            $("span[data-message-for='" + eventObject.target.id + "']").removeClass("tc-error-visible");
        }
    });
});

