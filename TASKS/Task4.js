const config = {
  appName: "inventory system",
  darkMode: true,
  notifications: false,
  version: "v1.0",

  start() {
    return "Application Started";
  }
};

let output = [];

for (let key in config) {
  let value = config[key];

  if (typeof value === "function") {
    output.push(value());
  }
  else if (typeof value === "boolean") {
    if (value) {
      console.log("True Key:", key);
    }
  }
  else if (typeof value === "string") {
    output.push(value.toUpperCase());
  }
}

console.log(output);