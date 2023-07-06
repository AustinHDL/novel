var date = new Date();
var hour = date.getHours();
var navbackground = document.getElementById("global-nav-background");
var navcolor = document.getElementById("global-nav-title");
var list = document.getElementById("title-list");

    if (hour >= 6 && hour < 18) {
        // 正常模式
        document.body.style.backgroundColor = '#cae0cb';
        document.body.style.color = '#172815';
        navbackground.style.backgroundColor = '#333333';
        navcolor.style.color = '#cecece';
    } else {
        // 黑暗模式
        document.body.style.backgroundColor = '#191919';
        document.body.style.color = '#676d73';
        navbackground.style.backgroundColor = '#333333';
        navcolor.style.color = '#cecece';
    }