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

const navLinks = document.querySelector('.nav-links')

const showElem = (elem) => {
  console.log('show elem')
  console.log(elem)
  elem.classList.remove('hidden')
}

const typing = (elem, string, i, childElem) => {
  if (i < string.length) {
    elem.innerHTML += string.charAt(i);
    i++; 
    setTimeout(() => {
      typing(elem, string, i, childElem)
    }, 100)
  } else {
    showElem(childElem);
  }
}


window.addEventListener('DOMContentLoaded', (e) => {
  // conditional logic to target different pages
  if (document.title == 'Portfolio') { 
    typing(navCat, navTxt, 0, navLinks)
    // typing(portfolioCat, portfolioTxt, 0)
    
  }
})