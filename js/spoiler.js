const spoiler = document.querySelector(`.education.spoiler`);

const spoilerTitle = spoiler.querySelector('.spoiler__title');

const spoilerContent = spoiler.querySelector('.spoiler__content');

spoilerTitle.addEventListener('click', function () {
    const enabled = spoiler.classList.contains('spoiler--disabled');
    if (!enabled) {
        spoiler.classList.add('active');

        spoilerContent.addEventListener('animationend', function () {
            spoiler.classList.remove('active');
        });

        spoiler.classList.toggle('hidden');
        spoiler.classList.toggle('shown');
    }
});