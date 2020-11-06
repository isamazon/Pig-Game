
var scores, roundScore, activePlayer,
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score--0').textContent = '0'
document.getElementById('score--1').textContent = '0'
document.getElementById('current--0').textContent = '0'
document.getElementById('current--1').textContent = '0'
//document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<b>' + dice + '</b>'

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function() {
    // We want a random number when we 'click' on .btn-roll. so here it executes the Math.random for our dice 
    var dice = Math.floor(Math.random() * 6) + 1;
    

    //Display result of number 
    var diceDom = document.querySelector('.dice'); 
    diceDom.style.display = 'block';
    // since the .png files all end with a number we can just concenate the first and last part of the png file together with dice inbetween.
    diceDom.src = 'dice-' + dice + '.png';


    //Update round score IF if the rolled number is not a 1
    if (dice !== 1) {
        // add score to player
        roundScore += dice;
        // Adding the roundScore to the textContent
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else {
       nextPlayer();
    }

    //If we roll 1 we want it to switch players and remove all points from the previous players current points.
    
})
// Now we want to add functionality to the Hold dice button
document.querySelector('.btn--hold').addEventListener('click', function() {
    // We want to hold the current point value and transfer it to score--0 or score--1 whatever current side its on 
    scores[activePlayer] += roundScore;
    var oppositePlayer =  

    // Update the UI with the addittion of adding the current score to the global score using .textContent = 
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    // Check if the activePlayer won the game aka if global score = 100
    checkWin();

});

    function checkWin() {
        if (scores[activePlayer] >= 10 ){
            document.querySelector('#name--' + activePlayer).textContent = 'Winner'; 
        } else {
            nextPlayer();
        }
    }

    /*// we now want to implement a new game function
    document.getElementById('btn--new').addEventListener('click', function() {
        // Now that we got the btn--new id and the click event we want to reset all of the winner scores and winner names back to normal
        scores = 0;

    })
    */
   
 function nextPlayer() {
     // Switch to next player

     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; roundScore = 0;

     document.getElementById('current--0').textContent = '0'
     document.getElementById('current--1').textContent = '0'

     document.querySelector('.player--0').classList.toggle('player--active');
     document.querySelector('.player--1').classList.toggle('player--active');
     //document.querySelector('.player--0').classList.remove('player--active');
     //document.querySelector('.player--1').classList.add('player--active');
     // This is getting rid of the Dice.png 
     document.querySelector('.dice' ).style.display = 'none'
 }