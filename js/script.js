const navLink = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo')
const sections = document.querySelectorAll('section');

const activePage = () => {

   

    const header = document.querySelector('header');
    const background = document.querySelector('.background');

    header.classList.remove('active');
    setTimeout(()=> {
        header.classList.add('active');
    },1100);


    navLink.forEach(link => {
        link.classList.remove('active');
    });

    background.classList.remove('active');
    setTimeout(()=> {
        background.classList.add('active');
    },1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });
}



navLink.forEach((link, idx)=> {
    link.addEventListener('click', ()=> {
        if(!link.classList.contains('active')) {
            activePage();

            link.classList.add('active')

            setTimeout(()=> {
                sections[idx].classList.add('active');
            },1100);
        }
    });
});

logoLink.addEventListener('click', ()=> {
    if(!navLink[0].classList.contains('active')) {
        activePage();

        navLink[0].classList.add('active');

        setTimeout(()=> {
            sections[0].classList.add('active');
        },1100);
    }
});

const resumeBtn = document.querySelectorAll('.resume-btn');

resumeBtn.forEach((btn, idx)=>{
    btn.addEventListener('click',()=>{

        const resumeDetails = document.querySelectorAll('.resume-details');
        resumeBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(details => {
            details.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');

let index = 0;

const activeProject = () => {
    const imgSlide = document.querySelector('.project-carousel .img-slide');
    const projectDetails = document.querySelectorAll('.project-details');


    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projectDetails.forEach(details => {
        details.classList.remove('active');
    });
    projectDetails[index].classList.add('active');

}

arrowRight.addEventListener('click', ()=> {
    if (index < 3) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 4;
        arrowRight.classList.add('disabled');
    }

    activeProject();
});

arrowLeft.addEventListener('click', ()=> {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activeProject();
});

