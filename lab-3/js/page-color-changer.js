// Declare and initialize constants for the input slider elements and the page body
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const pageBody = document.body;

// Function to update the background color
function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    pageBody.style.backgroundColor = rgbColor;
}

// Event listeners for the range sliders
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);