function bindClickEvents() {

    $(".js-thumb-up").click(function () {
        if ($(this).parent().find(".js-item").val() >= 0 && $(this).parent().find(".js-item").val() < 10) {
            $(this).parent().find(".js-item").val(+$(this).parent().find(".js-item").val() + 1)
        }
    });

    $(".js-thumb-down").click(function () {
        if ($(this).parent().find(".js-item").val() > 0 && $(this).parent().find(".js-item").val() <= 10) {
            $(this).parent().find(".js-item").val(+$(this).parent().find(".js-item").val() - 1)
        }
    });

    /*    var Model ={};

     var View = {
     thumbUp: $('.js-thumb-up'),
     thumbDown: $('.js-thumb-down'),
     item: $('.js-item')
     };

     View.thumbUpClick = function (button) {
     if ( $(button).parent().find(View.item).val() > 0 && $(button).parent().find(View.item).val() < 10  ) {

     $(button).parent().find(View.item).val(+$(button).parent().find(View.item).val() + 1);

     }
     };

     var Controller = {};

     Controller.bindThumbEvents = function() {
     View.thumbUp.click(function() {
     View.thumbUpClick(this);
     })
     };

     Controller.loadView = function() {
     Controller.bindThumbEvents();
     };

     Controller.loadView();*/

}

$(document).ready(function () {
    bindClickEvents();
});





