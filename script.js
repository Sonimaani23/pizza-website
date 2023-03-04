// Smooth scroll functionality
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - 100,
      },
      500,
      'linear'
    );
  });
  
  // Navbar background color change on scroll
  $(window).on('scroll', function() {
    if ($(window).scrollTop()) {
      $('nav').addClass('scroll');
    } else {
      $('nav').removeClass('scroll');
    }
  });
// Get the Order Now button
// const orderBtn = document.querySelector('#order-btn');

// // Add a click event listener to the button
// orderBtn.addEventListener('click', () => {
//   // Create a message element
//   const messageEl = document.createElement('div');
//   messageEl.classList.add('message');

//   // Add the message text
//   messageEl.innerText = 'Your order has been placed!';

//   // Append the message element to the body
//   document.body.appendChild(messageEl);

//   // Remove the message after 3 seconds
//   setTimeout(() => {
//     messageEl.remove();
//   }, 3000);
// });
//   // Get the Add to Cart buttons
// const addToCartBtns = document.querySelectorAll('.add-to-cart');

// // Add a click event listener to each button
// addToCartBtns.forEach(btn => {
//   btn.addEventListener('click', addToCart);
// });

// // Cart items array
// let cartItems = [];

// // Add to Cart function
// function addToCart(event) {
//   // Get the clicked button's data-id attribute
//   const id = event.target.getAttribute('data-id');

//   // Check if the item is already in the cart
//   const itemIndex = cartItems.findIndex(item => item.id === id);

//   if (itemIndex === -1) {
//     // If the item is not in the cart, add it
//     const item = { id: id, quantity: 1 };
//     cartItems.push(item);
//   } else {
//     // If the item is already in the cart, increase its quantity
//     cartItems[itemIndex].quantity++;
//   }

//   // Update the cart UI
//   updateCartUI();
// }

// // Update the cart UI function
// function updateCartUI() {
//   // Get the cart items ul element
//   const cartItemsEl = document.querySelector('#cart-items');

//   // Clear the cart items ul element
//   cartItemsEl.innerHTML = '';

//   // Loop through the cart items and add them to the UI
//   cartItems.forEach(item => {
//     // Get the pizza item based on its id
//     const pizzaItem = document.querySelector(`.menu-item button[data-id="${item.id}"]`).parentNode;

//     // Create a cart item li element
//     const cartItemEl = document.createElement('li');
//     cartItemEl.innerText = `${pizzaItem.querySelector('h3').innerText} x ${item.quantity}`;
//     cartItemsEl.appendChild(cartItemEl);
//   });
// }

// // Get the Order Now button


// // Add a click event listener to the button
// orderBtn.addEventListener('click', () => {
//   // Check if there are any items in the cart
//   if (cartItems.length === 0) {
//     alert('Your cart is empty!');
//     return;
//   }

//   // Display a message that the order has been placed
//   alert('Your order has been placed!');

//   // Scroll smoothly to the Order Now button
//   const orderNowSection = document.querySelector('#order-now');
//   orderNowSection.scrollIntoView({ behavior: 'smooth' });
// });
// Get the Add to Cart buttons
const addToCartBtns = document.querySelectorAll('.add-to-cart');

// Add a click event listener to each button
addToCartBtns.forEach(btn => {
  btn.addEventListener('click', addToCart);
});

// Cart items array
let cartItems = [];

// Add to Cart function
function addToCart(event) {
  // Get the clicked button's data-id attribute
  const id = event.target.getAttribute('data-id');

  // Check if the item is already in the cart
  const itemIndex = cartItems.findIndex(item => item.id === id);

  if (itemIndex === -1) {
    // If the item is not in the cart, add it
    const item = { id: id, quantity: 1 };
    cartItems.push(item);
  } else {
    // If the item is already in the cart, increase its quantity
    cartItems[itemIndex].quantity++;
  }

  // Update the cart UI
  updateCartUI();
}

// Update the cart UI function
function updateCartUI() {
  // Get the cart items ul element
  const cartItemsEl = document.querySelector('#cart-items');

  // Clear the cart items ul element
  cartItemsEl.innerHTML = '';

  // Loop through the cart items and add them to the UI
  cartItems.forEach(item => {
    // Get the pizza item based on its id
    const pizzaItem = document.querySelector(`.menu-item button[data-id="${item.id}"]`).parentNode;

    // Create a cart item li element
    const cartItemEl = document.createElement('li');
    cartItemEl.innerText = `${pizzaItem.querySelector('h3').innerText} x ${item.quantity}`;
    cartItemsEl.appendChild(cartItemEl);
  });
}

// Get the Order Now button
const orderBtn = document.querySelector('#order-btn');

// Add a click event listener to the button
orderBtn.addEventListener('click', () => {
  // Check if there are any items in the cart
  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Display a message that the order has been placed
  alert('Your order has been placed!');

  // Scroll smoothly to the Order Now button
  const orderNowSection = document.querySelector('#order-now');
  orderNowSection.scrollIntoView({ behavior: 'smooth' });
});
