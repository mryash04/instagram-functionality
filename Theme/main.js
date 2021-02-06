const light = document.getElementById("light");
const dark = document.getElementById("dark");
const body = document.body;

light.addEventListener("click", () => {
    body.classList.add("light");
    body.classList.remove("dark");
});

dark.addEventListener("click", () => {
    body.classList.add("dark");
    body.classList.remove("light");
});