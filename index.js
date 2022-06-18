const projectButtons = document.querySelectorAll('.project-button');

const btnClicked = (e) => {
    if(e.target.style.color == 'black') e.target.style.color = '#548CA8'
    else e.target.style.color = 'black';
    console.log('set');
}

projectButtons.forEach(btn => btn.addEventListener('click', btnClicked));