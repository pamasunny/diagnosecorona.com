


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
});

function myFunction(){
    var x = document.getElementById("nav_icon");
    if(x.style.display ==="block"){
        x.style.display = "none";
        
       
    } else {
        x.style.display = "block";
      
    }
}

$('document').ready(function(){
    
   
    var value = Cookies.get('shown')
    if(value == 'true') {
        $("#newsletter_id").hide();
    } else {
        $("#newsletter_id").addClass("newsletter");
         Cookies.set('shown','true', { expires: 7})
    }
});



$(document).ready(function(){
  $(".close").click(function(){
    $("#newsletter_id").hide();
  })
  });


