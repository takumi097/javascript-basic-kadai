const Btn = document.getElementById("btn");
const text =document.getElementById("text");

Btn.addEventListener("click", () => {
    setTimeout(() => {
    const Text = document.getElementById("text");
    Text.textContent = "ボタンをクリックしました"
}, 2000);
})