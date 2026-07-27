const company = {
  IT: [
    {
      name: "Rahul",
      salary: 50000,
      bonus() {
        return 5000;
      }
    },
    {
      name: "Aman",
      salary: 60000,
      bonus() {
        return 6000;
      }
    }
  ],

  HR: [
    {
      name: "Priya",
      salary: 45000,
      bonus() {
        return 4000;
      }
    },
    {
      name: "Neha",
      salary: 40000,
      bonus() {
        return 3500;
      }
    }
  ]
};

let highestDepartment = "";
let highestCost = 0;

for (let dept in company) {

  let totalCost = 0;

  for (let emp of company[dept]) {

    totalCost += emp.salary + emp.bonus();
  }

  console.log(dept, "Total Cost:", totalCost);

  if (totalCost > highestCost) {
    highestCost = totalCost;
    highestDepartment = dept;
  }
}

console.log("Department with Highest Cost:", highestDepartment);
console.log("Highest Cost:", highestCost);