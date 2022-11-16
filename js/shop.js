// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Array with products and Quantity property
var cartListWithQuantity = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;
var finalTotal = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array of products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            cartList.push(products[i]);
        }
    }
    console.log(cartList);
}

// Exercise 2
function cleanCart() {
    // Empty the content of the cart
    cartList = [];
    cart = [];
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
  console.log('carro compra sin repetidos: ',cart);
}  

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    // STEP 1 - CREATE PROPERTY subtotalWithDiscount FOR ALL CART ITEMS
    cart.forEach((x) => {
        x.subtotalWithDiscount = x.price});

    // PROMOTION #1 - oil discount
    let oilItemIndex = cart.findIndex(item => item.name === 'cooking oil');
    if (oilItemIndex !== -1 && cart[oilItemIndex].quantity >= 3) {
        cart[oilItemIndex].subtotalWithDiscount = 10;
    };

    // PROMOTION #2 - bakery discount
    let bakeryItemIndex = cart.findIndex(item => item.name === 'Instant cupcake mixture');
    if (bakeryItemIndex !== -1 && cart[bakeryItemIndex].quantity >= 10) {
        let bakerySpecialPrice = parseFloat(((cart[bakeryItemIndex].price)* 2/3).toFixed(2));
        cart[bakeryItemIndex].subtotalWithDiscount = bakerySpecialPrice;
    }
};

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    var cartListPrint = document.getElementById('cart_list');
    let newItem, newItemName, newItemPrice, newItemQty, newItemTotal;

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

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}