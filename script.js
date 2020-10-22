
var scores, roundScore, activePlayer,
scores = [0, 0];
roundScore = 0;
activePlayer = 1;

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
})