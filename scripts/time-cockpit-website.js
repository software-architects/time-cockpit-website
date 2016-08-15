/// <reference path="../typings/jquery/jquery.d.ts" />
var currentPage = 1;
var numberOfPages = 1;
var startElement = 0;
var endElement = 9;
var elements = null;
var imgElements = null;
var attribute = null;
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
    imgElements.removeAttr("src");
    //var images = imgElements.slice(startElement, endElement);
    imgElements.slice(startElement, endElement).each(function (index) {
        imgElements.slice(startElement, endElement)[index].setAttribute("src", imgElements.slice(startElement, endElement)[index].getAttribute("data-img-src"));
    });
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
    imgElements = $(".tc-blogoverview").find("img");
    numberOfPages = Math.ceil(elements.length / 10);
    currentPage = 1;
    updatePaging();
    // add table of contents to blog articles
    var result = $(".tc-toc");
    var setUl = false;
    if (result.length > 0) {
        var text = "<ul>";
        var headers = $(".tc-content").find("h2, h3, h4");
        headers.each(function (index, header) {
            if (index < headers.length) {
                var id = "header" + index.toString();
                if (header.attributes["id"]) {
                    id = header.attributes["id"].value;
                }
                var tag = headers[index].tagName;
                var previousTag = "H2";
                if (index > 0) {
                    previousTag = headers[index - 1].tagName;
                }
                var level = parseInt(tag.replace(/H/, ""));
                var previousLevel = parseInt(previousTag.replace(/H/, ""));
                if (level > previousLevel) {
                    for (var i = 0; i < level - previousLevel; i++) {
                        text += "<ul>";
                    }
                }
                else if (level < previousLevel) {
                    text += "</ul>";
                }
                text += "<li><a href='#" + id + "'>" + header.innerHTML + "</a></li>";
                if (!header.attributes["id"]) {
                    header.setAttribute("id", id);
                }
            }
        });
        text += "</ul>";
        result.append(text);
    }
});
