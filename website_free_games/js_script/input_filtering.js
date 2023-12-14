function searchFunction() {
    var input, filter, cards, title, game, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    cards = document.getElementById("cards"); 
    title = cards.getElementsByClassName("title");
    game = cards.getElementsByClassName("type")

    for (var i = 0; i < title.length; i++) {
        var txtValue = title[i].textContent || title[i].innerText;
        var card = title[i].closest('.card');
    
        var isTitleMatch = txtValue.toUpperCase().indexOf(filter) > -1;
    
        var gameTxtValue = game[i].textContent || game[i].innerText;
        var gameCard = game[i].closest('.card');
    
        var isGameMatch = gameTxtValue.toUpperCase().indexOf(filter) > -1;
    
        if (isTitleMatch || isGameMatch) {
            card.style.display = ""; // Show the card for title
            gameCard.style.display = ""; // Show the card for game
        } else {
            card.style.display = "none"; // Hide the card for title
            gameCard.style.display = "none"; // Hide the card for game
        }
    }
    

}
