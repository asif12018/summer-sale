
let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');
for(let index = 0; index < cards.length; index++){
    const card = cards[index];
    card.addEventListener('click',function(){
        
        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('span').innerText.split(' ');
        // appending title in the title container
        const titleContainer = document.getElementById('title-container');
        
        const p = document.createElement('p');
        p.innerText =titleCount +'. '+title;
        titleContainer.appendChild(p);
        titleCount++;
        // calculate price
        totalPrice += parseFloat(price[1]);
        document.getElementById('totalPrice').innerText = totalPrice;
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click',function(){
    //get the value from input
    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    if(totalPrice >= 200){
        if(couponCode === 'SELL200'){
        // discount calculation
        const disCountElement = document.getElementById('discountPrice');
        const disCountAmount = totalPrice * 0.2;
        disCountElement.innerText = Math.round(disCountAmount);

        // rest total calculation
        const restTotal = document.getElementById('total');
        restTotal.innerText = totalPrice - disCountAmount;
        
        }else{
            alert('invalid coupon code');
        }

    }else{
        alert('buy more')
    }
})
