// start header

let panels = document.querySelectorAll(".panel");
let fronts = document.querySelectorAll(".front");
let backs = document.querySelectorAll(".back");
let replay_btn = document.querySelector(".replay");

const mirrorTL = gsap.timeline();
const titleTL = gsap.timeline();

gsap.set(replay_btn, { opacity: 0 });
replay_btn.addEventListener("click", (e) => {
  mirrorTL.restart();
  titleTL.restart();
  gsap.to(e.target, 0.5, { opacity: 0 });
  console.log(e.target);
});

mirrorTL
  .to(fronts, 2.5, { backgroundPosition: "30px 0px", ease: "expo.inOut" })
  .to(panels, 2.5, { z: -300, rotationY: 180, ease: "expo.inOut" }, "-=2.3")
  .from(
    backs,
    2.5,
    {
      backgroundPosition: "-30px 0px",
      ease: "expo.inOut",
      onComplete: () => {
        gsap.to(replay_btn, 1, { opacity: 1 });
      },
    },
    "-=2.3"
  );

titleTL
  .to(".layer", 1, { clipPath: "polygon(3% 0, 100% 0%, 100% 100%, 0% 100%" })
  .to(".layer h1", 2, { x: 400, ease: "expo.inOut" }, "-=0.5")
  .to(".cta", 2, { x: 0, ease: "expo.inOut" }, "-=2");

// end header

