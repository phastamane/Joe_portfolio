const home = document.getElementById('homeButton');
const project = document.getElementById('projectButton');
const about = document.getElementById('aboutButton');
const contact = document.getElementById('contactButton');
const scrollDownBut = document.getElementById('scroll-down')

const homeDiv = document.getElementById('home-div');
const projectDiv = document.getElementById('project-div');
const aboutDiv = document.getElementById('about-div');
const contactDiv = document.getElementById('contact-div');

const buttonsDiv = [homeDiv, projectDiv, aboutDiv, contactDiv];
const buttons = [home, project, about, contact]

export function navButtons() {




  

  home.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    resetButtonStyles();
    homeDiv.style.backgroundColor = '#fff';
    home.style.color = '#000';
  });

  project.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('project-section').scrollIntoView({ behavior: 'smooth'})

    resetButtonStyles();
    projectDiv.style.backgroundColor = '#fff';
    project.style.color = '#000';
  });

  about.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('benefit-section').scrollIntoView({ behavior: 'smooth'})

    resetButtonStyles();
    aboutDiv.style.backgroundColor = '#fff';
    about.style.color = '#000';
  });

  contact.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth'})

    resetButtonStyles();
    contactDiv.style.backgroundColor = '#fff';
    contact.style.color = '#000';
  });

  scrollDownBut.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('project-section').scrollIntoView({ behavior: 'smooth'})

   
  })

}
export function scrollButton(){      
    
    let scroll = window.pageYOffset

    
    if (scroll < 727){

        resetButtonStyles();
        homeDiv.style.backgroundColor = '#fff';
        home.style.color = '#000';
  
    }

    else if(scroll > 727 && scroll < 2300 ){

        resetButtonStyles();
        projectDiv.style.backgroundColor = '#fff';
        project.style.color = '#000';
    }

    else if(scroll > 2399 && scroll < 3240){

        resetButtonStyles();
        aboutDiv.style.backgroundColor = '#fff';
        about.style.color = '#000';

    }

    else if(scroll > 3300){
        
        resetButtonStyles();
        contactDiv.style.backgroundColor = '#fff';
        contact.style.color = '#000';
    }

console.log(scroll)
}

function resetButtonStyles() {
    buttonsDiv.forEach((btn) => {
      btn.style.backgroundColor = '#1e1e1e';

    });

    buttons.forEach((btn) => {
      
      btn.style.color = '#ffffff';
    });

  }