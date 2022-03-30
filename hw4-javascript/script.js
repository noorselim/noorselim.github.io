console.log(100 - 500);

var anythingIWant = document.body;
var test = document.html;
var isDark = false;

//if i click the button
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

//background color changes
//text color changes
function changeToDarkMode(){
  if(isDark === true) {
    
    
    darkModeButton.textContent = "Dark Mode"
    anythingIWant.style.background="white";
    anythingIWant.style.color="black";
    isDark = false;
        console.log("dark mode is off.")

    
  } else if(isDark === false) {
    
        darkModeButton.textContent = "Light Mode"
    anythingIWant.style.background="black";
    anythingIWant.style.color="white";
    isDark = true;
    console.log("dark mode is on!")
  }
}
  //one equal sign means youre assignmning a variable a value, three equal signs means you are checking/comparing the two

//function also worked without var, you can just put document.body.style.color="white"; and document.body.style.backgroundColor="black";





//scroll to top starts here
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//change color starts here
const button = document.getElementById("colorchange");
const body = document.body;

const colors = ['#8FBC8F', '#556B2F', '#6B8E23', '#2E8B57', '#9ACD32', '#228B22']
button.addEventListener('click',changeBackground)

function changeBackground(){
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]
}


//change font starts here
const btn = document.getElementById('changefont');

btn.addEventListener('click', function onClick(event) {

  document.body.style.fontFamily = 'arial';

  
});






function runClock() {
  
    var now = new Date()
    
    var hour = now.getHours() % 12
    var min  = now.getMinutes()
    var sec  = now.getSeconds()
    var ms   = now.getMilliseconds()
    
    var clock = document.querySelector("div.clock")
    var hourHand = clock.querySelector("div.hour")
    var minHand  = clock.querySelector("div.minute")
    var secHand  = clock.querySelector("div.second")
    
    var hourRotation = 30 * hour + (0.5 * min)
    var minRotation = 6 * min + (0.1 * sec)
    var secRotation = 6 * sec + 0.006 * ms
    
    hourHand.style.transform = "rotate(" + hourRotation + "deg)"
    minHand.style.transform = "rotate(" + minRotation + "deg)"
    secHand.style.transform = "rotate(" + secRotation + "deg)"
    
    requestAnimationFrame(runClock)
  }
  
  runClock()
