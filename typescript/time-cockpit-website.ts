/// <reference path="../typings/jquery/jquery.d.ts" />
var currentPage: number = 1;
var numberOfPages: number = 1;
var startElement: number = 0;
var endElement: number = 9;
var elements: JQuery = null;
var imgElements: JQuery = null;
var attribute: JQuery = null;

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
    window.scrollTo(0,0);
}

function nextPage() {
    currentPage++;
    startElement += 10;
    endElement += 10;
    updatePaging();
    window.scrollTo(0, 0);
}

//Reset all buttons for paging
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
    } else if (currentPage >= numberOfPages) {
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-left.disabled").addClass("hidden");
        $(".tc-pager .tc-next").addClass("hidden");

    } else {
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-left.disabled").addClass("hidden");
        $(".tc-pager .glyphicon.glyphicon-circle-arrow-right.disabled").addClass("hidden");
    }

    elements.addClass("hidden");
    elements.slice(startElement, endElement).removeClass("hidden");

    //remove and add the src for the images
    imgElements.removeAttr("src");

    imgElements.slice(startElement, endElement).each(function (index) {
        imgElements.slice(startElement, endElement)[index].setAttribute("src", imgElements.slice(startElement, endElement)[index].getAttribute("data-img-src"));
    });
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

    // add table of contents to blog articles
    var result = $(".tc-toc");
    var setUl = false;

    if (result.length > 0) {
        var text = "<ul>";
        var title = $(".col-sm-8").find("h2, h3, h4");

        title.each((index: number, value: Element) => {
            if (index + 1 < title.length) {

                text += "<li> <a id='link" + index + "' href='#title" + index + "'>" + value.innerHTML + "</a>  </li>";
                value.setAttribute("id", "title" + index);

                if (title[index + 1].tagName != "H2") {
                    if (!setUl) {
                        setUl = true;
                        text += "<ul>";
                    }
                } else {
                    if (setUl) {
                        text += "</ul>";
                        setUl = false;
                    }
            }
        }
    });

    text += "</ul>";
    result.append(text);

    //setting top and bottom for affix
    $("#summaryAffix").affix({
        offset:
        {
            top: $(".header").outerHeight(true),
            bottom: $(".tc-container.tc-container-lightblue.tc-related-posts-container").outerHeight(true) + $(".footer").outerHeight(true)
        }
    });

    // add paging to blog
    elements = $(".tc-blogoverview").find(".tc-blogteaser");
    imgElements = $(".tc-blogoverview").find("img");
    numberOfPages = Math.ceil(elements.length / 10);
    currentPage = 1;

    updatePaging();
});



