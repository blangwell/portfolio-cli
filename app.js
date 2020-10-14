const portfolioTxt = "cat portfolio.txt"
const navTxt = "cat navigation.txt"

const portfolioCat = document.getElementById('portfolio-cat');
const navCat = document.getElementById('nav-cat');

const navLinks = document.querySelector('.nav-links');
const blurb = document.querySelector('.blurb');

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
    typing(portfolioCat, portfolioTxt, 0, blurb)
    
  }
  if (document.title == 'Projects') {
    console.log('projects')
  }
})