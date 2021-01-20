const like = document.querySelector(".like");
const image = document.querySelector(".user-image");
const hearts = document.querySelector(".fa-heart");

let likeCount = 0;

const heartLike = (e) => {
    const heart = document.createElement("i");
    heart.classList.add("fa");
    heart.classList.add("fa-heart");
    image.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 700);
};

image.addEventListener("dblclick", (e) => {
    like.innerHTML = likeCount++;
    hearts.style.color = "red";

    heartLike(e);
});

hearts.addEventListener("click", () => {
    hearts.style.color = "red";

    if(likeCount >= 0){
        like.innerHTML = likeCount--;
        hearts.style.color = "black";
    };
});