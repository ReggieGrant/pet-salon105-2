let pet1 = {
    
    name: "Lexi",
    age: 1,
    gender: "female",
    service: "Basic Wash",
    breed: "French Bulldog",

};

let pet2 = {
    
    name: "Domino",
    age: 6,
    gender: "male",
    service: "Deluxe Detail",
    breed: "Great Dane",
    
};

let pet3 = {

    name: "Otis",
    age: 17,
    gender: "male",
    service: "Super Deluxe Detail",
    breed: "Chihuahua",
};

function displayRow(pet) {
  const tableBody = document.getElementById("petTableBody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${pet.name}</td>
    <td>${pet.age}</td>
    <td>${pet.gender}</td>
    <td>${pet.breed}</td>
    <td>${pet.service}</td>
    <td>${pet.type}</td>
  `;

  tableBody.appendChild(row);
}


