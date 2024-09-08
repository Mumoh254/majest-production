

document.addEventListener('DOMContentLoaded', function () {
  
    const navLinks = document.querySelectorAll('.main li a');

  
    const activeLink = localStorage.getItem('activeLink');

 
    if (activeLink) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === activeLink) {
                link.style.color = 'red';
                link.style.border =   '0.5px  solid #333';
                link.style.padding =  ' 2px 5px';
            }
        });
    }

  
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
          
            navLinks.forEach(navLink => {
                navLink.style.color = 'black';
            });

       
            link.style.color = 'red';

        
            localStorage.setItem('activeLink', link.getAttribute('href'));
        });
    });
});



// Get the modal
var modal = document.getElementById("callModal");


var callIcon = document.getElementById("callIcon");


var span = document.getElementsByClassName("close")[0];


callIcon.onclick = function() {
    modal.style.display = "block";
}


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

const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
};

backToTopBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


function countUp(element) {
    const target = +element.getAttribute('data-target');
    const speed = 200; 
    const updateCount = () => {
        const currentCount = +element.innerText;
        const increment = target / speed;
        
        if (currentCount < target) {
            element.innerText = Math.ceil(currentCount + increment);
            setTimeout(updateCount, 10);
        } else {
            element.innerText = target;
        }
    };
    updateCount();
}

function countUp(element) {
    const target = +element.getAttribute('data-target');
    const suffix = element.getAttribute('data-suffix') || ''; // Get the suffix or default to empty string
    const speed = 200;
    const updateCount = () => {
        const currentCount = +element.innerText.replace(suffix, ''); // Remove suffix during counting
        const increment = target / speed;
        
        if (currentCount < target) {
            element.innerText = Math.ceil(currentCount + increment) + suffix;
            setTimeout(updateCount, 10);
        } else {
            element.innerText = target + suffix;
        }
    };
    updateCount();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.count');
            counters.forEach(counter => countUp(counter));
            observer.disconnect(); 
        }
    });
}, { threshold: 0.5 }); 


observer.observe(document.querySelector('.stats'));


