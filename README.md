jquery.viewportheight.js:
=========================

This is a little jQuery plugin to define an HTML element height relative to the
viewport height.

It sets the height right away, and also adds a watcher to the window resize
event to keep the elment height as defined if the viewport size changes.

Usage:
======

Include jQuery and this plugin:
-------------------------------

    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min.js"></script>
    <script src="jquery.viewportheight.js"></script>

Create the elements you want to define a viewport relative height for:
----------------------------------------------------------------------

    <div class="100percent">100% of the viewport</div>
    <div class="50percent">50% of the viewport</div>
    <div class="60percent">60% of the viewport</div>
    <div class="minus100">viewport minus 100 pixels</div>
    <div class="plus100">viewport plus 100 pixels</div>
    <div class="minus_menu">viewport minus another element's height</div>
    <div class="plus_callback">viewport plus callback returned value</div>

Define the height using $.setViewportRelativeHeight():
------------------------------------------------------

    <script>
      $('.100percent').setViewportRelativeHeight();           // 100% of the viewport
      $('.50percent').setViewportRelativeHeight('50%');       // 50% of the viewport
      $('.60percent').setViewportRelativeHeight('60%');       // 60% of the viewport
      $('.minus100').setViewportRelativeHeight(-100);         // viewport height minus 100 pixels
      $('.plus100').setViewportRelativeHeight(100);           // viewport plus 100 pixels
      $('.minus_menu').setViewportRelativeHeight(-$('#menu').height());      // viewport height minus another element's height
      $('.plus_callback').setViewportRelativeHeight(function(){ return -$('#menu').height(); });  // viewport height plus callback function
    </script>

