// function searchFunction() {
//     var input, filter, cards, title, game, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     cards = document.getElementById("cards"); 
//     title = cards.getElementsByClassName("title");
//     game = cards.getElementsByClassName("type")
    
//     let count = 0;

//     for (var i = 0; i < title.length; i++) {
//         var txtValue = title[i].textContent || title[i].innerText;
//         var card = title[i].closest('.card');
    
//         var isTitleMatch = txtValue.toUpperCase().indexOf(filter) > -1;
    
//         var gameTxtValue = game[i].textContent || game[i].innerText;
//         var gameCard = game[i].closest('.card');
    
//         var isGameMatch = gameTxtValue.toUpperCase().indexOf(filter) > -1;
    
//         if (isTitleMatch || isGameMatch) {
//             card.style.display = ""; // Show the card for title
//             gameCard.style.display = ""; // Show the card for game
//         } else {
//             card.style.display = "none"; // Hide the card for title
//             gameCard.style.display = "none"; // Hide the card for game
//         }
//         count++;
//     }
// }

// console.log(count);

function searchFunction() {
    var input, filter, cards, title, game, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    cards = document.getElementById("cards"); 
    title = cards.getElementsByClassName("title");
    game = cards.getElementsByClassName("type");
    
    let count = 0;

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
            count++;
        } else {
            card.style.display = "none"; // Hide the card for title
            gameCard.style.display = "none"; // Hide the card for game
        }
    }

    // Handle the visibility of cardsWrapper based on the count
    const cardsWrapper = document.getElementById('cardsWrapper');
    const carouselWrapper = document.getElementById('carouselWrapper');

    if (count <= 3) {
        cardsWrapper.style.display = 'block'; // Show cards
        carouselWrapper.style.display = 'none'; // Hide carousel wrapper
    } else {
        cardsWrapper.style.display = 'flex'; // Show cards
        carouselWrapper.style.display = 'flex'; // Show carousel wrapper
    }
}

// Initial hide/show based on total count before any filtering
searchFunction();


