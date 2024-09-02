  // Get the modal
  var modal = document.getElementById("callModal");
    
  // Get the icon that opens the modal
  var callIcon = document.getElementById("callIcon");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the icon, open the modal
  callIcon.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Function to trigger the call
  function callNumber(number) {
      window.location.href = `tel:${number}`;
  }