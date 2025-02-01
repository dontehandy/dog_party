// console.log(__dirname);
// node main.js
// run this to get absolute path of main.js
// ls assets - to list all files in assets folder

var form = document.querySelector(".hero form"); // document here is referring to the DOM (Document Object Model), .hero is the class name of the form, and form is the tag name of the form. This tells JS to go find a form element that is inside an element with the class name .hero
var input = document.querySelector("#dog-name"); // #dog-name is referring to the ID of the input field.
var headerText = document.querySelector(".hero h1"); // .hero is the class name of the h1 tag.

// Log the elements to the console
console.log("Form element:", form);
console.log("Input element:", input);
console.log("Header text element:", headerText);

form.addEventListener("submit", displayDogName); // Use the named function as the event listener

function displayDogName(event) {
  event.preventDefault(); // Prevents the default behavior of the form which is to refresh the page on form submission.
  var dogName = input.value;
  headerText.innerHTML = `<span>A Site About</span> <strong>${dogName}</strong>`; // Update the text content of the h1 tag with the value from the input field in bold
}

