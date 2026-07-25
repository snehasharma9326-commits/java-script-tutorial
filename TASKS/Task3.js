const inventory = {
  Electronics: [
    { name: "Laptop", price: 800, quantity: 5 },
    { name: "Phone", price: 500, quantity: 8 }
  ],

  Grocery: [
    { name: "Rice", price: 40, quantity: 100 },
    { name: "Oil", price: 150, quantity: 20 }
  ]
};

let totalValue = 0;
let highestPriceItem = null;

for (let category in inventory) {
  for (let item of inventory[category]) {

    totalValue += item.price * item.quantity;

    if (
      highestPriceItem === null ||
      item.price > highestPriceItem.price
    ) {
      highestPriceItem = item;
    }
  }
}

console.log("Total Inventory Value:", totalValue);
console.log("Highest Price Item:", highestPriceItem);