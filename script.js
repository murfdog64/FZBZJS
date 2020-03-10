document.addEventListener("DOMContentLoaded", function(){
  var allBubbles = document.getElementById('fizz-bubbles');
  var bubble;

  for (var i = 1; i <= 100; i++) {
    bubble = document.createElement('div');
    bubble.className = 'bubble';
    allBubbles.appendChild(bubble);
    if (i % 15 === 0) {
      bubble.innerText = 'FIZZBUZZ';
    } else if (i % 5 === 0) {
      bubble.innerText = 'BUZZ';
    } else if (i % 3 === 0) {
      bubble.innerText = 'FIZZ';
    } else {
      bubble.innerText = i;
    }
  }
});

