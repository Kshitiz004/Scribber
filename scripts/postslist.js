// Function to open the delete post modal
function openModal(button) {
    const modal = document.getElementById("deletePostModal");
    const postCard = button.closest(".myclass");
    const postId = postCard.dataset.postId;
    
    // Attach the postId to the delete button for reference
    const deleteButton = modal.querySelector(".btn-yes");
    deleteButton.dataset.postId = postId;
    
    // Show the modal
    modal.style.display = "block";
}

// Function to close the delete post modal
function closeModal() {
    const modal = document.getElementById("deletePostModal");
    modal.style.display = "none";
}

// Attach event listeners to close modal buttons
const closeButtons = document.querySelectorAll(".btn-close-modal");
closeButtons.forEach(button => {
    button.addEventListener("click", closeModal);
});

// Attach event listener to delete button in modal
const deleteButton = document.querySelector(".btn-yes");
deleteButton.addEventListener("click", function () {
    const postId = this.dataset.postId;
    // TODO: Write code to delete the post with postId from the list
    
    // After deletion, rearrange the remaining posts and update the UI
    closeModal();
});
