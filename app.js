const textarea = document.getElementById("textarea");
const totalchar = document.getElementById("totalchar");
textarea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalchar.innerText = textarea.value.length;
}
