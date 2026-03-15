function order(product){
window.open ("https://wa.me/8778787450?text=I want to order " + product);
}

function searchProduct(){

let input = document.getElementById("searchBox").value.toLowerCase();
let products = document.querySelectorAll(".product-card");

products.forEach(function(card){

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}

