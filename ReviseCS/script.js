var activeDropdown = null;

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);

  if (activeDropdown && activeDropdown !== dropdown) {
    // Deactivate the currently active dropdown
    activeDropdown.classList.remove("show");
  }

  // Toggle the clicked dropdown
  dropdown.classList.toggle("show");

  // Update the active dropdown
  activeDropdown = dropdown;
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(openDropdown) {
      if (openDropdown.classList.contains('show') && !openDropdown.contains(event.target)) {
        openDropdown.classList.remove('show');
      }
    });
  }
}

function myFunction() {
  toggleDropdown("myDropdown");
}

function myFunction2() {
  toggleDropdown("myDropdown2");
}

function myFunction3() {
  toggleDropdown("myDropdown3");
}
