// const heading = document.querySelector('h1')

// const titleClick = (e) => {
//   console.log(e.target.innerText)
//   e.target.style.color = "black";
// }

// heading.addEventListener('click', titleClick)

const portfolioText = "cat portfolio.txt"

// const cliCommand = document.querySelector('.cli-command');
const portfolioCLI = document.getElementById('portfolioCLI');

let i = 0;
const typing = () => {

  if (i < portfolioText.length) {
    if (portfolioText.charAt(i) === ' ') {
      portfolioCLI.innerHTML += "&nbsp;"
    }
    portfolioCLI.innerText += portfolioText.charAt(i);
    i++; 
    setTimeout(typing, 100)
  }
}

window.addEventListener('DOMContentLoaded', (e) => {
  typing()
})