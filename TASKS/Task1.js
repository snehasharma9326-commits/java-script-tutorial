const data = {
  a: 10,
  b: [5, 10, 15],
  c: () => 20,
  d: 30,
  e: [1, 2, 3, 4]
};

let total = 0;

for (let key in data) {
  let value = data[key];

  if (typeof value === "number") {
    total += value;
  } else if (Array.isArray(value)) {
    for (let num of value) {
      total += num;
    }
  } else if (typeof value === "function") {
    total += value();
  }
}

console.log("Total Sum:", total);