<!-- ===================== SCRIPT.JS ===================== -->
let products = [
  {id:1, name:"Shoes", price:1000, image:"shoes.jpg", category:"clothing"},
  {id:2, name:"Shirt", price:500, image:"shirt.jpg", category:"clothing"},
  {id:3, name:"Watch", price:2000, image:"watch.jpg", category:"clothing"},

  {id:4, name:"Laptop", price:50000, image:"laptop.jpg", category:"electronics"},
  {id:5, name:"Smartphone", price:20000, image:"phone.jpg", category:"electronics"},
  {id:6, name:"Headphones", price:2000, image:"headphones.jpg", category:"electronics"}
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(list) {
  let grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  list.forEach(p => {
    grid.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>price: ₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>`;
  });
}

function addToCart(id) {
  let item = products.find(p => p.id === id);

  let existing = cart.find(p => p.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    item.qty = 1;
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
function searchProduct() {
  let val = document.getElementById("search").value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(val));
  displayProducts(filtered);
}

displayProducts(products);
function filterCategory(cat) {
  if (cat === "all") {
    displayProducts(products);
  } else {
    let filtered = products.filter(p => p.category === cat);
    displayProducts(filtered);
  }
}
function subscribe() {
  let email = document.getElementById("email").value;

  if (email === "") {
    alert("Enter email first");
    return;
  }

  let emails = JSON.parse(localStorage.getItem("emails")) || [];
  emails.push(email);
  localStorage.setItem("emails", JSON.stringify(emails));

  alert("Subscribed successfully!");
}
