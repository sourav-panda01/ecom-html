let addcartBtn = document.getElementsByClassName('addcart')

for(let i=0;i<addcartBtn.length;i++) {
    let btn = addcartBtn[i]
    btn.addEventListener('click',addToCart)
}

function addToCart(event) {
    let button = event.target
    let itemTobeAdded = button.parentElement.parentElement
    let title = itemTobeAdded.getElementsByClassName('title')[0].innerText
    let image = itemTobeAdded.getElementsByClassName('images')[0].src
    let price = itemTobeAdded.getElementsByClassName('amount')[0].innerText
   addingItem(title,image,price)
   
}

function addingItem(title,image,price) {
    let cartRow = document.createElement('div')
    cartRow.classList='cart-row'
    let cartItems = document.getElementsByClassName('cart-items')[0]

    let content =  ` <div class="cart-item cart-column">
    <img class="cart-item-image" src=${image} width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>`
cartRow.innerHTML = content
cartItems.append(cartRow)
alert('Product Successfully Added')
}



let open = document.getElementsByClassName("seecart");
const close = document.getElementById("cl");
const container = document.getElementById("container");

for(let i=0;i<open.length;i++) {
    let btn=open[i]
    btn.addEventListener("click", showcart)
    
}

function showcart() {
    container.classList.add("active");
}

close.addEventListener("click", () => {
    container.classList.remove("active");
});
