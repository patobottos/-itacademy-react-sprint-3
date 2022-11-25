// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Array with products and Quantity property
let cartListWithQuantity = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];
let total = 0;
let finalTotal = 0;
let counter = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array of products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            cartList.push(products[i]);
        }
    }
}

// Exercise 2
function cleanCart() {
    // Empty the content of the cart
    cartList.length = 0;
    cart.length = 0;
    document.getElementById('count_product').innerHTML = 0;

    printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += parseFloat(cartList[i].price);
  }
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    // 4.1 CREATE NEW ARRAY WITH QUANTITY PROPERTY FOR EACH ITEM
    cartListWithQuantity = [...cartList];
    cartListWithQuantity.forEach((x) => {
        x.quantity = 1;
    });

    // 4.2 VERIFY EXISTENCE, AND PUSH OR INCREMENT QUANTITY
  for (let i = 0; i < cartListWithQuantity.length; i++) {
    let indexExistentItem = cart.findIndex(item => item.id == cartListWithQuantity[i].id);
        if (indexExistentItem == -1) {
            cart.push(cartListWithQuantity[i]); 
        } else {
            cart[indexExistentItem].quantity ++;
    }
  }
}  

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    // STEP 1 - CREATE PROPERTY subtotalWithDiscount FOR ALL CART ITEMS
    cart.forEach((x) => {
        x.subtotalWithDiscount = x.price});
           
    // PROMOTION #1 - Item 1 discount ('Autumn Bliss' bouquet)
    let bouquetOneIndex = cart.findIndex(item => item.name === 'Autumn Bliss');

    if (bouquetOneIndex !== -1 && cart[bouquetOneIndex].quantity >= 3) {
        cart[bouquetOneIndex].subtotalWithDiscount = 60;
    };

    // PROMOTION #2 - Item 2 discount ('Positive Vibes' bouquet)
    let bouquetTwoIndex = cart.findIndex(item => item.name === 'Positive Vibes');
    if (bouquetTwoIndex !== -1 && cart[bouquetTwoIndex].quantity >= 4) {
        let bouquetTwoSpecialPrice = parseFloat(((cart[bouquetTwoIndex].price)* 2/3).toFixed(2));
        cart[bouquetTwoIndex].subtotalWithDiscount = bouquetTwoSpecialPrice;
    }
};

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartListPrint = document.getElementById('cart_list');
    let newItem, newItemName, newItemPrice, newItemQty, newItemTotal;

    cartListPrint.innerHTML = "";
    finalTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        newItem = cart[i];
        newItemName = cart[i].name[0].toUpperCase() + cart[i].name.substring(1);
        newItemPrice = newItem.subtotalWithDiscount;
        newItemQty = newItem.quantity;
        newItemTotal = parseFloat(newItemPrice) * parseFloat(newItemQty);
        finalTotal += newItemTotal;     

        cartListPrint.innerHTML += 
                                "<tr>" +
						            "<th scope='row'>"+ newItemName +"</th>" +
						            "<td>$"+ newItemPrice + "</td>" +
						            "<td>" + newItemQty + "</td>" +
            						"<td>$" + newItemTotal + "</td>" +
						        "</tr>";
    }
    document.getElementById('total_price').innerHTML = finalTotal;
}


// ** Nivell II **
// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    counter = 0;

    // We look for the index of product in the product array
    let selectedProductIndex = products.findIndex(x => x.id === id);
    let selectedProduct = products[selectedProductIndex];

    // We look for the index of selected product in cart array 
    let cartItemIndex = cart.findIndex(item => item.id === selectedProduct.id);

    // If we do not have it, we add quantity = 1, and we push it into cart array
    if (cartItemIndex == -1) {
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);

    // If we already have it, we add 1 to its quantity
    } else {
        cart[cartItemIndex].quantity++;
    }

    // We update the item counter in cart icon of the menu
    for (let i = 0; i < cart.length; i++) {
        counter += cart[i].quantity;
    }
    document.getElementById('count_product').innerHTML = counter;

    // We update promotions
    applyPromotionsCart();
}

// Exercise 9
function removeFromCart(id) {

    let counter = 0;

    // We find the index of the item to remove
    let indexItemtoRemove = cart.findIndex(item => item.id === id);
    
    // We delete item from cart, in case we have one or more
    if (indexItemtoRemove == -1) {
        alert("You don't have any item of this kind yet");
    } else {
        if (cart[indexItemtoRemove].quantity > 1) {
            cart[indexItemtoRemove].quantity --;
        } else {
            cart.splice(indexItemtoRemove,1);
            console.log('cart luego del slice ',cart);
        }
    }

    //We update the item counter in cart icon of the menu
    for (let i = 0; i < cart.length; i++) {
        counter += cart[i].quantity;
    }
    document.getElementById('count_product').innerHTML = counter;

    // We update promotions
    applyPromotionsCart();
}

function open_modal() {
	console.log("Open Modal");
	printCart();
}
