$(window).on('load', function(){
    "use strict";
    $("body").addClass("loaded");
    document.body.classList.add(localStorage.getItem("pageColor"));
    metaThemeColor.setAttribute("content", localStorage.getItem("pageTheme"));

   if (document.body.classList.contains("theme01-mod")) {
       
        mobBImgLg.style.display = "block";
        mobRImgLg.style.display = "none";
        mobGreenImgLg.style.display = "none";
        mobGrayImgLg.style.display = "none";
        mobBImgS.style.display = "block";
        mobRImgS.style.display = "none";
        mobGreenImgS.style.display = "none";
        mobGrayImgS.style.display = "none";
   }
   else{}

   if (document.body.classList.contains("theme02-mod")) {
       
        mobBImgLg.style.display = "none";
        mobRImgLg.style.display = "block";
        mobGreenImgLg.style.display = "none";
        mobGrayImgLg.style.display = "none";
        mobBImgS.style.display = "none";
        mobRImgS.style.display = "block";
        mobGreenImgS.style.display = "none";
        mobGrayImgS.style.display = "none";

    }
    else{}

    if (document.body.classList.contains("theme03-mod")) {
       
        mobBImgLg.style.display = "none";
        mobRImgLg.style.display = "none";
        mobGreenImgLg.style.display = "block";
        mobGrayImgLg.style.display = "none";
        mobBImgS.style.display = "none";
        mobRImgS.style.display = "none";
        mobGreenImgS.style.display = "block";
        mobGrayImgS.style.display = "none";

    }
    else{}

    if (document.body.classList.contains("theme04-mod")) {
       
        mobBImgLg.style.display = "none";
        mobRImgLg.style.display = "none";
        mobGreenImgLg.style.display = "none";
        mobGrayImgLg.style.display = "block";
        mobBImgS.style.display = "none";
        mobRImgS.style.display = "none";
        mobGreenImgS.style.display = "none";
        mobGrayImgS.style.display = "block";

    }
    else{}



});