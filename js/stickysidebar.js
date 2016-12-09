
$(document).ready(function(){

    var sidebarHeight = $('#sidebar').height();
    var windowHeight = $(window).height();
    var sidebarOverflow = sidebarHeight - windowHeight;

    var $sidebar   = $("#sidebar .navbar"), 
    $window    = $(window),
    footer = $('.footer').height();

  if($(window).width() > 767) {

    $window.scroll(function() {
      if ($window.scrollTop() > sidebarOverflow) {
        $sidebar.css({'position':'fixed','bottom':footer + 50 });
      } else {
        $sidebar.css({'position':'static'});
      }
    });

  }


});