var swiper = new Swiper(".mySwiper", {
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    868: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

// let slider ;
// let angleOffset = 0 ;
// let unitAngle ;
// let lastMousePosition ;
// let curMousePosition ;
// let deltaMouse ;
// let clock ;
// let lastFrameTime = NaN ;
// let velocity = 0;
// let meanPosition = 0 ;
// let position = 0;
// const springConstant = 80 ;
// const sliderMass = 1 ;
// const dampingForce = 10 ;
// const acceleration = -60 ;
// const mouseSensitivity = 0.8 ;
// const touchSensitivity = 0.25 ;
// const MAX_VELOCITY = 1000 ;

// window.onload = () => {
//     let cards = [...document.querySelectorAll(".card")];
//     slider = document.querySelector(".circular-slider") ;
//     distribute(cards);
//     window.addEventListener("mousedown",handleMouseDown);
//     window.addEventListener("touchstart",handleTouchStart);
//     window.addEventListener("touchmove",handleTouchMove);
//     window.addEventListener("touchend",handleTouchEnd);
//     window.addEventListener("wheel",throttle(handleWheel,300));
// };

// function handleMouseDown(event){
//     cancelAnimation();
//     lastMousePosition = event.clientX ;
//     curMousePosition = event.clientX ;
//     deltaMouse = 0 ;
//     window.addEventListener("mousemove",handleMouseMove);
//     window.addEventListener("mouseup",handleMouseUp);
// }

// function handleMouseMove(event){
//     curMousePosition = event.clientX ;
//     let delta = lastMousePosition - curMousePosition;
//     deltaMouse = curMousePosition - lastMousePosition ;
//     lastMousePosition = curMousePosition ;
//     angleOffset += delta * mouseSensitivity ;
//     lastMouseMoveTime = Date.now();
//     setAngleOffset(angleOffset);
// }

// function handleMouseUp(){
//     window.removeEventListener("mousemove",handleMouseMove);
//     window.removeEventListener("mouseup",handleMouseUp);
//     meanPosition = roundToFactor(angleOffset,unitAngle) ;
//     velocity = - deltaMouse * 50 * mouseSensitivity ;
//     position = angleOffset ;
//     clock = requestAnimationFrame(spin);
// }

// function handleTouchStart(event){
//     cancelAnimation();
//     lastMousePosition = event.touches[0].clientX ;
//     curMousePosition = event.touches[0].clientX ;
//     deltaMouse = 0 ;
// }

// function handleTouchMove(event){
//     curMousePosition = event.touches[0].clientX ;
//     let delta = lastMousePosition - curMousePosition;
//     deltaMouse = curMousePosition - lastMousePosition ;
//     lastMousePosition = curMousePosition ;
//     angleOffset += delta * touchSensitivity ;
//     setAngleOffset(angleOffset);
// }

// function handleTouchEnd(){
//     meanPosition = roundToFactor(angleOffset,unitAngle) ;
//     velocity = - deltaMouse * 50 * touchSensitivity ;
//     position = angleOffset ;
//     clock = requestAnimationFrame(spin);
// }

// let decayClock = 0;

// function throttle(fn, wait) {
//     var time = Date.now();
//     return function(event) {
//       if ((time + wait - Date.now()) < 0) {
//         fn(event);
//         time = Date.now();
//       }
//     }
// }

// function handleWheel(event){
//     cancelAnimation();
//     velocity += 100 * Math.sign(event.deltaY) ;
//     clock = requestAnimationFrame(spin);
// }

// let roundToFactor = (value,factor) => Math.round(value/factor)*factor ;

// function distribute(cards) {
//     if(cards.length == 0)
//         return ;
//     let angle = Math.PI*2/cards.length ;
//     unitAngle = 360 / cards.length ;
//     let radius = cards[0].offsetWidth/(2*Math.tan(angle/2)) + 16;
//     slider.style.transformOrigin = `center center ${-radius}px` ;
//     cards.forEach((card,index)=> {
//         let tiltAngle = index*angle ;
//         let deltaZ = radius * (1 - Math.cos(tiltAngle));
//         let deltaY = radius * Math.sin(tiltAngle) ;
//         card.style.transform = `
//             translate3d(${deltaY}px,0px,${-deltaZ}px)
//             rotateY(${tiltAngle*180/Math.PI}deg)
//         ` ;
//     });
// }

// function setAngleOffset(newOffset){
//     angleOffset = newOffset ;
//     slider.style.transform = `rotateY(${-angleOffset}deg)` ;
// }

// function snap(currentFrameTime){
//     lastFrameTime = lastFrameTime || (currentFrameTime ) ;
//     let deltaTime = (currentFrameTime - lastFrameTime)/1000 ;

//     let displacement = position - meanPosition ;
//     let netForce = - displacement * springConstant - velocity*dampingForce ;
//     let acceleration = netForce / sliderMass ;
//     velocity += acceleration * deltaTime ;
//     position += velocity * deltaTime ;
//     angleOffset = position ;
//     setAngleOffset(angleOffset);

//     lastFrameTime = currentFrameTime ;
//     if(Math.abs(acceleration) > 0.1 ){
//         clock = requestAnimationFrame(snap);
//     } else {
//         meanPosition = roundToFactor(angleOffset,unitAngle);
//         angleOffset = meanPosition ;
//         lastFrameTime = NaN ;
//         animating = false ;
//     }
// }

// function cancelAnimation(){
//     cancelAnimationFrame(clock);
//     lastFrameTime = NaN ;
// }

// function spin(currentFrameTime){
//     lastFrameTime = lastFrameTime || (currentFrameTime ) ;
//     let deltaTime = (currentFrameTime - lastFrameTime)/1000 ;

//     velocity += Math.sign(velocity) * acceleration * deltaTime ;
//     angleOffset += velocity * deltaTime ;
//     position = angleOffset ;
//     setAngleOffset(angleOffset);

//     animating = true ;

//     lastFrameTime = currentFrameTime ;
//     if(Math.abs(velocity) > 10){
//         clock = requestAnimationFrame(spin);
//     } else {
//         meanPosition = roundToFactor(angleOffset,unitAngle);
//         position = angleOffset ;
//         lastFrameTime = NaN ;
//         clock = requestAnimationFrame(snap);
//     }
// }

// (()=>{
// var word ;
// var orignal;
// var text="";
// const rotationGap = 4;
// var clock2 ;
// var j;
// var l;
// var c;
// var p;

// window.addEventListener("load",() => {
//     word = document.querySelector(".name");
//     orignal = `itsGoodBits`;
//     l=orignal.length;
//     j=c=p=0;
//     clock2 = setInterval(shuffle,30);
// });

// function shuffle(){
//     if(p-->0) return;
//     text="";
//     for(var k=0;k<j;k++) text += orignal[k];
//     for(var k=j;k<j+4 && k<l;k++){
//         text += String.fromCharCode(
//             (Math.random()>0.5)?
//             (Math.floor(Math.random()*26) + 65):
//             (Math.floor(Math.random()*26) + 97)
//         );
//     }
//     c++;
//     if(c==rotationGap){
//         c=0;
//         j += 1;
//     }
//     word.innerText = text ;
//     if(j>=l+1){
//         j=0;
//         c=0;
//         p=100;
//     }
// }
// })();

// movies slider

// end movies slider
// hello

jQuery(function ($) {
  var $body = $(".hero"),
    $heroA = $("#hero-section-a img"),
    $heroB = $("#hero-section-b img"),
    $heroC = $("#hero-section-c img");

  TweenMax.set($heroA, { transformStyle: "preserve-3d" });
  TweenMax.set($heroB, { transformStyle: "preserve-3d" });
  TweenMax.set($heroC, { transformStyle: "preserve-3d" });

  $body.mousemove(function (e) {
    var sxPos = (e.pageX / $body.width()) * 100 - 50;
    var syPos = (e.pageY / $body.height()) * 100 - 50;
    console.log("x:" + sxPos + ", y:" + syPos);
    TweenMax.to($heroA, 1, {
      rotationY: 0.05 * sxPos,
      rotationX: 0.2 * syPos,
      rotationZ: "-0.1",
      transformPerspective: 500,
      transformOrigin: "center center",
    });
    TweenMax.to($heroB, 1, {
      rotationY: 0.1 * sxPos,
      rotationX: 0.15 * syPos,
      rotationZ: 0,
      transformPerspective: 500,
      transformOrigin: "center center",
    });
    TweenMax.to($heroC, 1, {
      rotationY: 0.15 * sxPos,
      rotationX: 0.1 * syPos,
      rotationZ: 0.1,
      transformPerspective: 500,
      transformOrigin: "center center",
    });
  });
});

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 25,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// channel

// pricing plan



// pricing plan