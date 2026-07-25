const students = {
  Rahul: [85, 90, 88],
  Priya: [75, 80, 70],
  Aman: [95, 98, 92],

  getGrade(avg) {
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 60) return "C";
    else return "D";
  }
};

const summary = [];

for (let key in students) {
  if (Array.isArray(students[key])) {
    let marks = students[key];

    let sum = 0;
    for (let m of marks) {
      sum += m;
    }

    let avg = sum / marks.length;

    summary.push({
      name: key,
      average: avg,
      grade: students.getGrade(avg)
    });
  }
}

console.log(summary);