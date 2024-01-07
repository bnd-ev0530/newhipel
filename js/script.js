var hamburgerCheckbox = document.getElementById("hamburger");
var sidebar = document.querySelector(".sidebar");

// hamburgerCheckbox.addEventListener("change", function () {
//   if (hamburgerCheckbox.checked) {
//     sidebar.style.width = "250px";
//   } else {
//     sidebar.style.width = "0";
//   }
// });

// var navItems = document.querySelectorAll(".nav_mobile a");
// navItems.forEach(function (item) {
//   item.addEventListener("click", function () {
//     hamburgerCheckbox.checked = false;
//     sidebar.style.width = "0";
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const closeButton = document.getElementById("closeButton");
  const sidebar = document.querySelector(".sidebar");

  // Function to toggle sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("active");
  }

  // Event listener for hamburger icon
  hamburger.addEventListener("click", toggleSidebar);

  // Event listener for close button
  closeButton.addEventListener("click", toggleSidebar);

  // Event listener to close sidebar when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
      sidebar.classList.remove("active");
    }
  });
});
