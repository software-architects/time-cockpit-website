/// <reference path="../typings/jquery/jquery.d.ts" />
var currentPage: number = 1;
var numberOfPages: number = 1;
var startElement: number = 0;
var endElement: number = 9;
var elements: JQuery = null;

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

function previousPage() {
    currentPage--;
    startElement -= 10;
    endElement -= 10;
    updatePaging();
}

function nextPage() {
    currentPage++;
    startElement += 10;
    endElement += 10;
    updatePaging();
}

function updatePaging() {
    $(".tc-blogoverview .tc-current-page").empty();
    $(".tc-blogoverview .tc-current-page").append("Page: " + currentPage.toString() + " / " + numberOfPages.toString());

    if (currentPage <= 1) {
        $(".tc-blogoverview .tc-previous").addClass("hidden");
    } else {
        $(".tc-blogoverview .tc-previous").removeClass("hidden");
    }

    if (currentPage >= numberOfPages) {
        $(".tc-blogoverview .tc-next").addClass("hidden");
    } else {
        $(".tc-blogoverview .tc-next").removeClass("hidden");
    }

    elements.addClass("hidden");
    elements.slice(startElement, endElement).removeClass("hidden");
}

$(document).ready(function () {
    // check user input
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

    // add paging to blog
    elements = $(".tc-blogoverview").find(".tc-blogteaser");
    numberOfPages = Math.ceil(elements.length / 10);
    currentPage = 1;

    updatePaging();
});



