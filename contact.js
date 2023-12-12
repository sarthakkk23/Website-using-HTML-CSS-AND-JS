const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
sidebar.classList.add('open'); // Ensures the sidebar is open by default
// Example of a function to toggle the sidebar class when a button is clicked
function toggleSidebar() {
  sidebar.classList.toggle('open');
}

const backgroundContainer = document.querySelector('.background-image-container');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Adjust the opacity based on scroll position
  backgroundContainer.style.opacity = 1 - scrollPosition / 500;
});

var map = L.map('map-container').setView([19.0744, 74.7786], 16);

var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(osmUrl, {
    maxZoom: 19,
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([19.0744, 74.7786]).addTo(map);
marker.bindPopup("Yash Foundation").openPopup();

function confirmEmail() {
  console.log("Function executed!");
  var response = confirm("Do you want to open your email client?");
  if (response) {
      window.location.href = "mailto:contact@example.com";
  }
}