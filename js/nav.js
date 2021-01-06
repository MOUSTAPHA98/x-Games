var myNav = document.getElementById('mynav');

window.onscroll = function () { 
    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500 )
    {
        myNav.classList.add("fixed-top");
    } 
    else {
        myNav.classList.remove("fixed-top");
    }
};
