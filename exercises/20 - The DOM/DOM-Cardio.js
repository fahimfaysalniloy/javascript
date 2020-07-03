// Make a div
const newDiv = document.createElement('div');

// add a class of wrapper to it
newDiv.classList.add('wrappper');

// put it into the body
document.body.appendChild(newDiv);

// make an unordered list
const newUl = document.createElement('ul');


// add three list items with the words "one, two three" in them
const listHtml =
   `<li>one</li>
   <li>two</li>
   <li>three</li>`;

const listItem = document.createRange().createContextualFragment(listHtml);
newUl.appendChild(listItem);






// put that list into the above wrapper
newDiv.appendChild(newUl);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'D:\Tutorial Videos\Wesbos Beginner Javascript\Course Material\beginner-javascript-master\exercises\58 - Gallery\images\270-camo-sunset.jpg';

// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy'
// Append that image to the wrapper
newDiv.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const childDivHtml =
`<div>
 <p></p>
 <p></p>
</div>`;

const childDiv = document.createRange().createContextualFragment(childDivHtml);










// put this div before the unordered list from above
newDiv.insertBefore(childDiv,newUl);

// add a class to the second paragraph called warning


newDiv.firstElementChild.lastElementChild.classList.add('warning');





// remove the first paragraph
newDiv.firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height)
{


return `<div class="playerCard">
   <h2>${name} - ${age} </h2>
   <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
 </div>`


}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const anotherDiv = document.createElement('div');
anotherDiv.classList.add('cards');


// Have that function make 4 cards
let cardsHtml = generatePlayerCard('fahim', 12, 160);
cardsHtml += generatePlayerCard('billi', 12, 160);
cardsHtml += generatePlayerCard('nidfhdsfhu', 12, 160);

const cardsEl = document.createRange().createContextualFragment(cardsHtml);



// append those cards to the div
anotherDiv.appendChild(cardsEl);
// put the div into the DOM just before the wrapper element
document.body.insertBefore(anotherDiv, newDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const mydivs = document.querySelectorAll('.playerCard');
mydivs.forEach(item => {
    const dltbtn = document.createElement('button');
    dltbtn.classList.add('dltit');
    dltbtn.innerText = 'Dellete';
     return item.appendChild(dltbtn);

});


anotherDiv.addEventListener('click',deletediv);

function deletediv(e){
    if(e.target.classList.contains('dltit'))
    e.target.parentElement.remove();




}





























// select all the buttons!
// make out delete function
// loop over them and attach a listener
