document.addEventListener("DOMContentLoaded", function() {
  // JavaScript function to open the Sign Up modal
  function openSignUpModal() {
      $('#Modal-1').modal('show');
  }

  // Add an event listener to the "Sign up" anchor tag
  const signUpLink = document.querySelector('.atag');
  signUpLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      openSignUpModal(); // Call the function to open the Sign Up modal
  });
});