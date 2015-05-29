(function($){
      $.fn.extend({
        displayPreview: function(widthReal, heightReal){
          return this.each(function(){
                function displayPreview(files) {
                  var reader = new FileReader();
                  var img = new Image();

                  reader.onload = function (e) {
                    img.src = e.target.result;
                    fileSize = Math.round(files.size / 1024);
                        //alert("File size is " + fileSize + " kb");

                        img.onload = function () {
                            $('#preview').append('<img class="img-responsive" src="' + e.target.result + '"/>');

                            if(widthReal != this.width && heightReal != this.height){
                              alert("La imagen debe medir: "+widthReal+" x "+heightReal);
                              $("#userfile").val('');
                              $('#preview').html('');
                            }

                        };

                    };
                    reader.readAsDataURL(files);

                }
            

                $(this).change(function () {
                var file = this.files[0];

                displayPreview(file);

              });     
          });
        }
      });
   })(jQuery);