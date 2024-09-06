// Function to open the modal with dynamic product details
function openModal(productName, sizes, discountedPrice, originalPrice, productImage, colors) {
    // Display the modal
    document.getElementById('productModal').style.display = "block";

    // Set product details dynamically
    document.getElementById('modalProductName').innerText = productName;
    document.getElementById('modalImage').src = productImage;
    document.getElementById('originalPrice').innerText = originalPrice;
    document.getElementById('discountedPrice').innerText = discountedPrice;

    // Set available sizes dynamically
    const sizeSelect = document.getElementById('productSize');
    sizeSelect.innerHTML = ''; // Clear previous options
    const sizeArray = sizes.split(' - ');
    sizeArray.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.innerText = size;
        sizeSelect.appendChild(option);
    });

    // Set available colors dynamically
    const colorSelect = document.getElementById('productColor');
    colorSelect.innerHTML = ''; // Clear previous options
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.innerText = color;
        colorSelect.appendChild(option);
    });

    // Set initial total price
    calculateTotal();
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = "none"; // Hides the modal
}
// Function to close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
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
    const productSizeElement = document.getElementById('productSize');
    const productColorElement = document.getElementById('productColor');
    const productImage = document.getElementById('modalImage').src; // Capture product image URL

    // Check if product size and color elements exist
    if (!productSizeElement || !productColorElement) {
        console.error('Product size or color element not found');
        return;
    }

    const productSize = productSizeElement.value;
    const productColor = productColorElement.value;
    const discountedPrice = parseFloat(document.getElementById('discountedPrice').innerText.replace(/[^0-9.-]+/g, ""));
    const quantity = document.getElementById('productQuantity').value;

    // Calculate total price based on quantity
    const totalPrice = quantity * discountedPrice;

    const userName = document.getElementById('userName').value;
    const userMobile = document.getElementById('userMobile').value;
    const userLocation = document.getElementById('userLocation').value;

    // Validate user inputs
    if (!userName || !userMobile || !userLocation) {
        alert('Please fill in all the required fields: Name, Mobile, and Location.');
        return;
    }

    // WhatsApp message content
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

    Looking forward to your response!

    Thank you! 😊`;

    const whatsappNumber = "254740045355"; 

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in new tab
    window.open(whatsappLink, '_blank');
}
