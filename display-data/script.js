
let genres = [
  {name: "Action", amount: 5},
  {name: "Comedy", amount: 4},
  {name: "Crime", amount: 4},
  {name: "Drama", amount: 26},
  {name: "Musical", amount: 3},
  {name: "Romance", amount: 13},
  {name: "Thriller", amount: 4},
  {name: "War", amount: 5}
  ];

  // One: Use the amount to indicate how big each circle is

// First show all the flowers and create divs for each of them
let container = document.querySelector(".movies");
// create a counter variable that will give us each flowers number in the array
let i = 0;

function displayGenres(genre) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let genreDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("genre");
  // adds a specific class to each new div
  newItem.classList.add("genre" + [i]);
  // places the flower name and amount to the div
  genreDiv.innerHTML = genre.name + " – " + genre.amount;
  // sets height of flower to the amount. try changing height to width, or padding
  genreDiv.style.padding = genre.amount + "vw";
  console.log(genre);
}
// loops through the flowers and runs the displayFlowers function for each one
genres.forEach(displayGenres);