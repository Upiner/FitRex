
var a = document.getElementById("bada");
var b = document.getElementById("badb");
var c = document.getElementById("badc");
var d = document.getElementById("badd");

window.onscroll = function(){

switch(true){
    case (window.scrollY >= 99) :
        a.className = "bad_header";
        b.className = "bad_wrapper";
        c.className = "bad_header__logo-pic";
        d.className = "bad_header__list";
        break;
    case (window.scrollY <= 99) :
        a.className = "header";
        b.className = "wrapper";
        c.className = "header__logo-pic";
        d.className = "header__list";
        
        break;
  }
}
