var myNav = document.getElementById('mynav');

window.onscroll = function () { 
    if (document.body.scrollTop >= 750 || document.documentElement.scrollTop >= 750 )
    {
        myNav.classList.add("fixed-top");
    } 
    else {
        myNav.classList.remove("fixed-top");
    }
};
