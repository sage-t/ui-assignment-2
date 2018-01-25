$(document).ready(function() {
    hideAll();
    show("#content-dialer", "#dialer-button");

    $("#dialer-button").click(function() {
        hideAll();
        show("#content-dialer", "#dialer-button");
    });

    $("#list-button").click(function() {
        hideAll();
        show("#content-list", "#list-button");
    });

    $("#form-button").click(function() {
        hideAll();
        show("#content-form", "#form-button");
    });
});

function show(item, tab) {
    $(item).show();
    $(tab).addClass("active-tab");
}

function hideAll() {
    $("#content-dialer").hide();
    $("#content-list").hide();
    $("#content-form").hide();
    $(".active-tab").removeClass("active-tab");
}

