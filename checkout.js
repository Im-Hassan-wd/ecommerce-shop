

function checkout(e){
    const checkoutList = document.querySelector(".checkout-list");

    if(e.target.classList.contains("fas")){
        let boardImage = e.target.parentElement.previousElementSibling.src;
        let boardName = e.target.parentElement.nextElementSibling;
        let boardPrice = boardName.nextElementSibling;

        //adding elements to checkout
        const checkoutDiv = document.createElement("div");
        checkoutList.append(checkoutDiv);
        //
        const image = document.createElement("img");
        image.src = boardImage.src;
        checkoutDiv.append(image);
        //details div
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("details");
        checkoutDiv.append(detailsDiv);
        //item div
        const itemDiv = document.createElement("div");
        detailsDiv.append(itemDiv);
        // name 
        const itemName = document.createElement("h4");
        itemName.classList.add("item-name");
        itemName.textContent = boardName.textContent;
        itemDiv.append(itemName);
        //price div
        const priceDiv = document.createElement("div");
        priceDiv.classList.add("item-price");
        itemDiv.append(priceDiv);
        //new price
        const newPrice = document.createElement("p");
        newPrice.classList.add("new-price");
        newPrice.classList.add("price");
        newPrice.textContent = boardPrice.textContent;
        priceDiv.append(newPrice);
        //old price
        const oldPrice = document.createElement("p");
        oldPrice.classList.add("old-price");
        oldPrice.classList.add("price");
        oldPrice.textContent = "$78.99";
        priceDiv.append(oldPrice);
    }
}