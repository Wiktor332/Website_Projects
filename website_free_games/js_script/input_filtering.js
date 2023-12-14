function searchFunction() {
    var input, filter, cards, title, game, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    cards = document.getElementById("cards"); 
    title = cards.getElementsByClassName("title");
    game = cards.getElementsByClassName("type")

    for (var i = 0; i < title.length; i++) {
        txtValue = title[i].textContent || title[i].innerText;
        card = title[i].closest('.card'); 

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = ""; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    }
    
    for (var i = 0; i < game.length; i++) {
        txtValue = game[i].textContent || game[i].innerText;
        card = game[i].closest('.card'); 

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card.style.display = ""; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    }

}
