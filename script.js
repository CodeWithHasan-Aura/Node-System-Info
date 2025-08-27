const methodSelect = document.getElementById("os-methods");
const btn = document.getElementById("fetch-info");
const osInfo = document.getElementById("os-info");

let selectedMethod = methodSelect.value; // Default value

methodSelect.addEventListener("change", () => {
  selectedMethod = methodSelect.value;
});

function fetchOSInfo() {
  fetch(`https://node-system-info-85.onrender.com/api/os/${selectedMethod}`)
    .then(response => response.json())
    .then(data => {
      osInfo.textContent = `OS ${selectedMethod} = ${data.methodData}`;
      console.log("Fetched Data:", data);
    })
    .catch(err => {
      console.error("Error fetching OS info:", err);
      osInfo.textContent = "Failed to load system info.";
    });
}

btn.addEventListener("click", () => {
  osInfo.textContent = "Wait a moment...";

  setTimeout(() => {
    osInfo.textContent = "Fetching data...";

    setTimeout(() => {
      osInfo.textContent = "Almost there...";

      setTimeout(() => {
        fetchOSInfo();
      }, 1000); // Call API after 1s
    }, 2000); // "Almost there.." after 1s
  }, 3000); // "Fetching data.." after 1s
});
