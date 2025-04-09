window.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".intro-header");
  const paragraphs = document.querySelectorAll(".header-paragraph");

  setTimeout(() => {
    heading.classList.add("visible");
  }, 100);


  paragraphs.forEach((paragraph, index) => {
    setTimeout(() => {
      paragraph.classList.add("visible");
    }, 500 + index * 300); 
  });
}); // text animation

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // restrict default form submission

    // get data from the form fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validate that fields are not empty
    if (name && email && message) {
     
      // Create a new FormData object to hold the form data
      document.getElementById("formMessage").textContent =
        "Thank you for your message, " +
        name +
        "." +
        "\nI will get back to you as soon as possible!";
      document.getElementById("formMessage").style.color = "#3D52A0";
      document.getElementById("formMessage").style.display = "block";

      // Reset the form fields after submission
      document.getElementById("contactForm").reset();
    } else {
      // Show an error message if any field is empty
      document.getElementById("formMessage").textContent =
        "Every field has to be filled in!";
      document.getElementById("formMessage").style.color = "red";
      document.getElementById("formMessage").style.display = "block";
    }
  });
