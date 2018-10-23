$(function() {

    var $clientcarousel = $('#clients-list2');
    var clients = $clientcarousel.children().length;
    var clientwidth = (clients * 400); // 140px width for each client item 
    $clientcarousel.css('width', clientwidth);
  
    var rotating = true;
    var clientspeed = 0;
    var seeclients = setInterval(rotateClients, clientspeed);
  
  
    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clients-list2 li:first');
        $first.animate({
          'margin-left': '220px'
        }, 5000, "linear", function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clients-list2 li:last').after($first);
        });
      } else {
      $('#clients-list2 li').stop();
      }
    }
  
    $(document).on({
      mouseenter: function(){
        rotating = false; // turn off rotation when hovering
      },
      mouseleave: function(){
        rotating = true;
      }
    }, '.clients2');
  
  });