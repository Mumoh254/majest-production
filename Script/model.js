

// Function to open the modal with dynamic product details
function openModal(productName, sizes, discountedPrice, originalPrice, productImage, colors) {
    document.getElementById('productModal').style.display = "block";

    document.getElementById('modalProductName').innerText = productName;
    document.getElementById('modalImage').src = productImage; // Attach the product image
    document.getElementById('originalPrice').innerText = originalPrice;
    document.getElementById('discountedPrice').innerText = discountedPrice;

    const sizeSelect = document.getElementById('productSize');
    sizeSelect.innerHTML = '';
    const sizeArray = sizes.split(' - ');
    sizeArray.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.innerText = size;
        sizeSelect.appendChild(option);
    });

    const colorSelect = document.getElementById('productColor');
    colorSelect.innerHTML = '';
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.innerText = color;
        colorSelect.appendChild(option);
    });

    calculateTotal();
}
function closeProductModal() {
    console.log('closeProductModal function called'); // Debugging line
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error('Product modal element not found');
    }
}




// Function to calculate total price based on quantity
function calculateTotal() {
    const quantity = document.getElementById('productQuantity').value;
    const discountedPrice = parseFloat(document.getElementById('discountedPrice').innerText.replace(/[^0-9.-]+/g, ""));
    const totalPrice = quantity * discountedPrice;
    document.getElementById('totalPrice').innerText = `KSH ${totalPrice.toFixed(2)}`;
}

// Function to send WhatsApp message with product details
function sendWhatsAppMessage() {
    const productName = document.getElementById('modalProductName').innerText;
    const productSize = document.getElementById('productSize').value;
    const productColor = document.getElementById('productColor').value;
    const discountedPrice = parseFloat(document.getElementById('discountedPrice').innerText.replace(/[^0-9.-]+/g, ""));
    const quantity = document.getElementById('productQuantity').value;
    const totalPrice = quantity * discountedPrice;
    const productImage = document.getElementById('modalImage').src;
    const userName = document.getElementById('userName').value;
    const userMobile = document.getElementById('userMobile').   value;
    const userLocation = document.getElementById('userLocation').value;

    if (!userName || !userMobile || !userLocation) {
        alert('Please fill in all the required fields: Name, Mobile, and Location.');
        return;
    }

       // Display "Processing your order..." message
       const processingMessage = document.getElementById('processingMessage');
       processingMessage.style.display = "block";

     

        const message = `Hi there! 👋

        I'm interested in purchasing the following product:
        *Product Name:* ${productName}
        *Size:* ${productSize}
        *Color:* ${productColor}
        *Price per Item:* KSH ${discountedPrice.toFixed(2)}
        *Quantity:* ${quantity}
        *Total Price:* KSH ${totalPrice.toFixed(2)}
        *Product Image:* ${productImage}

        *User Information:*
        *Name:* ${userName}
        *Mobile Number:* ${userMobile}
        *Location:* ${userLocation}
        

        PAYMENT  DETAILS :
        PAYBIL 247247
        ACC.. 0820177411438
        ACC NAME  SAMMY  MATAYO :

        Looking forward to your response!
    
       Thank you ! for shopping with us at *Majesty Collections*.  We value your business and   we are here to assist with any further inquiries 😊`;
        
        const whatsappNumber = "254114298441"; 
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        setTimeout(function() {
            // Hide the processing message after delay
            processingMessage.style.display = "none";
            
            // Open WhatsApp link in a new tab
            window.open(whatsappLink, '_blank');
        }, 4000); // Delay of 2 seconds

}                     

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    if (event.target === productModal) {
        closeProductModal();
    }
}
