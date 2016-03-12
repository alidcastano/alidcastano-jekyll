$('.email-form').hide();

$().ready = function() {
    $("#trigger-form").click(function() {
      $('.email-form').show();
      $('.email-form').addClass('slide-up').removeClass('slide-down');
    });

}();

$().ready = function() {
    $("#close-form").click(function() {
      $('.email-form').removeClass('slide-up').addClass('slide-down');
    });

}();

