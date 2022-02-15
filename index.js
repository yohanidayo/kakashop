var RevContent1 = document.getElementById("rev_content1");
var RevContent2 = document.getElementById("rev_content2");
var InnerBar = document.getElementById("inner_bar");

var Main1 = document.getElementById("Main1");
var Main2 = document.getElementById("Main2");
var Main3 = document.getElementById("Main3");




function rev1() {
    RevContent1.style.transform = "translateX(-1400px)";
    RevContent2.style.transform = "translateX(-1400px)"
    InnerBar.style.transform ="translateX(80px)";
}

function rev2() {
    RevContent1.style.transform = "translateX(0px)";
    RevContent2.style.transform = "translateX(0px)"
    InnerBar.style.transform ="translateX(0px)";
}

function Btn1on() {
    Main1.style.transform = "translateX(0px)";
    Main2.style.transform = "translateX(0px)";
}

function Btn2on() {
    Main1.style.transform = "translateX(-1440px)";
    Main2.style.transform = "translateX(-1440px)";
}


