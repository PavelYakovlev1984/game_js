"use strict";
// console.log('components');
// document.querySelector('.check').addEventListener('click', function() {
//   console.log(document.querySelector('.number-input').value);
// })
document.querySelector('.check').addEventListener('click', function(){
  // console.log(document.querySelector('.number-input').value);
  // document.querySelector('.guess-message').textContent = 'Правильно!';
  let guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);
})

