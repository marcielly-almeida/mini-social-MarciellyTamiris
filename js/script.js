const likeBtn = document.querySelector("#likeBtn");
const countSpan = document.querySelector("#likeCount");

let count = 0;
let liked = false;

likeBtn.addEventListener("click", function () {

  if (!liked) {
    liked = true;
    likeBtn.style.background = "#00a8ff";
    likeBtn.style.color = "#fff";
    count++;
  } else {
    liked = false;
    likeBtn.style.background = "#353b48";
    likeBtn.style.color = "#f5f6fa";
    count--;
  }

  countSpan.textContent = count;
});