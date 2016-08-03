/// <reference path="../typings/jquery/jquery.d.ts" />
var currentPage = 1;
var numberOfPages = 1;
var startElement = 0;
var endElement = 9;
var elements = null;
function sendForm(eventData) {
    var form = $(eventData.target).parents("form").first();
    var requiredVar = "input[required], select[required], textarea[required]";
    var emptyrequiredVar = "input[data-empty-required], select[data-empty-required], textarea[data-empty-required]";
    if (form.find(requiredVar).filter(function (index, elem) { return !elem.value; }).length > 0) {
        return false;
    }
    if (form.find(emptyrequiredVar).filter(function (index, elem) { return elem.value; }).length > 0) {
        return false;
    }
    form.submit();
    return true;
}
function createAccount(eventData) {
    if (sendForm(eventData)) {
        alert("Create new Account");
    }
}
function previousPage() {
    currentPage--;
    startElement -= 10;
    endElement -= 10;
    updatePaging();
    window.scrollTo(0, 0);
}
function nextPage() {
    currentPage++;
    startElement += 10;
    endElement += 10;
    updatePaging();
    window.scrollTo(0, 0);
}
function resetHidden() {
    if ($(".tc-pager .tc-previous").hasClass("hidden"))
        $(".tc-pager .tc-previous").removeClass("hidden");
    if ($(".tc-pager .glyphicon.glyphicon-circle-arrow-right.disabled").hasClass("hidden"))
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-right.disabled").removeClass("hidden");
    if ($(".tc-pager .glyphicon.glyphicon-circle-arrow-left.disabled").hasClass("hidden"))
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-left.disabled").removeClass("hidden");
    if ($(".tc-pager .tc-next").hasClass("hidden"))
        $(".tc-pager .tc-next").removeClass("hidden");
}
function updatePaging() {
    $(".tc-pager .tc-current-page").empty();
    $(".tc-pager .tc-current-page").append(currentPage.toString() + " / " + numberOfPages.toString());
    resetHidden();
    if (currentPage <= 1) {
        $(".tc-pager .tc-previous").addClass("hidden");
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-right.disabled").addClass("hidden");
    }
    else if (currentPage >= numberOfPages) {
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-left.disabled").addClass("hidden");
        $(".tc-pager .tc-next").addClass("hidden");
    }
    else {
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-left.disabled").addClass("hidden");
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-right.disabled").addClass("hidden");
    }
    elements.addClass("hidden");
    elements.slice(startElement, endElement).removeClass("hidden");
}
$(document).ready(function () {
    // check user input
    $("input,select,textarea").blur(function (eventObject) {
        $(eventObject.target).addClass("tc-touched");
        if ($(eventObject.target).is(":invalid")) {
            $("span[data-message-for='" + eventObject.target.id + "']").addClass("tc-error-visible");
        }
        else {
            $("span[data-message-for='" + eventObject.target.id + "']").removeClass("tc-error-visible");
        }
    });
    // add paging to blog
    elements = $(".tc-blogoverview").find(".tc-blogteaser");
    numberOfPages = Math.ceil(elements.length / 10);
    currentPage = 1;
    updatePaging();
});
