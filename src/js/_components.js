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



// // the second game
// let score = 20;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// // document.querySelector('.question').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function (){
//   let guessingNumber = Number(document.querySelector('.number-input').value)
//   console.log(guessingNumber);

//   if(!guessingNumber) {
//     document.querySelector('.guess-message').textContent = 'Введите число!';
//   } else if(guessingNumber === secretNumber) {
//     document.querySelector('.guess-message').textContent = 'Выиграл!';
//     document.querySelector('.page__body').style.backgroundColor = '#987aeb';
//   } else if(guessingNumber > secretNumber) {
//     if(score > 0) {
//     document.querySelector('.guess-message').textContent = 'Слишком много!';
//     score--;
//     document.querySelector('.score').textContent = score;
//     } else {
//     document.querySelector('.guess-message').textContent = 'Проиграл!';
//     }
//   } else if(guessingNumber < secretNumber){
//     if(score > 0) {
//     document.querySelector('.guess-message').textContent = 'Слишком мало!';
//     score--;
//     document.querySelector('.score').textContent = score;
//     } else {
//     document.querySelector('.guess-message').textContent = 'Проиграл!';
//     }
//   }
// })

// document.querySelector('.again').addEventListener('click', function(){
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.page__body').style.backgroundColor = '#000';
//     document.querySelector('.guess-message').textContent = 'Начни угадывать!';
// })



// the second game
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.question').textContent = secretNumber;

// не правильно 3 строчки
// displayGuessMessage(message) {
// document.querySelector('.guess-message').textContent = 'message';
// }

document.querySelector('.check').addEventListener('click', function (){
  let guessingNumber = Number(document.querySelector('.number-input').value)
  console.log(guessingNumber);

  if(!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if(guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Выиграл!';
    document.querySelector('.page__body').style.backgroundColor = '#987aeb';
    if(score > highScore){
      highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    }
  } else if(guessingNumber > secretNumber) {
    if(score > 0) {
    document.querySelector('.guess-message').textContent = 'Слишком много!';
    score--;
    document.querySelector('.score').textContent = score;
    } else {
    document.querySelector('.guess-message').textContent = 'Проиграл!';
    }
  } else if(guessingNumber < secretNumber){
    if(score > 0) {
    document.querySelector('.guess-message').textContent = 'Слишком мало!';
    score--;
    document.querySelector('.score').textContent = score;
    } else {
    document.querySelector('.guess-message').textContent = 'Проиграл!';
    }
  }
})

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.page__body').style.backgroundColor = '#000';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.number-input').value = '';secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.question').textContent = secretNumber;
})
