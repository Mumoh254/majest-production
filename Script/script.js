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




  let currentImageUrl = ''; // Global variable to store current image URL

  function showModal(imgElement) {
      // Set the current image URL
      currentImageUrl = new URL(imgElement.getAttribute('src'), window.location.origin).href;
      document.getElementById('buyNowModal').style.display = 'block';
  }

  function closeModal() {
      document.getElementById('buyNowModal').style.display = 'none';
  }

  function redirectToWhatsApp() {
      // Get the product details
      const productName = document.querySelector('.product-title.product-name').textContent;
      const productPrice = document.querySelector('.product-price.span').textContent;

      // Construct the WhatsApp message
      const message = `Hello, I'm interested in the ${productName} priced at ${productPrice} from Majesty Shoe Collections. You can view the product image I'm interested in here: ${currentImageUrl}. Please let me know how to proceed. Thank you!`;

      // Encode the message
      const encodedMessage = encodeURIComponent(message);

      // WhatsApp number (replace with the actual number)
      const whatsappNumber = '254740045355';

      // Construct the WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.location.href = whatsappUrl;
  }