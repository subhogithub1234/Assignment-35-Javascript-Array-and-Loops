// 1. In the following shopping cart add, remove, edit itemsconst shoppingCart = ['Milk',
// 'Coffee', 'Tea', 'Honey']

let shoppingCart = ['Milk','Coffee', 'Tea', 'Honey'];

/* a. add 'Meat' in the beginning of your shopping cart if it has not been already
added */

console.log(shoppingCart.unshift("Meat"))
console.log(shoppingCart);

// ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']

/* b. add Sugar at the end of you shopping cart if it has not been already added */

shoppingCart.push("Sugar");
console.log(shoppingCart);

// ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']

/* c. remove 'Honey' if you are allergic to honey */

shoppingCart.splice(4,1);
console.log(shoppingCart);

// ['Meat', 'Milk', 'Coffee', 'Tea', 'Sugar']

/* d. modify Tea to 'Green Tea' */

shoppingCart.splice(3,1,"Green Tea");
console.log(shoppingCart);

// ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']