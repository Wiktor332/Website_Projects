// Function to handle dropdown selection
function handleSelection(e) {
    var selectedValue = e.target.getAttribute('data-value');
    if (selectedValue) {
      console.log(selectedValue); // You can perform actions based on the selected value here
    }
  }
  
  // Event listener for dropdown items
  var pcDropdownItems = document.querySelectorAll('#pcDropdown a');
  pcDropdownItems.forEach(function (item) {
    item.addEventListener('click', handleSelection);
  });
  
  // Functionality to toggle the menu visibility
  document.getElementById('pcLink').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('pcDropdown').classList.toggle('show');
  });
  
  window.onclick = function (event) {
    if (!event.target.matches('.nav__links')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  

