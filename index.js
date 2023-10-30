// const descriptions = document.querySelectorAll(".description-display");
// const ratings = document.querySelectorAll(".rating-display .value");
// const parks = document.querySelectorAll(".park-display");
// const numberParks = parks.length;



// const newElement = document.createElement("div");
// newElement.innerText = `${numberParks} exciting parks to visit`;

// newElement.classList.add("header-statement");

// const header = document.querySelector("header");
// header.appendChild(newElement);

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";//\\

  // 4. Create an array
const parksArray = Array.from(parksList);

parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
      });
});

console.log("Before!");

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("Loaded!");
// });

// console.log("After!");

const submitHandler = (event) => {
    console.log("The form was submitted");
  };

  const main = () => {
    // Get the form element
    const form = document.querySelector("#park-form");
  
    // Attach the submit handler
    form.addEventListener("submit", submitHandler);
  };

// const firstBtn = document.querySelector("button");
// firstBtn.addEventListener("click", (event) => {
//     console.log(event.target.parentNode);
//   });

// // Select all the buttons for all the parks
// const allBtns = document.querySelectorAll(".rate-button");

// // Iterate through the list of buttons and add an event handler to each
// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       const park = event.target.parentNode;
//       park.style.backgroundColor = "#c8e6c9";
//     });
//   });

// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
  
//     if (ratingValue > 4.7) {
//       rating.classList.add("high-rating");
//       rating.classList.remove("value");
//     }
//   }

// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
  
//     if (content.length > 250) {
//       content = content.slice(0, 250);
//       content = content + '<a href="#">...</a>';
//     }
  
//     desc.innerHTML = content;
//   }
// const main = document.querySelector("main");

// // Select a single park
// const park = main.querySelector(".park-display");

// // Remove that park
// main.removeChild(park);

// function printName(name){
//     console.log("Hello " + name);
//   }
  
//   setTimeout(printName, 3000, "Thundercat");
//   setTimeout(printName, 2000, "Adele");
//   setTimeout(printName, 1000, "Sade");


//   function repeatMessage(){
//     console.log("hey there! This message will be printed every second");
//   }
  
//   //setInterval(repeatMessage, 1000); // Calls repeatMessage() every 1,000 milliseconds