const users = {
  Rahul: {
    profile: { age: 22 },
    orders: [500, 1000, 1500],
    totalSpent() {
      let sum = 0;
      for (let order of this.orders) {
        sum += order;
      }
      return sum;
    }
  },

  Priya: {
    profile: { age: 21 },
    orders: [800, 1200],
    totalSpent() {
      let sum = 0;
      for (let order of this.orders) {
        sum += order;
      }
      return sum;
    }
  },

  Aman: {
    profile: { age: 23 },
    orders: [2000, 500, 1000],
    totalSpent() {
      let sum = 0;
      for (let order of this.orders) {
        sum += order;
      }
      return sum;
    }
  }
};

let highestUser = "";
let highestAmount = 0;

for (let name in users) {
  let spent = users[name].totalSpent();

  console.log(name, "spent:", spent);

  if (spent > highestAmount) {
    highestAmount = spent;
    highestUser = name;
  }
}

console.log("Highest Spender:", highestUser);
console.log("Amount:", highestAmount);