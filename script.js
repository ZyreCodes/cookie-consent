const close_button = document.getElementById("close_button");
const cookie_button = document.getElementById("cookie_button");
const cookie_box = document.getElementById("cookie_box");

let cookie_accept = false

close_button.addEventListener("click", () => {
    cookie_box.classList.toggle("hide");
});

cookie_button.addEventListener("click", () => {
    cookie_box.classList.toggle("hide");
    cookie_accept = true
});

if (performance.navigation.type == performance.navigation.TYPE_RELOAD && cookie_accept == true) {
    cookie_box.style.display = "none";
}
else {
    console.log("This page is not reloaded");
}