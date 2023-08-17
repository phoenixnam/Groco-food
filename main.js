var searchForm = document.querySelector('.search-form');
var shoppingCart = document.querySelector('.shopping-cart');
var loginForm = document.querySelector('.login-form');
var menu = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick =() =>{
    searchForm.classList.toggle('active')
    menu.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
}

document.querySelector('#menu-btn').onclick =() =>{
    menu.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
}

document.querySelector('#cart-btn').onclick =() =>{
    shoppingCart.classList.toggle('active')
    menu.classList.remove('active')
    searchForm.classList.remove('active')
    loginForm.classList.remove('active')
}

document.querySelector('#login-btn').onclick =() =>{
    loginForm.classList.toggle('active')
    menu.classList.remove('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
}

window.onscroll = () => {
    menu.classList.remove('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
}


    var swiper = new Swiper(".review-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
       
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            }
        }
    });