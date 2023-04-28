// when nav link is clicked add active class
// remove current active class
let menuImg = document.querySelector(".menuImg");
let closeImgBox = document.querySelector(".closeImgBox");
let goTop = document.querySelector(".goTop");
let header = document.querySelector(".header")
let navbar = document.querySelector(".navbar")
let popUp = document.querySelector(".popUp");
let closePopUp = document.querySelector(".closePopUp");
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
});

// if menu onclick view navbar 
menuImg.onclick = () =>{
  navbar.classList.toggle("active");
}

closeImgBox.onclick = () =>{
  navbar.classList.remove("active");
}

window.onscroll = () =>{
  navbar.classList.remove("active");

  if (window.scrollY > 150) {
    header.classList.add("active");
  } else { 
    header.classList.remove("active");
  };
}

   // window onload show popup
   window.onload = () => {
    popUp.classList.add("active");
    setTimeout(() => {
      popUp.classList.remove("active");
     }, 5000);
   }  

  //  remove popUp 
   closePopUp.onclick = () =>{
    popUp.classList.remove("active");
  }

// hero swiper slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

        // new featured menu slide 
        var swiper = new Swiper(".mySlide", {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
      },
      breakpoints: {
       
        200: {
          slidesPerView: 1,
        },
        
        567: {
          slidesPerView: 2,
        },
         992: {
          slidesPerView: 2,
        },
      
      },
          });