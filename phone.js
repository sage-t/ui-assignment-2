function dialerCallback(i) {
    return function(){
        $("#phone-number").val($("#phone-number").val() + i);
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

