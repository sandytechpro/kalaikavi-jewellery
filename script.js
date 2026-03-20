// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });
}

// Order via WhatsApp
function order(product) {
  window.open("https://wa.me/8778787450?text=I want to order " + product);
}

// Search Product
function searchProduct() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let products = document.querySelectorAll(".product-card");

  products.forEach(function (card) {
    let title = card.querySelector("h3").innerText.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
