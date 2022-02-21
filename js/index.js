function toplist(t) {
    var content = document.getElementById("content")
    var tul = content.getElementsByTagName("ul");
    var lil = tul[0].getElementsByTagName("li");
    for (let j = 0; j < lil.length; j++) {
        if (t == j) {
            lil[j].className = "contentclo";
        } else {
            lil[j].className = "";
        }
    }
}
function bottomlist(p) {
    var btnul = document.getElementById("btnul")
    var cul = btnul.getElementsByTagName("ul");
    var lis = cul[0].getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        var liem = lis[i].getElementsByTagName("em");
        if (p == i) {
            liem[0].className = "bgc";
        } else {
            liem[0].className = "";
        }
    }
}


//轮播图实现
let bgimage = document.getElementById("bgimage");
let img = bgimage.getElementsByTagName("img")[0];
let ul = bgimage.getElementsByTagName("ul")[0];
let li = ul.getElementsByTagName("li");
let i = 1;  //用于控制显示那张图
let o = 10;//最大图片数
let time;//创建定时器
let leftBanner = document.getElementById("leftBanner");
let rightBanner = document.getElementById("rightBanner");

function show(num) {
    if (Number(num)) {
        i = num;
        clearTimeout(time);
    }
    for (let j = 1; j <= o; j++) {
        let lia = li[j - 1].getElementsByTagName("a");
        if (j == i) {
            document.getElementById("img_" + i).style.display = "block";
            lia[0].className = "abgcolor";
        } else {
            document.getElementById("img_" + j).style.display = "none";
            lia[0].className = "";
        }
    }
    // leftBanner.onclick=function(){
    //     if(i == 1){
    //         i = o
    //     }
    //     else{
    //         i--
    //     }
    //     show(i);
    // }
    // console.log(i);
    if (i == o) {
        i = 1
    }
    else {
        i++
    }

    time = setTimeout("show()", 2000);//调用定时器
}
window.onload = show;


//回到顶部实现
function btop() {
    var btnTop = document.getElementById("btnTop");
    var timer = null;

    window.onscroll = function () {
        var backTop = getScrollTop();
        if (backTop >= 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    };
}
btop()
btnTop.onclick = function () {
    timer = setInterval(function () {
        var backTop = getScrollTop();
        var speedTop = backTop / 10;
        setScrollTop(backTop - speedTop);
        if (backTop == 0) {
            clearInterval(timer);
        }
    }, 30);
};
var getScrollTop = function () {
    var sTop;
    if (document.compatMode == "BackCompat") {
        sTop = document.body.scrollTop;
    }
    else {
        sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
    }
    return sTop;
};
var setScrollTop = function (top) {

    if (document.compatMode == "BackCompat") {
        document.body.scrollTop = top;
    }
    else {
        if (document.documentElement.scrollTop == 0) {
            document.body.scrollTop = top;
        } else {
            document.documentElement.scrollTop = top;
        }
    }
}