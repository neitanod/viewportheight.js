Usage:
======

Include jQuery and the plugin:
------------------------------

    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min.js"></script>
    <script src="jquery.viewportheight.js"></script>

Create the elements you want to define a viewport relative height for:
----------------------------------------------------------------------

    <div class="alto_100">100% del viewport</div>
    <div class="alto_50">50% del viewport</div>
    <div class="alto_60">60% del viewport</div>
    <div class="alto_menos100">viewport menos 100 pixels</div>
    <div class="alto_mas100">viewport mas 100 pixels</div>
    <div class="alto_menos_menu">viewport menos la altura del menú</div>

Define the height using $.setViewportRelativeHeight():
------------------------------------------------------

    <script>
      $('.100percent').setViewportRelativeHeight();           // 100% of the viewport
      $('.50percent').setViewportRelativeHeight('50%');       // 50% of the viewport
      $('.60percent').setViewportRelativeHeight('60%');       // 60% of the viewport
      $('.minus100').setViewportRelativeHeight(-100);         // viewport height minus 100 pixels
      $('.plus100').setViewportRelativeHeight(100);           // viewport plus 100 pixels
      $('.minus_menu').setViewportRelativeHeight(-$('#menu').height());      // viewport height minus another element's height
      $('.minus_callback').setViewportRelativeHeight(function(){ return -$('#menu').height(); });  // viewport height plus callback function
    </script>

