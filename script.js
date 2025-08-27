const methodSelect = document.getElementById("os-methods");
const btn = document.getElementById("fetch-info");
let selectedMethod = methodSelect.value; // Default value

methodSelect.addEventListener("change", () => {
  selectedMethod = methodSelect.value;
});

function fetchOSInfo() {
  fetch(`https://node-system-info-85.onrender.com/api/os/${selectedMerhod}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("os-info").textContent =
        `OS ${selectedMethod} = ${data.methodData}`;
    })
    .catch(err => {
      console.error("Error fetching OS info:", err);
      document.getElementById("os-info").textContent = "Failed to load system info.";
    });
}

btn.addEventListener("click", fetchOSInfo);
