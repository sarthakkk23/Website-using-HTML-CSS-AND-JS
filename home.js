const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
sidebar.classList.add('open'); // Ensures the sidebar is open by default
// Example of a function to toggle the sidebar class when a button is clicked
function toggleSidebar() {
  sidebar.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.getElementById("sidebar-toggle");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
  });
});

$(document).ready(function () {
  const reviewSlides = $(".review-slide");
  let currentReview = 0;

  // Show the first review initially
  $(reviewSlides[currentReview]).addClass("active-review").css("opacity", 1); // Set initial opacity
  // Function to show next review with smooth transition
  function showNextReview() {
    $(reviewSlides[currentReview]).animate({ opacity: 0 }, 300, function () {
      $(this).removeClass("active-review");
      currentReview = (currentReview + 1) % reviewSlides.length;
      $(reviewSlides[currentReview]).addClass("active-review").css("opacity", 0);
      $(reviewSlides[currentReview]).animate({ opacity: 1 }, 300); // Fade in with smooth transition
    });
  }

  // Auto change review every 5 seconds
  setInterval(showNextReview, 5000);
});

const backgroundContainer = document.querySelector('.background-image-container');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Adjust the opacity based on scroll position
  backgroundContainer.style.opacity = 1 - scrollPosition / 500;
});

const texts = [
  "Every individual, irrespective of their circumstances, deserves an opportunity to lead a life of dignity. It's with this belief that we have dedicated ourselves to uplifting those who are marginalized. We understand that the barriers faced by the underprivileged are often complex and intertwined—ranging from lack of access to basic necessities to limited educational opportunities.",
  "Our mission is to extend a helping hand to those in need, driven by a deep sense of compassion and a commitment to positive change. We believe that every individual deserves a chance at a better life, regardless of their circumstances. Our organization is founded on the principles of empathy, inclusivity, and the belief that by working together, we can create a brighter future for all.",
  "From providing education and vocational training to creating sustainable livelihood opportunities, we are dedicated to breaking the cycle of poverty and creating pathways to self-sufficiency. We believe in fostering a sense of ownership and agency within the communities we work with, empowering them to shape their own destinies."
]; // Update the texts as needed
const missionText = document.querySelector(".mission-text");
let currentIndex = 0;
function changeText() {
  missionText.style.opacity = 0; // Fade out
  setTimeout(() => {
    missionText.textContent = texts[currentIndex];
    missionText.style.opacity = 1; // Fade in
    currentIndex = (currentIndex + 1) % texts.length;
  }, 500); // Wait for fade-out to complete before changing content
}
// Initial text change
changeText();
// Set interval to change text every 3 seconds
setInterval(changeText, 5000);

$(document).ready(function () {
  // Function to smoothly scroll to the image gallery section
  $("#gallery-link").click(function (event) {
    event.preventDefault(); // Prevent default link behavior
    const gallerySection = $("#image-gallery");
    const offset = gallerySection.offset().top;
    
    // Smooth scroll animation
    $("html, body").animate({ scrollTop: offset }, 800);
  });
});//Gallery

$(document).ready(function () {
  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle lazy loading for images
  function lazyLoadImages() {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");

    lazyImages.forEach((img) => {
      if (isElementInViewport(img)) {
        img.classList.add("loaded");
      } else {
        img.classList.remove("loaded");
      }
    });
  }

  // Initial load
  lazyLoadImages();

  // Load images as the user scrolls
  window.addEventListener("scroll", lazyLoadImages);
});


