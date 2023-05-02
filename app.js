
function firstTest() {
  confetti({
    particleCount: 3000,
    spread: 360,
    origin: { y: 0.5 }
  });
}

function secondTest() {
  let end = Date.now() + (15 * 1000);
  let colors = ['#bb0000', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

function thirdTest() {
  let duration = 25 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  let interval = setInterval(function () {

    let timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    let particleCount = 500 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}

const pippo = document.getElementById('pippo');
const p = document.createElement('p');
const text = document.createTextNode('ciao');
p.appendChild(text);


$('#pippo').append($('<p>').text('ciao jquery'))

 
