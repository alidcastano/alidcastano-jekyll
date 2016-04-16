// so that when you scroll down fixed header turns into fixed nav 
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.fixed-banner').addClass('scroll-nav');
    } else {
        $('.fixed-banner').removeClass('scroll-nav');
    }
});


// so that when you reach footer appears and header/nav dissapears 
$(window).on("load",function() {
  $(window).scroll(function() {
    $(".fade-in").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if ((objectBottom - 25) < windowBottom) { //object comes into view (scrolling down)

        if ($(this).css("opacity")==0) {
          $(this).fadeTo(500,1);
          $('.site-header').hide();
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {
          $(this).fadeTo(500,0);
          $('.site-header').show();
        }
      }
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load
});



// make all markdown links are external 
$(document).ready(function() {
   $('a').each(function() {
      var a = new RegExp('/' + window.location.host + '/');
      if (!a.test(this.href)) {
      $(this).attr("target","_blank");
      }
   });
});


/*

$(function() {
    $("#subscription-form").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: '//formspree.io/' + '{{site.author.email}}', 
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          $("#submit-success").fadeIn();
          //$("#subscription-form").fadeOut();

          //clear all fields
          $('#subscription-form').trigger("reset");
        },
        error: function(){
          // Fail message
         $("#submit-errors").fadeIn();    

          //clear all fields
          $('#subscription-form').trigger("reset");
        }
      });
    });
});


*/