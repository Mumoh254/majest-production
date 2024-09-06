






document.addEventListener('DOMContentLoaded', function () {
    // Get all the links in the navigation menu
    const navLinks = document.querySelectorAll('.main li a');

    // Get the last clicked link from localStorage (if it exists)
    const activeLink = localStorage.getItem('activeLink');

    // If there's an active link stored in localStorage, set its color to red
    if (activeLink) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === activeLink) {
                link.style.color = 'red';
                link.style.border =   '0.5px  solid #333';
                link.style.padding =  ' 2px 5px';
            }
        });
    }

    // Loop through each link and add a click event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove red color from all links
            navLinks.forEach(navLink => {
                navLink.style.color = 'black';
            });

            // Set the clicked link's color to red
            link.style.color = 'red';

            // Save the clicked link's href in localStorage
            localStorage.setItem('activeLink', link.getAttribute('href'));
        });
    });
});







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


window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    if (productModal && event.target === productModal) {
        closeProductModal();
    }

    const callModal = document.getElementById('callModal');
    if (callModal && event.target === callModal) {
        callModal.style.display = "none";
    }
};

// Function to trigger the call
function callNumber(number) {
    window.location.href = `tel:${number}`;
}


// Get the button
const backToTopBtn = document.getElementById("backToTop");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
