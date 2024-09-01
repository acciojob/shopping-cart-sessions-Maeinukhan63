// Sample products array
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render the product list
function renderProductList() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.addEventListener('click', () => addToCart(product));
    
    li.appendChild(addToCartBtn);
    productList.appendChild(li);
  });
}

// Function to add a product to the cart
function addToCart(product) {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push(product); // Add the selected product to the cart
  sessionStorage.setItem('cart', JSON.stringify(cart)); // Update session storage
  renderCart();
}

// Function to render the shopping cart
function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // Clear previous cart items

  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    cartList.appendChild(li);
  });
}

// Function to clear the cart
function clearCart() {
  sessionStorage.removeItem('cart'); // Remove the cart from session storage
  renderCart(); // Clear the cart display
}

// Attach clear cart button event listener
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

// Initial render of products and cart
renderProductList();
renderCart();
