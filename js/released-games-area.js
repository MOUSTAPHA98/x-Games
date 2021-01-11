var released_game_img = document.querySelector('.released-game-img');
var released_game_name = document.querySelector('.released-game-name');
var swiper_slide_game = document.querySelectorAll(".swiper-slide.game");

// swiper_slide_game.forEach(element => {
//     element.onclick = function(){
//         "use strict";
//         released_game_img.style.backgroundImage = "url(" + element.firstElementChild.getAttribute('src') + ")";
//         released_game_name.children[0].innerHTML = element.children[1].children[1].innerHTML;
//     }
// });

setInterval(() => {
    var swiper_slide_active = document.querySelector('.game.swiper-slide-active');
    released_game_img.style.backgroundImage = "url(" + swiper_slide_active.firstElementChild.getAttribute('src') + ")";
    released_game_name.children[0].innerHTML = swiper_slide_active.children[1].children[1].innerHTML;
}, 100);




