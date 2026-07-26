const logs = {
  error: ["File not found", "Server crashed"],
  warning: ["Low memory", "Battery low", "High CPU usage"],
  info: ["User logged in", "Data updated"],

  getSeverity(type) {
    if (type === "error") return 3;
    if (type === "warning") return 2;
    if (type === "info") return 1;
    return 0;
  }
};

let totalLogs = 0;
let highestSeverity = "";
let maxSeverity = 0;

for (let key in logs) {

  if (Array.isArray(logs[key])) {
    totalLogs += logs[key].length;

    let severity = logs.getSeverity(key);

    if (severity > maxSeverity) {
      maxSeverity = severity;
      highestSeverity = key;
    }
  }
}

console.log("Total Logs:", totalLogs);
console.log("Highest Severity:", highestSeverity);