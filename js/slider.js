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

