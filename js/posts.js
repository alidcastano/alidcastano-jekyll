// so that when you scroll down fixed header turns into fixed nav 
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.fixed-banner').addClass('scroll-nav');
    } else {
        $('.fixed-banner').removeClass('scroll-nav');
    }
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

// 
//element appears on scroll
//
$(window).on("load",function() {
  $(window).scroll(function() {
    $(".fade-in").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* if the element is completely within bounds of the window, fade it in */
      if (objectBottom < (windowBottom + 25))  { // object comes into view (scrolling down)

        if ($(this).css("opacity")==0) {
          $(this).fadeTo(500,1);
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {
          $(this).fadeTo(500,0);
        }
      }
    });
  }); $(window).scroll(); // invoke scroll-handler on page-load
});


// 
// hide header on on scroll down
//
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > (navbarHeight + 60)){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

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