localStorage.setItem("name", "John Doe");
localStorage.getItem("name");
const test = document.querySelector("#test");
test.innerHTML = localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();
//change mode
const currentMode = localStorage.getItem("mode");
if(currentMode) {
    const body = document.querySelector("body");
    body.classList.add(currentMode);
}
const buttonChangeMode = document.querySelector("#change-mode");
buttonChangeMode.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    if(currentMode) {
        localStorage.setItem("mode", "");
    } else {
        localStorage.setItem("mode", "dark");
    }
});