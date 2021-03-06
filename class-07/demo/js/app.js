// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data
'use strict';

// It's like the function need tto start with function keyword
// TThe name should start with CAPS

// console.log(Array.prototype);

function Cat (name, likes, isGoodWithDogs, isGoodWithKids, isGoodWithOtherCat, breed) {
  this.name = name;
  this.likes = likes;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithOtherCat = isGoodWithOtherCat;
  this.breed = breed;
  this.image = `./images/${name}.jpeg`;
  this.age = 0;
};

Cat.prototype.getAge = function(min, max) {
  this.age = generateRandomNumber(min, max);
  // console.log(age);
};

Cat.prototype.render = function() {
  const parentElement = document.getElementById('kittenProfiles');

  // Create Element
  // append element to parent element
  // set text content to the element 

  const articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  const h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  h2Element.textContent = this.name;

  const pElement = document.createElement('p');
  articleElement.appendChild(pElement);
  pElement.textContent = `${this.name} is a ${this.breed}, and ${this.age} months old.`;

  // <table>
  //         <tr>
  //           <th>Good with other Cat</th>
  //           <th>Good with Kids</th>
  //           <th>Good with Dogs</th>
  //         </tr>
  //         <tr>
  //           <td>true</td>
  //           <td>false</td>
  //           <td>true</td>
  //         </tr>
  //       </table> 

  const tableElement = document.createElement('table');
  articleElement.appendChild(tableElement);

  const tr1Element = document.createElement('tr');
  tableElement.appendChild(tr1Element);

  const th1Element = document.createElement('th');
  tr1Element.appendChild(th1Element);
  th1Element.textContent = 'Is Good with Other Cat';

  const th2Element = document.createElement('th');
  tr1Element.appendChild(th2Element);
  th2Element.textContent = 'Is Good with Kids';
  
  const th3Element = document.createElement('th');
  tr1Element.appendChild(th3Element);
  th3Element.textContent = 'Is Good with Dog';

  const tr2Element = document.createElement('tr');
  tableElement.appendChild(tr2Element);

  const td1Element = document.createElement('td');
  tr2Element.appendChild(td1Element);
  td1Element.textContent = this.isGoodWithOtherCat;

  const td2Element = document.createElement('td');
  tr2Element.appendChild(td2Element);
  td2Element.textContent = this.isGoodWithKids;

  const td3Element = document.createElement('td');
  tr2Element.appendChild(td3Element);
  td3Element.textContent = this.isGoodWithDogs;

  const ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);
  
  for(let i = 0; i < this.likes.length; i++) {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = this.likes[i];
  }

  const imgElement = document.createElement('img');
  articleElement.appendChild(imgElement);
  imgElement.setAttribute('src', this.image);
};

const frankie = new Cat('frankie',['food', 'playing'], true, true, false, 'British');
const jumper = new Cat('jumper', ['food', 'playing'], true, true, false, 'British');
const serena = new Cat('serena', ['food', 'playing'], true, true, false, 'British');

frankie.getAge(3, 12);
jumper.getAge(3, 12);
serena.getAge(3, 12);
frankie.render();
jumper.render();
serena.render();

console.log(frankie);
console.log(jumper);

// const frankie = {
//   name: 'Frankie',
//   age: 0,
//   likes: ['napping', 'chasing', 'food'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithOtherCat: true,
//   breed: 'British',
//   image: './images/frankie.jpeg',
//   getAge: function(min, max) {
//     this.age = generateRandomNumber(min, max);
//     // console.log(age);
//   },
//   render: function() {
//     const parentElement = document.getElementById('kittenProfiles');

//     // Create Element
//     // append element to parent element
//     // set text content to the element 

//     const articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     articleElement.appendChild(h2Element);
//     h2Element.textContent = this.name;

//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name} is a ${this.breed}, and ${this.age} months old.`;

//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
    
//     for(let i = 0; i < this.likes.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = this.likes[i];
//     }

//     const imgElement = document.createElement('img');
//     articleElement.appendChild(imgElement);
//     imgElement.setAttribute('src', this.image);
//   }
// };

// const jumper = {
//   name: 'Jumper',
//   age: 0,
//   likes: ['napping', 'chasing', 'food'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithOtherCat: true,
//   breed: 'British',
//   image: './images/jumper.jpeg',
//   getAge: function(min, max) {
//     this.age = generateRandomNumber(min, max);
//     // console.log(age);
//   },
//   render: function() {
//     const parentElement = document.getElementById('kittenProfiles');

//     // Create Element
//     // append element to parent element
//     // set text content to the element 

//     const articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     articleElement.appendChild(h2Element);
//     h2Element.textContent = this.name;

//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name} is a ${this.breed}, and ${this.age} months old.`;
//     '' + this.name + ' asd'

//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
    
//     for(let i = 0; i < this.likes.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = this.likes[i];
//     }

//     const imgElement = document.createElement('img');
//     articleElement.appendChild(imgElement);
//     imgElement.setAttribute('src', this.image);
//   }
// };

// const serena = {
//   name: 'Serena',
//   age: 0,
//   likes: ['napping', 'chasing', 'food'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithOtherCat: true,
//   breed: 'British',
//   image: './images/serena.jpeg',
//   getAge: function(min, max) {
//     this.age = generateRandomNumber(min, max);
//     // console.log(age);
//   },
//   render: function() {
//     const parentElement = document.getElementById('kittenProfiles');

//     // Create Element
//     // append element to parent element
//     // set text content to the element 

//     const articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     articleElement.appendChild(h2Element);
//     h2Element.textContent = this.name;

//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name} is a ${this.breed}, and ${this.age} months old.`;
//     '' + this.name + ' asd'

//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
    
//     for(let i = 0; i < this.likes.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = this.likes[i];
//     }

//     const imgElement = document.createElement('img');
//     articleElement.appendChild(imgElement);
//     imgElement.setAttribute('src', this.image);
//   }
// };
// let age;
// age = generateRandomNumber(3, 12);
// frankie.getAge(3, 12);
// jumper.getAge(3,6);
// console.log(frankie.name);
// console.log(frankie.age);
// console.log(frankie);

// frankie.render();
// jumper.render();
// serena.render();

// console.log(this);

// Helper function
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // Math.ceil
}

console.log(generateRandomNumber(3, 12));