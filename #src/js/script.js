var swiper = new Swiper(".mainSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const serviceBtn = document.querySelectorAll('.services-btn')
const serviceModal = document.querySelector('.services-details')

if (serviceModal) {
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
}