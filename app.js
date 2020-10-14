const aboutTxt = "cat about.txt"
const projectsTxt = "cat projects.txt"
const contactTxt = "ls contact"

const portfolioCat = document.getElementById('portfolio-cat');
const projectsCat = document.getElementById('projects-cat');
const contactCat = document.getElementById('contact-cat');

const navLinks = document.querySelector('.nav-links');
const blurb = document.querySelector('.blurb');
const projectList = document.querySelector('.project-list');
const contactLinks = document.querySelector('.contact-links');

const showElem = (elem) => {
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
    typing(portfolioCat, aboutTxt, 0, blurb)
  }

  if (document.title == 'Projects') {
    typing(projectsCat, projectsTxt, 0, projectList)
  }

  if (document.title == 'Contact') {
    typing(contactCat, contactTxt, 0, contactLinks)
  }
  
})