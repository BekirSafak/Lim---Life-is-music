const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    this.classList.toggle('isActive');

    const menuButtons = document.querySelector('.menuButtons');
    menuButtons.classList.toggle('active')
})


const links = document.querySelectorAll('.links');

links.forEach(buttons => {
    buttons.addEventListener('click', function () {
        links.forEach(btn => {
            btn.classList.remove('activeLinks');
            this.classList.add('activeLinks');
        })
    })
})


