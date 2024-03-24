// Name: Iritza Ali 
// File: main2.js
// Date: 24 March 2024
// This is an JavaScript that will be responsible for the functionality of the website
	


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',

];

/* Declaring the alternative text for each image file */

const altTexts = [
    'Closeup of the human eye',
    'A smooth rocky terrian',
    'Purple and white flowers',
    'Picture of egyptian drawing',
    'Picture of a butterfly'
  ];

/* Looping through images */

/* Looping through images */
function thumbnailLoop() {
    for (let i = 0; i < imageFilenames.length; i++) {
      const newImage = document.createElement('img');
      newImage.setAttribute('src', "images/" + imageFilenames[i]);
      newImage.setAttribute('alt', altTexts[i]); 
      thumbBar.appendChild(newImage);
  
      // Adding the click event listener to each images
      newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', "images/" + imageFilenames[i]);
        displayedImage.setAttribute('alt', altTexts[i]);
      });
    }
  }


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (e) => {
    if (e.target.className == 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  
   else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}); /* Closing the event listener */
