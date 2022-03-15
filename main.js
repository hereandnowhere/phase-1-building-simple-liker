// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hideError = function(){
  const modal = document.getElementsById("modal");
  modal.hidden = true;
};


//like heart class == "like-glyph"
// Your JavaScript code goes here!

// const fetchRequest = () => {
//   fetch("http://mimicServer.example.com", function(){})
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(){})
//   .catch(function(error){})
// };

document.addEventListener("DOMContentLoaded", function(){});

function handleHeartClick(){
  alert("You clicked my button!");
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}




// You will be doing your coding in main.js. 
// If you take a look at the file, you will see that a 
// function, mimicServerCall(), is being provided for you. 
// This function will "mock" the behavior of a backend server. 
// You will invoke mimicServerCall() in response to a user 
// action, and the function will randomly return either 
// a "success" or "fail" response. Your code will then need 
// to handle the response appropriately: updating the 
// appearance of the heart if it returns a "successful" 
// response, and displaying an error in the DOM otherwise.

// Note that the content of the "successful" response 
// from the server is not important here — we only care 
// that it's successful. This means you will not need to 
// call .json() on the response so you only need a single 
// then() call.

// Here's the specification:

//     Add the .hidden class to the error modal in the HTML 
//     so it does not appear when the page first loads
//     When a user clicks on an empty heart:

//         Invoke mimicServerCall to simulate making a 
//         server request

//         When the "server" returns a failure status:
//         Respond to the error using a .catch(() => {}) 
//         block after your .then(() => {}) block.

//         Display the error modal by removing the 
//         .hidden class

//         Display the server error message in the modal

//         Use setTimeout to hide the modal after 3 seconds 
//         (add the .hidden class)

//         When the "server" returns a success status:
//         Change the heart to a full heart

//         Add the .activated-heart class to make the 
//         heart appear red

//     When a user clicks on a full heart:
//         Change the heart back to an empty heart

//         Remove the .activated-heart class

//     Keep all your styling rules entirely in style.css. 
//     Do not manipulate any .style properties.
//     Only manipulate the DOM once the server request 
//     responds. Do not make the heart full until you're 
//     inside a successful .then block.

//     Note: The tests will only check for the first 
//     part of the specification (adding the hidden class). 
//     You should verify the rest of the behavior yourself, 
//     by checking the page in the browser.
