/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = 'Silly Sammy';
let age = 25;  // Default starting age
let isSuperhero = false; 
let specialPowers = ['invisibility', 'super strength'];  
let favoriteFood = 'spaghetti'; 


// Function to generate a random character description
function updateCharacterDescription() {
    let description = `Meet ${characterName}, a ${age}-year-old ${isSuperhero ? 'superhero' : 'regular person'} who loves ${favoriteFood} and can ${specialPowers.join(' and ')}.`;
    document.getElementById('characterDescription').innerText = description;
}

// Functions to update character's age
function increaseAge() {
    age++;
    updateCharacterDescription();
}

function decreaseAge() {
    age++;
    updateCharacterDescription();
}


// Random age function
function generateRandomAge() {
    age = Math.floor(Math.random() * 100) + 1;  // Generates a random age between 1 and 100
    updateCharacterDescription();
}
// Function to update character's favorite food
function updateFood(newFood) {
    favoriteFood = newFood;
    updateCharacterDescription(); // Update the description to reflect the new favorite food
}


// Function to update character's name
function updateName(newName) {
    characterName = newName;
    updateCharacterDescription(); // Update the description to reflect the new name
}



// Add event listeners for buttons and inputs using querySelector
document.addEventListener('DOMContentLoaded', function() {
    // Set up button to generate a random age and update the description
    document.getElementById('generateButton').addEventListener('click', generateRandomAge);

    // Set up buttons to increase and decrease the age
    document.getElementById('increaseAgeButton').addEventListener('click', increaseAge);
    document.getElementById('decreaseAgeButton').addEventListener('click', decreaseAge);

    // Set up input fields to update name and favorite food
    document.getElementById('nameInput').addEventListener('change', (event) => updateName(event.target.value));
    document.getElementById('foodInput').addEventListener('change', (event) => updateFood(event.target.value));
});