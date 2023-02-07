"use strict";
// console.log('components');
// document.querySelector('.check').addEventListener('click', function() {
//   console.log(document.querySelector('.number-input').value);
// })
// let score = 20;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

// document.querySelector('.question').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function(){
  // console.log(document.querySelector('.number-input').value);
  // document.querySelector('.guess-message').textContent = 'Правильно!';
//   let guessingNumber = Number(document.querySelector('.number-input').value);
//   console.log(guessingNumber, typeof guessingNumber);

//   if(!guessingNumber){
//     document.querySelector('.guess-message').textContent = 'Введите число!';
//   } else if(secretNumber === guessingNumber){
//     document.querySelector('.guess-message').textContent = 'Правильно!';
//   } else if(guessingNumber > secretNumber){
//     if(score>1){
//     document.querySelector('.guess-message').textContent = 'Слишком много!';
//     score--;
//     document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.guess-message').textContent = 'Game over!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if(guessingNumber < secretNumber){
//     if(score>1){
//     document.querySelector('.guess-message').textContent = 'Слишком мало!';
//     score--;
//     document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.guess-message').textContent = 'Game over!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// })



// the second game
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function (){
  let guessingNumber = document.querySelector('.number-input').value
  console.log(guessingNumber);

  if(!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if(guessingNumber > secretNumber) {
    document.querySelector('.guess-message').textContent = 'Слишком много!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if(guessingNumber < secretNumber){
    document.querySelector('.guess-message').textContent = 'Слишком мало!';
    score--;
    document.querySelector('.score').textContent = score;
  }
})
