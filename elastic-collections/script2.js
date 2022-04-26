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


// trying to add thumbnails to scroll in fake carousel



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
    })}


    // scroll div

//     window.setInterval(function() {
//     var elem = document.getElementById('container');
// elem.scrollTop = elem.scrollHeight; 
// }, 700);

// function pageScroll() {
//     window.scrollBy(0,1);
//     scrolldelay = setTimeout(pageScroll,10);
// }





// ScrollRate = 100;

// function scrollDiv_init() {
// 	DivElmnt = document.getElementById('container');
// 	ReachedMaxScroll = false;
	
// 	DivElmnt.scrollTop = 0;
// 	PreviousScrollTop  = 0;
	
// 	ScrollInterval = setInterval('scrollDiv()', ScrollRate);
// }

// function scrollDiv() {
	
// 	if (!ReachedMaxScroll) {
// 		DivElmnt.scrollTop = PreviousScrollTop;
// 		PreviousScrollTop++;
		
// 		ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
// 	}
// 	else {
// 		ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;
		
// 		DivElmnt.scrollTop = PreviousScrollTop;
// 		PreviousScrollTop--;
// 	}
// }






const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}









