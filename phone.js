var tab_ids = ["#dialer-button", "#list-button", "#form-button", "#gesture-button"];
var content_ids = ["#content-dialer", "#content-list", "#content-form", "#content-gesture"];

function show(item, tab) {
    $(item).show();
    $(tab).addClass("active-tab");
}

function hideAll() {
    for (ci of content_ids) { $(ci).hide(); }
    $(".active-tab").removeClass("active-tab");
}

function dialerCallback(i) {
    return function() {
        $("#phone-number").val($("#phone-number").val() + i);
    }
}

function tabCallback(tab_id, content_id) {
    return function() {
        hideAll();
        show(content_id, tab_id);
    }
}

function gestureCallback(message) {
    return function () {
        $("#gesture_output").text(message);
    }
}

$(document).ready(function() {
    hideAll();
    show("#content-dialer", "#dialer-button");

    // setup dialer buttons
    for(let i = 0; i < 10; i++) { $('#b-' + i).click(dialerCallback(i)); }
    $('#b-hash').click(dialerCallback('#'));
    $('#b-star').click(dialerCallback('*'));
    $('#b-clear').click(function() {$("#phone-number").val('')});


    // setup tabs
    for (let i = 0; i < tab_ids.length; i++) {
        $(tab_ids[i]).click(tabCallback(tab_ids[i], content_ids[i]));
    }


    // setup gesture area
    $("#gesture_area").mousedown(gestureCallback("mouse down"));
    $("#gesture_area").mouseup(gestureCallback("mouse up"));

});

