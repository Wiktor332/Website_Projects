document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card, index) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      
      checkbox.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the click event from propagating to parent elements
        
        // Uncheck other checkboxes except the clicked one for the respective card
        cards.forEach((otherCard, otherIndex) => {
          if (otherIndex !== index) {
            const otherCheckbox = otherCard.querySelector('input[type="checkbox"]');
            otherCheckbox.checked = false;
          }
        });
      });
    });
  });
  