document.getElementById("temperature-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const temp = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const errorDiv = document.getElementById("error-message");
    const resultDiv = document.getElementById("result");
    const historyTableBody = document.getElementById("history-table-body");

    // Clear previous results and errors
    errorDiv.textContent = "";
    resultDiv.style.display = "none";

    if (isNaN(temp)) {
        errorDiv.textContent = "Please enter a valid temperature value.";
        return;
    }

    if (!unit) {
        errorDiv.textContent = "Please select the input unit.";
        return;
    }

    // Conversion logic
    let celsius, fahrenheit, kelvin;
    switch (unit) {
        case "C":
            celsius = temp;
            fahrenheit = (temp * 9) / 5 + 32;
            kelvin = temp + 273.15;
            break;
        case "F":
            celsius = ((temp - 32) * 5) / 9;
            fahrenheit = temp;
            kelvin = celsius + 273.15;
            break;
        case "K":
            if (temp < 0) {
                errorDiv.textContent = "Temperature in Kelvin cannot be negative.";
                return;
            }
            celsius = temp - 273.15;
            fahrenheit = (celsius * 9) / 5 + 32;
            kelvin = temp;
            break;
        default:
            errorDiv.textContent = "Invalid unit selected.";
            return;
    }

    // Display results
    document.getElementById("result-celsius").textContent = celsius.toFixed(2) + " °C";
    document.getElementById("result-fahrenheit").textContent = fahrenheit.toFixed(2) + " °F";
    document.getElementById("result-kelvin").textContent = kelvin.toFixed(2) + " K";
    resultDiv.style.display = "block";

    // Add to history
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${temp}</td>
      <td>${unit === "C" ? "Celsius" : unit === "F" ? "Fahrenheit" : "Kelvin"}</td>
      <td>${celsius.toFixed(2)} °C</td>
      <td>${fahrenheit.toFixed(2)} °F</td>
      <td>${kelvin.toFixed(2)} K</td>
    `;
    historyTableBody.appendChild(newRow);
});

// Reset button functionality
document.getElementById("reset-button").addEventListener("click", function () {
    document.getElementById("temperature").value = ""; // Reset input
    document.getElementById("unit").value = ""; // Reset unit selection
    document.getElementById("result").style.display = "none"; // Hide result section
    document.getElementById("error-message").textContent = ""; // Clear errors
});

// Clear history functionality
document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("history-table-body").innerHTML = ""; // Clear history table
});
