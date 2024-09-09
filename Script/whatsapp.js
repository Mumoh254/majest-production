// // Function to open the modal with dynamic product details
// function openModal(productName, sizes, discountedPrice, originalPrice, productImage, colors) {
//     // Display the modal
//     document.getElementById('productModal').style.display = "block";

//     // Set product details dynamically
//     document.getElementById('modalProductName').innerText = productName;
//     document.getElementById('modalImage').src = productImage;
//     document.getElementById('originalPrice').innerText = originalPrice;
//     document.getElementById('discountedPrice').innerText = discountedPrice;

//     // Set available sizes dynamically
//     const sizeSelect = document.getElementById('productSize');
//     sizeSelect.innerHTML = ''; // Clear previous options
//     const sizeArray = sizes.split(' - ');
//     sizeArray.forEach(size => {
//         const option = document.createElement('option');
//         option.value = size;
//         option.innerText = size;
//         sizeSelect.appendChild(option);
//     });

//     // Set available colors dynamically
//     const colorSelect = document.getElementById('productColor');
//     colorSelect.innerHTML = ''; // Clear previous options
//     colors.forEach(color => {
//         const option = document.createElement('option');
//         option.value = color;
//         option.innerText = color;
//         colorSelect.appendChild(option);
//     });
// }

// // Function to close the modal
// function closeModal() {
//     document.getElementById('productModal').style.display = "none";
// }

// // Function to send WhatsApp message with product details
// function sendWhatsAppMessage() {
//     const productName = document.getElementById('modalProductName').innerText;
//     const productSize = document.getElementById('productSize').value;
//     const productColor = document.getElementById('productColor').value;
//     const discountedPrice = document.getElementById('discountedPrice').innerText;
//     const productImage = document.getElementById('modalImage').src;

//     const userName = document.getElementById('userName').value;
//     const userMobile = document.getElementById('userMobile').value;
//     const userLocation = document.getElementById('userLocation').value;
//     const question1 = document.getElementById('question1').value;
//     const question2 = document.getElementById('question2').value;

//     // WhatsApp message
//     const message = `Hi there! 👋

//     I'm interested in purchasing the following product:
//     *Product Name:* ${productName}
//     *Size:* ${productSize}
//     *Color:* ${productColor}
//     *Price:* ${discountedPrice}
//     *Product Image:* ${productImage}

    
//     Could you please provide more details on the following ?
//    1. **Availability:** Is the product available in stock ?
//    2. **Delivery :**   Are  there   Delivery  methods   available  ?


// *User Information:*
// *Name:* ${userName}
// *Mobile Number:* ${userMobile}
// *Location:* ${userLocation}

// *Additional Questions:*
// 1. How did you hear about us? ${question1}
// 2. What is your preferred payment method? ${question2}

// Looking forward to your response!

// Thank you! 😊`;

//     const whatsappNumber = "0740045355"; // Your WhatsApp number

//     // Generate WhatsApp link
//     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

//     // Redirect to WhatsApp
//     window.open(whatsappLink, '_blank');
// }



