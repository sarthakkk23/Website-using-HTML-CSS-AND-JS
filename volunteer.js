const sidebar = document.querySelector('.sidebar');
import axios from 'axios';
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

document.addEventListener('DOMContentLoaded', function() {
  const inputFields = document.querySelectorAll('#volunteer-form input, #volunteer-form textarea');

  inputFields.forEach(inputField => {
    inputField.addEventListener('input', function() {
      if (this.value !== '') {
        this.classList.add('active');
      } else {
        this.classList.remove('active');
      }
    });
  });
});

