// Open Modal with Project Details
function openModal(projectTitle) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-title").innerText = projectTitle;
}

// Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close Modal if user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
// Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.querySelector("[name='name']").value.trim();
    const email = document.querySelector("[name='email']").value.trim();
    const message = document.querySelector("[name='message']").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        e.preventDefault(); // Prevent the form from submitting
    }
});

