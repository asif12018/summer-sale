

const cards = document.querySelectorAll('.card');
for(let index = 0; index < cards.length; index++){
    const card = cards[index];
    card.addEventListener('click',function(){
        
        const title = card.querySelector('h3').innerText;
        
        
    })
}
