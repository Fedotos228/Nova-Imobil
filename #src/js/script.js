var swiper = new Swiper(".mainSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const serviceBtn = document.querySelectorAll('.services-btn')
const serviceModal = document.querySelector('.services-details')



if (serviceModal) {
    serviceBtn.forEach(serviceBtn => {
        serviceBtn.addEventListener("click", function(event) {
            event.preventDefault();
            serviceModal.classList.add('open');
            document.body.classList.add('lock');
        })
        window.addEventListener("click", function(event) {
            if (event.target == serviceModal) {
                serviceModal.classList.remove("open");
                document.body.classList.remove('lock');
            }
        })
    })

}

const counters = document.querySelectorAll('.statistics-counter');
const statistics = document.querySelector('.statistics')
const speed = 100;

window.addEventListener('scroll', () => {
    const statisticPos = statistics.offsetTop;
    const scrollPos = window.scrollY;

    if (scrollPos >= statisticPos - 300) {
        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('akhi');
                const data = +counter.innerText;

                const time = value / speed;
                if (data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = value;
                }

            }
            animate();
        });
    }
});

const headerLeft = document.querySelector('.upper-header__left');
const headerNav = document.querySelector('.header-nav');

window.addEventListener('resize', () => {
    adaptive_function();
});

function adaptive_header(w, h) {
    var upperHeaderBody = document.querySelector('.upper-header__body');

    var result = headerLeft.classList.contains('done');
    if (w < 767) {
        if (!result) {
            headerLeft.classList.add('done');
            headerNav.insertBefore(headerLeft, headerNav.lastChild);
        }
    } else {
        if (result) {
            headerLeft.classList.remove('done');
            upperHeaderBody.insertBefore(headerLeft, upperHeaderBody.firstChild);
        }
    }
}

function adaptive_function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    adaptive_header(w, h);
}
adaptive_function();

const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerNav.classList.toggle('active')


    window.addEventListener("click", function(event) {
        if (event.target != burger || event.target != headerNav) {
            burger.classList.remove("active")
            headerNav.classList.remove("active");
        }
    })
})

const filterItemControl = document.querySelectorAll('.filter-item__title')

if (filterItemControl[0]) {
    filterItemControl.forEach(control => {
        control.addEventListener('click', () => {
            control.classList.toggle('open')
            control.nextElementSibling.classList.toggle('open')
        });
        const submenuItem = control.nextElementSibling.querySelectorAll('.submenu-list__item')
        submenuItem.forEach(submenuItem => {
            submenuItem.addEventListener('click', () => {
                submenuItem.classList.toggle('active')
            })
        })
    });
}