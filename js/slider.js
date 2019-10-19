const sliderItems = document.querySelectorAll('.slider__item');

let currentIndex = 0

function getNewIndex(n) {
    return (n + sliderItems.length) % sliderItems.length;
}

function goBack() {
    const newIndex = getNewIndex(currentIndex - 1);
    sliderItems[newIndex].classList.add('to-left');

    sliderItems[newIndex].addEventListener('animationend', function () {
        sliderItems[newIndex].classList.remove('to-left');
        sliderItems[currentIndex].classList.remove('active');
        currentIndex = newIndex;
        sliderItems[currentIndex].classList.add('active');
    });
}

function goFoward() {
    const newIndex = getNewIndex(currentIndex - 1);
    sliderItems[newIndex].classList.add('to-right');

    sliderItems[newIndex].addEventListener('animationend', function () {
        sliderItems[newIndex].classList.remove('to-right');
        sliderItems[currentIndex].classList.remove('active');
        currentIndex = newIndex;
        sliderItems[currentIndex].classList.add('active');
    });
}

const buttonBack = document.querySelector('.slider__btn--back');
buttonBack.addEventListener('click', goBack);

const buttonFoward = document.querySelector('.slider__btn--foward');
buttonFoward.addEventListener('click', goFoward);



const mode = document.querySelector('.mode');

sliderItems.forEach(function (item) {
    const itemProject = item.querySelector('.slider__item-project');
    itemProject.addEventListener('click', function () {
        const placeholder = this.querySelector('.slider__project-placeholder');
        placeholder.classList.add('inactive');

        const project = this.querySelector('.slider__project-wrapper');
        project.classList.remove('inactive');

        const slider = document.querySelector('.slider');
        slider.classList.add('project-mode');

        buttonBack.classList.add('project-mode');
        buttonFoward.classList.add('project-mode');

        mode.classList.remove('inactive');
    });
});

const modeBack = mode.querySelector('.mode__back');

modeBack.addEventListener('click', function () {
    const slider = document.querySelector('.slider');
    slider.classList.remove('project-mode');

    const currentActive = slider.querySelector('.active');    

    const placeholder = currentActive.querySelector('.slider__project-placeholder');
    placeholder.classList.remove('inactive');

    const project = currentActive.querySelector('.slider__project-wrapper');
    project.classList.add('inactive');    

    buttonBack.classList.remove('project-mode');
    buttonFoward.classList.remove('project-mode');

    mode.classList.add('inactive');
});

const modeMobile = mode.querySelector('.mode__toggle');

modeMobile.addEventListener('click',function(){
    const slider = document.querySelector('.slider');

    const currentActive = slider.querySelector('.active');
    if(currentActive.classList.contains('mobile')){
        currentActive.classList.remove('mobile');
        modeMobile.innerHTML = 'MOBILE';
    }else{
        currentActive.classList.add('mobile');
        modeMobile.innerHTML = 'DESKTOP';
    }
});