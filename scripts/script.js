$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $("#owl-sponsor").owlCarousel({
       items : 1,
       itemsDesktop : [1199,1],
       itemsDesktopSmall : [979,1],
       pagination: true,
       autoplay:true,
       autoplayTimeout:5000,
       loop:true,
       smartSpeed: 2000
});

    $("#owl-blog").owlCarousel({
         items : 1,
         itemsDesktop : [1199,1],
         itemsDesktopSmall : [979,1],
         pagination: true,
         autoplay:true,
         autoplayTimeout:5000,
         loop:true,
         smartSpeed: 2000
  });

    $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
            
            $('#overlay').on("mouseup",function(){          // lock it when mouse up
                $('#map').addClass('scrolloff'); 
                //somehow the mouseup event doesn't get call...
            });
            $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
                $('#map').removeClass('scrolloff');
            });
            $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
                $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                            // or you can do it on some other event
    });

    /* This is basic - uses default settings */
      
 $(".various").fancybox({
    maxWidth  : 800,
    maxHeight : 600,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    autoSize  : true,
    closeClick  : false,
    openEffect  : 'fade',
    closeEffect : 'fade',
        helpers : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.75)'
            }
        }
    }
  });


function resize() {
  if ($(window).width() < 573){  
    var topOfOthDiv = $("#about").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $(".top-nav2").fadeIn(200); //reached the desired point -- show div
        }

    });

    $(window).scroll(function() {
        if($(window).scrollTop() < topOfOthDiv) { //scrolled past the other div?
            $(".top-nav2").fadeOut(200); //reached the desired point -- show div
        }

    });
  } 
}
$(window).resize(function() {
  resize();
})
resize();
});