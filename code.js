// 2.1
// document.getElementById('resizeButton').addEventListener('click', function() {
//     document.getElementById('myDiv').style.width = '400px';
//     document.getElementById('myDiv').style.height = '300px';
// });

// 2.2
// document.getElementById('sizeButton').addEventListener('click', function() {
//      elem = document.getElementById('elem');
//     let width = elem.offsetWidth;
//     let height = elem.offsetHeight;
//     alert('Width: ' + width + ', Height: ' + height);
// });

// 2.3
// document.getElementById('sizeButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let fontSize = window.getComputedStyle(elem, null).getPropertyValue('font-size');
//     fontSize = parseFloat(fontSize);
//     alert('Font Size: ' + fontSize);
// });


// #3.4
// let elem = document.getElementById('elem');
// let button = document.getElementById('button');

// button.addEventListener('click', function() {
//   let currentWidth = elem.offsetWidth;
//   let currentHeight = elem.offsetHeight;
//   elem.style.width = (currentWidth + 50) + 'px';
//   elem.style.height = (currentHeight + 50) + 'px';
// });

//#3.5
// let elem = document.getElementById('elem');
// let button = document.getElementById('button');

// button.addEventListener('click', function() {
//   let currentWidth = elem.offsetWidth;
//   let currentHeight = elem.offsetHeight;
//   let newWidth = currentWidth * 1.1;
//   let newHeight = currentHeight * 1.1;
//   elem.style.width = newWidth + 'px';
//   elem.style.height = newHeight + 'px';
// });



// 4
// document.getElementById('borderButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let computedStyle = window.getComputedStyle(elem, null);
//     let borderStyle = computedStyle.getPropertyValue('border-style');
//     let borderColor = computedStyle.getPropertyValue('border-color');
//     let borderWidth = computedStyle.getPropertyValue('border-width');
//     alert('Border Style: ' + borderStyle + '\nBorder Color: ' + borderColor + '\nBorder Width: ' + borderWidth);
// });


//#5.1
// let myDiv = document.getElementById('myDiv');
// let hideButton = document.getElementById('hideButton');
// let showButton = document.getElementById('showButton');

// hideButton.addEventListener('click', function() {
//   myDiv.style.display = 'none';
// });

// showButton.addEventListener('click', function() {
//   myDiv.style.display = 'block';
// });

// #5.2
// let myDiv = document.getElementById('myDiv');
// let redButton = document.getElementById('redButton');
// let originalColorButton = document.getElementById('originalColorButton');

// redButton.addEventListener('click', function() {
//   myDiv.style.backgroundColor = 'red';
// });

// originalColorButton.addEventListener('click', function() {
//   myDiv.style.backgroundColor = 'blue';
// });


// 6
// document.getElementById('borderButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.style.cssText = 
//       width: 100px;
//       height: 100px;
//       margin: 10px auto;
//       color: red;
//     ;
//     let computedStyle = window.getComputedStyle(elem, null);
//     let borderStyle = computedStyle.getPropertyValue('border-style');
//     let borderColor = computedStyle.getPropertyValue('border-color');
//     let borderWidth = computedStyle.getPropertyValue('border-width');
//     alert('Border Style: ' + borderStyle + '\nBorder Color: ' + borderColor + '\nBorder Width: ' + borderWidth);
// });





// 8.1
// document.getElementById('sizeButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let computedStyle = window.getComputedStyle(elem);
//     let width = computedStyle.getPropertyValue('width');
//     let height = computedStyle.getPropertyValue('height');
//     alert('Ширина: ' + width + '\nВысота: ' + height);
// });

// 8.2
// document.getElementById('sizeButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     let computedStyle = window.getComputedStyle(elem);
//     let currentWidth = parseInt(computedStyle.getPropertyValue('width'));
//     let currentHeight = parseInt(computedStyle.getPropertyValue('height'));
//     elem.style.width = (currentWidth * 2) + 'px';
//     elem.style.height = (currentHeight * 2) + 'px';
// });


// #9.1
// let elem = document.getElementById('elem');
// let fontSizeButton = document.getElementById('fontSizeButton');

// fontSizeButton.addEventListener('click', function() {
//   alert('Размер шрифта: ' + window.getComputedStyle(elem).getPropertyValue('font-size'));
// });


// 10
// let paragraphs = document.querySelectorAll('p');
//     for (let i = 0; i < paragraphs.length; i++) {
//         let number = parseInt(paragraphs[i].textContent);
//     if (number % 2 === 0) {
//         paragraphs[i].classList.add('even');
//     } else {
//         paragraphs[i].classList.add('odd');
//     }
// }


// #11.1
// let paragraphs = document.querySelectorAll('.paragraph');

// paragraphs.forEach(function(paragraph) {
//   let clicked = false;
//   paragraph.addEventListener('click', function() {
//     if (clicked) {
//       paragraph.style.color = 'black';
//     } else {
//       paragraph.style.color = 'red';
//     }
//     clicked = !clicked;
//   });
// });



// 12
// let input = document.getElementById('inputField');
//     input.addEventListener('blur', function() {
//       if (input.value.length <= 9) {
//         input.classList.remove('invalid');
//         input.classList.add('valid');
//       } else {
//         input.classList.remove('valid');
//         input.classList.add('invalid');
//       }
// });


// #13.1
// let numberInput = document.getElementById('numberInput');
// numberInput.addEventListener('blur', function() {
//   let value = parseInt(numberInput.value);
//   if (value < 10) {
//     numberInput.style.backgroundColor = 'green';
//   } else if (value >= 10 && value <= 20) {
//     numberInput.style.backgroundColor = 'yellow';
//   } else {
//     numberInput.style.backgroundColor = 'red';
//   }  
// });