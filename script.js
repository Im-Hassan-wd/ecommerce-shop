const boards = document.querySelector(".product");
const boardImages = document.querySelectorAll(".skate-item-description");
const homeCart = document.querySelector(".home-cart");
const homeCartItem = document.querySelector(".home-cart-item");
const cartItemDiv = document.querySelector(".cart-item-div");
const cartCount = document.querySelector(".cart-count");
const clearBtn = document.querySelector(".clear-btn");
//get cartCount
// cartCount.innerText = listItem.length;
// console.log(listItem)

// even listeners
boards.addEventListener("click", (e) => {
    addTocart(e);
});
homeCart.addEventListener("click", showHomeCartitem);

boardImages.forEach(image => {
    image.addEventListener("mouseenter", (e) => {
        showDesciption(e);
    });
    image.addEventListener("mouseleave", (e) => {
        hideDesciption(e);
    });
});
homeCartItem.addEventListener("click", (e) => {
    removeItem(e);
});
clearBtn.addEventListener("click", (e) => {
    clearCart(e);
})



//functions
function addTocart(e) {
const homeCartItemList = document.querySelector(".cart-item-list");

    if(e.target.classList.contains("fas")){
        let listItem = document.querySelectorAll(".cart-item");
        cartCount.innerText = listItem.length +1;
        let boardImage = e.target.parentElement.previousElementSibling.src;
        let boardName = e.target.parentElement.nextElementSibling;
        let boardPrice = boardName.nextElementSibling;

        // items
        homeCartItemList.prepend(cartItemDiv);
        //item div
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        cartItemDiv.append(itemDiv);

        //item image
        const img = document.createElement("img");
        img.src = boardImage;
        itemDiv.append(img);

        //desc div
        const descDiv = document.createElement("div");
        descDiv.classList.add("desc");
        itemDiv.append(descDiv);

        //item name
        const name = document.createElement("h3");
        name.classList.add("item-name");
        name.textContent = boardName.textContent;
        descDiv.append(name);
        //item price
        const price = document.createElement("h4")
        price.classList.add("new-price");
        price.textContent = "$23";
        price.textContent = boardPrice.textContent;
        descDiv.append(price);
        //delete button
        const trash = document.createElement("i");
        trash.classList.add("fas");
        trash.classList.add("fa-trash");
        trash.classList.add("trash");
        descDiv.append(trash);
    }
}

function showHomeCartitem(){
    homeCartItem.classList.toggle("active");
}

function showDesciption(e){
    let board = e.target.children[0];
    let cart = e.target.children[1];
    let name = e.target.children[2];
    let price = e.target.children[3];
    board.classList.add("opa-board");
    cart.classList.add("active");
    name.classList.add("active");
    price.classList.add("active");
    
}

function hideDesciption(e){
    let board = e.target.children[0];
    let cart = e.target.children[1];
    let name = e.target.children[2];
    let price = e.target.children[3];
    board.classList.remove("opa-board");
    cart.classList.remove("active");
    name.classList.remove("active");
    price.classList.remove("active");
}

function removeItem(e){
    if(e.target.classList.contains("trash")){
        let item = e.target.parentElement.parentElement;
        item.remove();
    }
}

// function clearCart(e){
//     if(e.target.classList.contains("clear-btn")){
//         let item = e.target.previousElementSibling.previousElementSibling;
//         item.remove();
//     }
// }