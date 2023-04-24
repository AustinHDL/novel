var date = new Date();
var hour = date.getHours();
var navbackground = document.getElementById("global-nav-background");
var navcolor = document.getElementById("global-nav-title");

    if (hour >= 6 && hour < 18) {
        // 正常模式
        document.body.style.backgroundColor = '#cae0cb';
        document.body.style.color = '#1d1d1f';
        navbackground.style.backgroundColor = '#fffff';
        navcolor.style.color = '#000000';
    } else {
        // 黑暗模式
        document.body.style.backgroundColor = '#181818';
        document.body.style.color = '#696e6f';
        navbackground.style.backgroundColor = '#000000';
        navcolor.style.color = '#ffffff';
    }