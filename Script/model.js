

  // Get the modal
  var modalShow = document.getElementById("shoeModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("closes");
  
  // Show the modal after a delay (e.g., 2 seconds after page load)
  window.onload = function() {
      setTimeout(function() {
          modalShow.style.display = "block";
      }, 1000);
  }
  
  // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
        modalShow.style.display = "none";
  
   }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modalShow.style.display = "none";
      }
  }