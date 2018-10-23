$(function() {

    var $clientcarousel = $('#clients-list');
    var clients = $clientcarousel.children().length;
    var clientwidth = (clients * 400); // 140px width for each client item 
    $clientcarousel.css('width', clientwidth);
  
    var rotating = true;
    var clientspeed = 0;
    var seeclients = setInterval(rotateClients, clientspeed);
  
  
    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clients-list li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 5000, "linear", function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clients-list li:last').after($first);
        });
      } else {
      $('#clients-list li').stop();
      }
    }
  
    $(document).on({
      mouseenter: function(){
        rotating = false; // turn off rotation when hovering
      },
      mouseleave: function(){
        rotating = true;
      }
    }, '.clients');
  
  });

  $(document).ready(function() {
    var showChar = 1;
    var moretext = "more info";
    var lesstext = "hide info";
    $('.more').each(function() {
      var content = $(this).html();
  
      if(content.length > showChar) {

        var h = content.substr(showChar-1, content.length - showChar);

  
        var html = '<span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';  
        $(this).html(html);
      }
  
    });
  
    $(".morelink").click(function(){
      if($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
      } else {
       
        $(this).html(lesstext);
        $(this).addClass("less");

      }
      $(this).prev().toggle();
      $(this).parent().prev().toggle();
      
      return false;
    });
  });
