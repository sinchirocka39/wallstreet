// Custom Scripts
// Custom scripts
// Mobile burger
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            // body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            // body.classList.remove('locked')
        }
    })
    // Breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            // body.classList.remove('locked')
        }
    })
}
burgerMenu()


// Fixed menu
function fixedNav() {
    const nav = document.querySelector('nav')
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)




// Click counter
document.addEventListener('click', function chnageCount(evt) {
    let counterBtn = evt.target;

    if (!counterBtn.closest('.js-counter-btn')) return;

    let counterInput = counterBtn.closest('.js-counter')
        .querySelector('.js-counter-value');

    switch (counterBtn.getAttribute('data-action')) {
        case 'plus':
            if (Number(counterInput.value) > 8) {
                return counterInput.value;
            } else {
                counterInput.value = Number(counterInput.value) + 1;
                break;
            }
        case 'minus':
            if (Number(counterInput.value) < 1) {
                return counterInput.value;
            } else {
                counterInput.value = Number(counterInput.value) - 1;
                break;
            }
        case 'max':
            counterInput.value = 9;
            break;
    }
});




// Swiper
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 3,
    // spaceBetween: 30,
    // slidesPerGroup: 3,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
            slidesPerGroup: 1
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1450: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});




// Accordion
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 
