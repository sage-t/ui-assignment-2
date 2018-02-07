function show(item, tab) {
    $(item).show();
    $(tab).addClass("active-tab");
}

function hideAll() {
    $("#content-dialer").hide();
    $("#content-list").hide();
    $("#content-form").hide();
    $("#content-gesture").hide();
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

$(document).ready(function() {
    hideAll();
    show("#content-dialer", "#dialer-button");

    // setup dialer buttons
    for(let i = 0; i < 10; i++) {
        $('#b-' + i).click(dialerCallback(i));
    }
    $('#b-hash').click(dialerCallback('#'));
    $('#b-star').click(dialerCallback('*'));
    $('#b-clear').click(function() {$("#phone-number").val('')});


    // setup tabs
    var tab_ids = ["#dialer-button", "#list-button", "#form-button", "#gesture-button"];
    var content_ids = ["#content-dialer", "#content-list", "#content-form", "#content-gesture"];
    for (let i = 0; i < tab_ids.length; i++) {
        $(tab_ids[i]).click(tabCallback(tab_ids[i], content_ids[i]));
    }


    // setup gesture area


});

