const user_cards = document.querySelectorAll('.user_card');
user_cards.forEach(userCardFunction)

function userCardFunction(card){
    card.addEventListener('click', () => {
        card.classList.toggle("card_clicked")
    });
}

function toggleClassFunction(element){
    console.log(element)
    element.classList.toggle("card_clicked") 
}
