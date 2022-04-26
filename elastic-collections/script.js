// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

let container = document.querySelector(".container");

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyxStF6a7ua6nohh" }).base(
  "apps9dVh6IY4JNB6Z"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("moviebase")
  .select({}).eachPage(gotPageOfMovies, gotAllMovies);

// an empty array to hold our data
var movies = [];

// callback function that receives our data
function gotPageOfMovies(records, fetchNextPage) {
  console.log("gotPageOfMovies()");
  // add the records from this page to our array
  movies.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllMovies(err) {
  console.log("gotAllMovies()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading movies");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogMovies();
  showMovies();
}

// just loop through the books and console.log them
function consoleLogMovies() {
  console.log("consoleLogMovies()");
  movies.forEach((movie) => {
    console.log("Movie:", movie);
  });
}

// look through our airtable data, create elements
function showMovies() {
  console.log("showMovies()");
  movies.forEach((movie) => {
let movieTextHolder = document.createElement("div");
movieTextHolder.classList.add("movie-title");
movieTextHolder.innerText = movie.fields.movie_title;
container.appendChild(movieTextHolder);

let imageHolder = document.createElement("img");
imageHolder.src = movie.fields.thumbnail[0].url;
imageHolder.classList.add ("movie-video");
movieTextHolder.appendChild(imageHolder);







// change format starts here

// const container = document.querySelector(".container");
// const btn = document.getElementById('formatbutton');

// btn.addEventListener("click", changeFormat);
// function changeFormat() {
//   container.style.display = "block";
// }


// function toggleFormat(){
//   const container = document.querySelector(".container");
//   container.style.display = 'block';
// }




//  var format = document.getElementById('formatbutton');

//   var displaySetting = container.style.display;

//   if(displaySetting =='flex'){
//     format.style.display = 'block'
//   } else{
//     format.style.display = 'flex'
//   }
// }


  
  

// var container = document.getElementById('container');
// var formatChanged = false;

// var formatbutton = document.getElementById("formatbutton");
// var formatbutton = addEventListener("click", changeTheFormat);

// function changeTheFormat(){
//   if(formatChanged === true) {
//     formatbutton.textContent = "Dark Mode"
//     container.style.display = "flex";
//     formatChanged = false;
//     console.log("format has not changed")
//   } else if (formatChanged === false){
//     formatbutton.textContent = "Dark Mode"
//     container.style.display = "block";
//     formatChanged = false;
//     console.log("format has changed!")

//   }
// }




// const btn = document.getElementById('format');

// btn.addEventListener('click', function onClick(event) {

//   document.getElementById('container').style.display = 'block';

  
// });



// attempt at making filters work starts here



    // var movieGenre = movie.fields.movie_genre;
    // movieGenre.forEach(function(genre) {
    //   imageHolder.classList.add(genre);
    // });


  
    // var filterDrama = document.querySelector(".js-drama");
    // filterDrama.addEventListener("click", function() {
    //   if (movieTextHolder.classList.contains("Drama")) {
    //     movieTextHolder.style.display = "flex";
    //   } else {
    //     movieTextHolder.style.display = "none";
    //   }
    // });




//video play attempt strats here

// let videoHolder = document.createElement("video");
// videoHolder.src = movie.fields.video[0].url;
// videoHolder.classList.add("movie-video");
// videoHolder.muted = true;
// videoHolder.autoplay = false;
// videoHolder.loop = true;
// movieTextHolder.appendChild(videoHolder);




  });

  }
  
