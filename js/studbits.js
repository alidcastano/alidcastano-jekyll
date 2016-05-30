/*** when to create studs and bits ***/
$('h1:contains("!!")').addClass("stud");
$('h1:contains("$$")').addClass("hint");

$('p:contains("==")').nextAll('p').addClass("bit");
$('p:contains("==")').nextAll('ul').addClass("bit");
$('p:contains("==")').nextAll('ol').addClass("bit");
$('p:contains("==")').nextAll('h3').addClass("bit");
$('p:contains("==")').nextAll('h4').addClass("bit");
$('p:contains("==")').nextAll('blockquote').addClass("bit quote-bit");


/*** when not to create stud and bits **/
$('p:contains("/**")').nextUntil('p:contains("**\")').removeClass('stud');
$('p:contains("/**")').nextUntil('p:contains("**\")').removeClass('bit');


/** drop down text box with arrow button **/

$().ready = function() {
    $('.bit').hide();
    $('.stud').addClass('right-arrow'); 

    $(".stud").click(function() {
      $(this).toggleClass('down-arrow');
         // let hr in markdown serves div 
        $(this).nextUntil('hr').slideToggle(300); 
    });

}();


/** Hide text that serve as triggers  **/

$('h1').html(function (i, t) {
    return t.replace('!!', '<span class="hidden">!!</span>');
})

$('h1').html(function (i, t) {
    return t.replace('$$', '<span class="hidden">$$</span>');
})

$('p').html(function (i, t) {
    return t.replace('==', '<span class="hidden">==</span>');
})


$('p').html(function (i, t) {
    return t.replace('/**', '<span class="hidden">/**</span>');
})

$('p').html(function (i, t) {
    return t.replace('**/', '<span class="hidden">**/</span>');
})