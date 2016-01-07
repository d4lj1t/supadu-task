

function bindClickEvents() {

    $(".js-thumb-up").click(function() {
        if ($(this).parent().find(".js-thumb-val").val() >= 0 && $(this).parent().find(".js-thumb-val").val() < 10 ) {
            $(this).parent().find(".js-thumb-val").val(+$(this).parent().find(".js-thumb-val").val() + 1)
        }
    });

    $(".js-thumb-down").click(function() {
        if ($(this).parent().find(".js-thumb-val").val() > 0 && $(this).parent().find(".js-thumb-val").val() <= 10 ) {
            $(this).parent().find(".js-thumb-val").val(+$(this).parent().find(".js-thumb-val").val() - 1)
        }
    });
}

$(document).ready(function () {
    bindClickEvents();


});





