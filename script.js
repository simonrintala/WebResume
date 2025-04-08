window.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".intro-header");
  const paragraphs = document.querySelectorAll(".header-paragraph");

  // Lägger till 'visible' klass till h1
  setTimeout(() => {
    heading.classList.add("visible");
  }, 100);

  // Lägger till 'visible' klass till varje <p> med fördröjning
  paragraphs.forEach((paragraph, index) => {
    setTimeout(() => {
      paragraph.classList.add("visible");
    }, 500 + index * 300); // Fördröjning ökar med 300 ms per <p>
  });
});
