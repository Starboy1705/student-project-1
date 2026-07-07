// Wait until the whole page has loaded before running any code
document.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementById('revealBtn');
  const output = document.getElementById('revealText');

  // 👉 Change this to YOUR word that sums up the last 2 days!
  const myWord = "curious";

  button.addEventListener('click', () => {
    output.textContent = `My word is: "${myWord}" ✨`;
  });

});
