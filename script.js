var user_pic = document.getElementsByClassName("user_pic")[0];
var sub = document.getElementById("sub");

user_pic.addEventListener("click", ()=>{
    sub.classList.toggle("open_menu");
})