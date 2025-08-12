// Global Varabiles
const petRegistrationForm = document.getElementById("petRegistrationForm");

let pet1 = {
    
    name: "Lexi",
    age: 1,
    gender: "female",
    service: "Basic Wash",
    breed: "French Bulldog"

}

let pet2 = {
    
    name: "Domino",
    age: 6,
    gender: "male",
    service: "Deluxe Detail",
    breed: "Great Dane"

    
}

let pet3 = {

    name: "Otis",
    age: 17,
    gender: "male",
    service: "Super Deluxe Detail",
    breed: "Chihuahua"
};


function Pet(age, name, breed, gender, service){
    this.age = age,
    this.name = name,
    this.breed = breed,
    this.gender = gender,
    this.service = service
}

const pet8 = new Pet("Lala", 3, "cat", "Female", "Daycare");
console.log(pet2.breed);

// Interpolation
console.log(`The name of the pet2 is ${pet2.name} and the name is ${pet2.age}`);


function registerPet(event){

    event.preventDefault();

    console.log("Register pet Function");

    // get the values typed in the form
    const name = petRegistrationForm.elements["petName"].value;
    const age = petRegistrationForm.elements["petAge"].value;
    const gender = petRegistrationForm.elements["petGender"].value;
    const breed = petRegistrationForm.elements["petBreed"].value;
    const service = petRegistrationForm.elements["petService"].value;

    // create a new pet with the object
    const newPet = new Pet(name, age, breed, gender, service);

    // Display the pet in browser
    displayRow(newPet);

    petRegistrationForm.rest();



}

function displayRow(pet){
    const table = document.getElementById("petTable");
    const tableBody = table.tBodies[0];

    // Create a new row
    const newRow = document.createElement["tr"];

    // Create the cells (I will only include two, you should include the rest)
    const name = document.createElement("td");
    const age = document.createElement("td");

    // Assign the information of the pet from the objrct
    name.textContent = pet.name;
    age.textContent = pet.age;

    // Append the created cells (name and age) to the row
    newRow.appendChild(name);
    newRow.appendChild(age);

    //  Append the created row to the table body
    tableBody.appendChild(newRow);

}