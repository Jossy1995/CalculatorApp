let output = document.querySelector("#display");
let buttons = document.querySelectorAll(".digit, .operator"); // Including operators now

// Handle button clicks for digits and operators
for (let button of buttons) {
    button.addEventListener("click", function () {
        const val = this.getAttribute("data-value");
        
        // If the button pressed is a number or operator
        if (val !== null) {
            // Handle if the display is 0 (reset it to the new value)
            if (output.value === "0" && !["+", "-", "*", "/"].includes(val)) {
                output.value = val;
            } else {
                // If it's an operator and the last input was an operator, replace it
                const lastChar = output.value.slice(-1);
                if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(val)) {
                    output.value = output.value.slice(0, -1) + val;
                } else {
                    output.value += val;
                }
            }
        }
    });
}

// Clear button functionality
document.querySelector("#clear").addEventListener("click", function () {
    output.value = "0";  // Resets the display to "0"
});

// Equal button functionality
document.querySelector("#equal").addEventListener("click", function () {
    try {
        output.value = eval(output.value); // Evaluates the expression entered in the display
    } catch (e) {
        output.value = "Error";  // Shows "Error" if the expression is invalid
    }
});