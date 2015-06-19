Modo de uso:
============

Incluir jQuery y el plugin:
---------------------------

    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min.js"></script>
    <script src="jquery.viewportheight.js"></script>

Definir los elementos a redimensionar:
--------------------------------------

    <div class="alto_100">100% del viewport</div>
    <div class="alto_50">50% del viewport</div>
    <div class="alto_60">60% del viewport</div>
    <div class="alto_menos100">viewport menos 100 pixels</div>
    <div class="alto_mas100">viewport mas 100 pixels</div>
    <div class="alto_menos_menu">viewport menos la altura del menú</div>

Ejecutar la linea que redimensiona (mas abajo de los elementos):
----------------------------------------------------------------

    <script>
      $('.alto_100').setViewportRelativeHeight();           // 100% del viewport
      $('.alto_50').setViewportRelativeHeight('50%');       // 50% del viewport
      $('.alto_60').setViewportRelativeHeight('60%');       // 60% del viewport
      $('.alto_menos100').setViewportRelativeHeight(-100);  // altura del viewport menos 100 pixels
      $('.alto_mas100').setViewportRelativeHeight(100);     // altura del viewport mas 100 pixels
      $('.alto_menos_menu').setViewportRelativeHeight(-$('#menu').height());  // altura del viewport menos altura de otro elemento
    </script>

