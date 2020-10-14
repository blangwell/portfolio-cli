// const heading = document.querySelector('h1')

// const titleClick = (e) => {
//   console.log(e.target.innerText)
//   e.target.style.color = "black";
// }

// heading.addEventListener('click', titleClick)

const portfolioTxt = "cat portfolio.txt"
const navTxt = "cat navigation.txt"
// const cliCommand = document.querySelector('.cli-command');
const portfolioCat = document.getElementById('portfolio-cat');
const navCat = document.getElementById('nav-cat');

// let i = 0;

// const typing = () => {
//   if (i < portfolioText.length) {
//     portfolioCLI.innerHTML += portfolioText.charAt(i);
//     i++; 
//     setTimeout(typing, 100)
//   }
// }

const typing = (elem, string, i) => {
  if (i < string.length) {
    elem.innerHTML += string.charAt(i);
    i++; 
    setTimeout(() => {
      typing(elem, string, i)
    }, 100)
  }
}

window.addEventListener('DOMContentLoaded', (e) => {
  typing(navCat, navTxt, 0)
  typing(portfolioCat, portfolioTxt, 0)
})