

function openModal() {
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Close modal if user clicks outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
