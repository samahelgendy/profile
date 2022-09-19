var btn = document.querySelector(".top button");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
   })
  }

var lists = document.querySelectorAll(".nav .list li");
lists.forEach(function (list) {
    list.onclick = function () {
        list.classList.toggle("active");
    }
    
})

var btns = document.querySelectorAll(".section .ontime button");

var parg = document.querySelector(".section .ontime p.solid");

btns.forEach(function (btn) {
    btn.onclick = function () {
       parg.innerHTML += " their focus can be on the writing process and using the four essential elements.";
        btn.innerHTML = "Learn Less";
        btn.style.backgroundColor = "navy";
    }
});
var addNumber = document.querySelector(".wantto .add");
var content = document.querySelector(".wantto label");
var names = ["samah " ,"asmaa " , "nour " ,"aya " ,"nesma"];
console.log(typeof content);
addNumber.onclick = function () {
    for (var x = 0; x < names.length; x++){
        content.innerHTML += names[x];
    }
    if (content.innerHTML === names.length) {
        content.innerHTML = "";
    }
    
}


