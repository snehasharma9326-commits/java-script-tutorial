const data = {
  age: 20,
  city: "Bhopal",
  marks: [80, 90, 70],
  greet: function () {
    return "Hello World";
  },
  salary: 5000
};

let transformed = {};

for (let key in data) {

  let value = data[key];

  if (typeof value === "number") {
    transformed[key] = value * value;
  }

  else if (typeof value === "string") {
    transformed[key] = value.split("").reverse().join("");
  }

  else if (Array.isArray(value)) {
    transformed[key] = value.length;
  }

  else if (typeof value === "function") {
    transformed[key] = value();
  }
}

console.log(transformed);