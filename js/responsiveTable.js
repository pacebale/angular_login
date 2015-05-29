 (function($){
      $.fn.extend({
        responsiveTable: function(clase, breackpoint){
          return this.each(function(){
            var ancho = $(window).width();
            var data = new Array();
            var titles = new Array();
            if(ancho < breackpoint){
               $(this).find('.'+clase).addClass('hide'); 
            }else{
              $(this).find('.'+clase).removeClass('hide'); 
            }        
          });
        }
      });
   })(jQuery);