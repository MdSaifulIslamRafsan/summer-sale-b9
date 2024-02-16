const cards = document.getElementsByClassName('card');
// console.log(card);
const titleContainer = document.getElementById('title-container');

for (const card of cards) {
    card.addEventListener('click', function(){
        // get element
        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('span').innerText;
        const priceNumber = parseFloat(price.split('').slice(1).join(''));

        // add to card title
        const p = document.createElement('li');
        p.innerText =  title; 
        titleContainer.appendChild(p);

        const totalPrice = getElementByIdPriceValue('totalPrice');    
        setElementId('totalPrice' , totalPrice + priceNumber);
        

        
    });
}

titleContainer.addEventListener('click', function(event){
    const element = event.target;
    this.removeChild(element);
});

function setElementId(elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementByIdPriceValue(ElementId){
    const element = document.getElementById(ElementId).innerText;
    const elementNumber = parseFloat(element);
    return elementNumber;  
}

document.getElementById('apply-btn').addEventListener('click', function(){
    const totalPrice = getElementByIdPriceValue('totalPrice');
    const inputField = document.getElementById('input-field').value;
    const inputSplit = inputField.split(' ').join('').toUpperCase();

    if (totalPrice > 200) {
        if (inputSplit === 'SELL200') {
            const discount = totalPrice * 20 / 100;
            const  currentPrice = totalPrice - discount;
            setElementId('discountPrice' , discount);
            setElementId('total' , currentPrice);
        }else{
            alert('please check this promo code and try again');
        }
    }else{
        alert('Please try to use promo code after purchase above 200 tk');
    }
    document.getElementById('input-field').value = '';
});
