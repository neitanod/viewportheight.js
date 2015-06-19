(function(){
  var watch = [];
  var onresizeloaded = false;

  var resizer = function(){
      if(watch.length){
        var wh = window.innerHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
        for( i in watch){
          if(watch[i].percent) watch[i].$elm.height(wh*(watch[i].percent/100));
          else if(watch[i].param) watch[i].$elm.height(wh+watch[i].param);
          else if(watch[i].callback) watch[i].$elm.height(wh+watch[i].callback());
          else watch[i].$elm.height(0);
        }
      } else {
        clearInterval(interval);
      }
    };

  jQuery.fn.setViewportRelativeHeight = function(param){
    var elms = jQuery(this);
    elms.each(
      function(i){
        var percent = 0;
        var callback = false;
        if(typeof(param) == 'string' && param.indexOf('%')){
          percent = param.split('%')[0];
          param = "";
        } else if(typeof(param) == 'function'){
          callback = param;
          param = "";
        } else if(typeof(param) == 'undefined'){
          percent = 100;
          param = "";
        } else {
          param = parseFloat(param);
        }
        watch.push({'$elm': jQuery(this), 'param': param, 'percent': percent, 'callback': callback});
      }
    )

    // adjust size right now
    resizer();

    // adjust size again when page load completes
    jQuery(resizer);

    // also start listening to the onresize event of the window
    if(!onresizeloaded) jQuery(window).resize(resizer); onresizeloaded = true;

    return elms;
  }
})();
