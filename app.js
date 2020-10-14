const aboutTxt = "cat about.txt"
// const navTxt = "cat navigation.txt"
const projectsTxt = "cat projects.txt"

const portfolioCat = document.getElementById('portfolio-cat');
const projectsCat = document.getElementById('projects-cat');

const navLinks = document.querySelector('.nav-links');
const blurb = document.querySelector('.blurb');
const projectList = document.querySelector('.project-list');

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
    // typing(navCat, navTxt, 0, navLinks)
    typing(portfolioCat, aboutTxt, 0, blurb)
    
  }
  if (document.title == 'Projects') {
    console.log('projects')
    typing(projectsCat, projectsTxt, 0, projectList)
  }
})