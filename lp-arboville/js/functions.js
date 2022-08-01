import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const cpf = document.querySelector('.maskcpf')



cpf.addEventListener('keypress', () => {
    let cpfLenght = cpf.value.length

    if (cpfLenght === 3 || cpfLenght === 7) {
        cpfLenght.value += '.'
    } else if (cpfLenght === 11) {
        cpfLenght.value += '-'
    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});