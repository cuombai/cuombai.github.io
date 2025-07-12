let typingTimeout;
let started = false;

function startTyping() {
  if (started) return;
  started = true;

  const sourceText = document.getElementById("poem-source").innerText.trim();
  const output = document.getElementById("poem-output");
  let index = 0;
  let visibleText = '';

  function type() {
    if (index < sourceText.length) {
      visibleText += sourceText.charAt(index);
      index++;

      // Only show the last N lines that fit in poem-section height
      output.textContent = limitVisibleLines(visibleText, 9); // adjust line count

      typingTimeout = setTimeout(type, 50);
    } else {
      setTimeout(() => {
        output.textContent = '';
        started = false;
      }, 6000);
    }
  }

  output.textContent = '';
  setTimeout(type, 800);
}

function resetPoem() {
  // Do nothing — allow it to finish naturally
}

// Helper: keep only last N lines
function limitVisibleLines(text, maxLines) {
  const lines = text.split('\n');
  if (lines.length <= maxLines) return text;
  return lines.slice(-maxLines).join('\n');
}

// let typingTimeout;
// let started = false;

// function startTyping() {
//   if (started) return;
//   started = true;

//   const sourceText = document
//   .getElementById("poem-source")
//   .innerText
//   .replace(/\r\n|\r/g, "\n") // Normalize newlines
//   .trim();

//   const output = document.getElementById("poem-output");
//   let index = 0;

//   function type() {
//     if (index < sourceText.length) {
//       output.textContent += sourceText.charAt(index);
//       index++;
//       typingTimeout = setTimeout(type, 60);
//     } else {
//       // After poem is done, wait 6 seconds, then clear
//       setTimeout(() => {
//         output.textContent = '';
//         started = false;
//       }, 6000);
//     }
//   }

//   // Simulate "..." before typing
//   output.textContent = '';
//   setTimeout(() => {
//     output.textContent = '.';
//     setTimeout(() => {
//       output.textContent = '..';
//       setTimeout(() => {
//         output.textContent = '...';
//         setTimeout(() => {
//           output.textContent = '';
//           type();
//         }, 400);
//       }, 400);
//     }, 400);
//   }, 300);
// }

function resetPoem() {
//   clearTimeout(typingTimeout);
//   started = false;
//   document.getElementById("poem-output").textContent = '';

}

document.getElementById("yesBtn").addEventListener("click", () => {
  const popup = document.getElementById("heart-popup");
  const heartContainer = document.querySelector(".heart-container");
  const ring = document.querySelector(".ring-button");

  popup.style.display = "flex";

  // Wait for GIF to finish (adjust to your GIF duration)
  setTimeout(() => {
    heartContainer.style.animationPlayState = "running";
    ring.style.display = "block";
  }, 2500); // 2.5s = GIF duration
});

let noClickCount = 0;

document.getElementById("noBtn").addEventListener("click", () => {
  const button = document.getElementById("noBtn");
  const container = document.querySelector(".love-container");
  const popup = document.getElementById("gotcha-popup");

  noClickCount++;

  if (noClickCount % 15 === 0) {
    popup.style.display = "flex";
    return;
  }

  const containerRect = container.getBoundingClientRect();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  let x, y;
  do {
    x = Math.floor(Math.random() * (screenWidth - buttonWidth));
    y = Math.floor(Math.random() * (screenHeight - buttonHeight));
  } while (
    x > containerRect.left &&
    x < containerRect.right &&
    y > containerRect.top &&
    y < containerRect.bottom
  );

  button.style.position = "fixed";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
});

document.getElementById("tryAgainBtn").addEventListener("click", () => {
  document.getElementById("gotcha-popup").style.display = "none";
});

