

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
}

// Function to close the modal
function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

// Function to send WhatsApp message with product details
function sendWhatsAppMessage() {
    const productName = document.getElementById('modalProductName').innerText;
    const productSize = document.getElementById('productSize').value;
    const productColor = document.getElementById('productColor').value;
    const discountedPrice = document.getElementById('discountedPrice').innerText;
    const productImage = document.getElementById('modalImage').src;

    // WhatsApp message
    const message = `Hi, I'm interested in buying the product: 
    *${productName}* 
    Size: ${productSize}
    Color: ${productColor}
    Price: ${discountedPrice}
    Product Image: ${productImage}`;

    const whatsappNumber = "254740045355"; // Replace with your WhatsApp number

    // Generate WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
}