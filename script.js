'use strict';

// // console.log(document.querySelector('.message').textContent)
// // document.querySelector('.message').textContent = 'New number!';


// // document.querySelector('.number').textContent = 52;
// // document.querySelector('.score').textContent = 50;

// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);


// const secretnumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;

// document.querySelector('.number').textContent = secretnumber;

// document.querySelector('.check').addEventListener('click',function(){
// const guess = Number (document.querySelector('.guess').value);
// console.log(guess,typeof guess);

// if(!guess){
//   document.querySelector('.massage').textContent = 'No Number!';
// } else if(guess ===  secretnumber){
//   document.querySelector('.message').textContent = 'Correct number!';

//   document.querySelector('body').style.backgroundColor = 'Green';
//  document.querySelector('.number').style.width = '30rem';

//  if(score > highscore){
//    highscore = score;
//    document.querySelector('.highscore').textContent = highscore;

//  }
// }
// else if(guess >  secretnumber){
//   if(score > 1){
//     document.querySelector('.message').textContent = 'Too highe!';
//   score--;
//   document.querySelector('.score').textContent = score;
//   }
//   else{
//     document.querySelector('.message').textContent = 'you lost the game!';
//     document.querySelector('.score').textContent = 0;
    
//   }
  
// }
// else if(guess <  secretnumber){
//   if(score > 1){
//     document.querySelector('.message').textContent = 'Too low!';
//     score--; 
//     document.querySelector('.score').textContent = score;
//   }
//   else{
//     document.querySelector('.message').textContent = 'you lost the game!';
//     document.querySelector('.score').textContent = 0;

    
//   }
 
// }
// });


// console.log(document.querySelector('.message').textContent = 'sumit');
// console.log(document.querySelector('.highscore').textContent = 56)


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


// document.querySelector('.check').addEventListener('click',function(){
//   const guess = Number(
//    document.querySelector('.guess').value);
    
//    console.log(guess , typeof guess);

// })

const secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretnumber;


let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(
  document.querySelector('.guess').value);
  console.log(guess , typeof guess)



if (!guess) {
  document.querySelector('.message').textContent = 'No Number.....'
} else if(guess === secretnumber){
  document.querySelector('.message').textContent = 'Correct Number'
  document.querySelector('body').style.backgroundColor = 'red';

  document.querySelector('.number').style.width = '30rem';

  if(score > highscore)
     highscore = score;
     document.querySelector('.highscore').textContent = highscore;

} else if(guess > secretnumber){
  if(score > 0){
    document.querySelector('.message').textContent = 'Too High'
    score--;
    document.querySelector('.score').textContent = score;
  }
  else{
    document.querySelector('.message').textContent = 'You lost the game'
  }


} else if(guess < secretnumber){
  if(score > 0){
  document.querySelector('.message').textContent = 'Too Low'
  score--;
  document.querySelector('.score').textContent = score;
  }
  else{
    document.querySelector('.message').textContent = 'You lost the game'
  }
}
})

