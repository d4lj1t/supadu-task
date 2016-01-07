function bindClickEvents() {

    $(".js-thumb-up").click(function (e) {
        item = $(this).parent().find(".js-item").val()
        if (item >= 0 && item < 10) {
            $(this).parent().find(".js-item").val(+item + 1)
        }
    });

    $(".js-thumb-down").click(function () {
        item = $(this).parent().find(".js-item").val()
        if (item > 0 && item <= 10) {
            $(this).parent().find(".js-item").val(+item - 1)
        }
    });

    /*    var Model = {};

     var View = {
     thumbUp: $('.js-thumb-up'),
     thumbDown: $('.js-thumb-down'),
     item: $('.js-item')
     };

     View.thumbUpClick = function (button) {
     item = $(button).parent().find(View.item).val()
     if (item > 0 && item < 10) {
     $(button).parent().find(View.item).val(+item + 1);
     }
     };

     var Controller = {};

     Controller.bindThumbEvents = function () {
     View.thumbUp.click(function () {
     View.thumbUpClick(this);
     })
     };

     Controller.loadView = function () {
     Controller.bindThumbEvents();
     };

     Controller.loadView();*/

}

$(document).ready(function () {
    bindClickEvents();
});





