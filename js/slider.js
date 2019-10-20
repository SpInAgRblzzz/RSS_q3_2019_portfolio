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

modeMobile.addEventListener('click', function () {
    const slider = document.querySelector('.slider');

    const currentActive = slider.querySelector('.active');
    if (currentActive.classList.contains('mobile')) {
        currentActive.classList.remove('mobile');
        modeMobile.innerHTML = 'MOBILE';
    } else {
        currentActive.classList.add('mobile');
        modeMobile.innerHTML = 'DESKTOP';
    }
});


window.addEventListener('resize', function () {

    if (document.documentElement.clientWidth <= 830) {
        sliderItems.forEach(function (item) {
            item.querySelector('.spoiler').classList.remove('spoiler--disabled');
        });



    } else {
        sliderItems.forEach(function (item) {
            item.querySelector('.spoiler').classList.add('spoiler--disabled');
        });
    }
});

const swipeDetect = (el) => {
    
    let surface = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let dist = 0;
    let threshhold = 150;

    let startTime = 0;
    let elapsedTime = 0;
    let restraint = 100;
    let allowedTime = 300
    
    surface.addEventListener('mousedown', function (e) {
        
        dist = 0;
        startX = e.pageX;
        startY = e.pageY;
        startTime = new Date().getTime();

        e.preventDefault();        
    });

    surface.addEventListener('mouseup', function (e) {
        
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            
            if (Math.abs(distX) >= threshhold && Math.abs(distY) <= threshhold) { 
                if(distX > 0) {
                   
                    goBack()
                } else {
                    
                    goFoward()
                }
            }
        }

        e.preventDefault();        
    });
}

const slider = document.querySelector('.slider');
swipeDetect(slider);