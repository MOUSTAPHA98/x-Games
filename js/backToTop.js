var mybutton = document.getElementById("myBtn");

window.onscroll = function () { 
    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500) {
      mybutton.style.display = "block";
    } 
    else {
      mybutton.style.display = "none";
    }
};


function topFunction() {
  document.documentElement.scrollTop = 0;
}