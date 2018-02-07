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

// function gestureCallback(message) {
//     return function () {
//         $("#gesture_output").text(message);
//     }
// }

var downX = 0, downY = 0;
function mouseDownHandler(event) {
    $("#gesture_output").text("mouse down");
    downX = event.pageX;
    downY = event.pageY;
}

function mouseUpHandler(event) {
    var dx = event.pageX - downX;
    var dy = event.pageY - downY;

    if (dx == 0 && dy == 0) {
        $("#gesture_output").text("mouse up");
    } else if (Math.abs(dx) > Math.abs(dy)) {
        $("#gesture_output").text("swipe " + (dx > 0 ? "right" : "left"));
    } else {
        $("#gesture_output").text("swipe " + (dy > 0 ? "down" : "up"));
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
    $("#gesture_area").mousedown(mouseDownHandler);
    $("#gesture_area").mouseup(mouseUpHandler);

});

