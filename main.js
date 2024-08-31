const openModalBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector("#close");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let styles = e.currentTarget.classList;
    let myModal = document.querySelector("#myModal");
    if (styles.contains("openModalBtn")) {
      myModal.classList.add("show");
    } else if (styles.contains("close")) {
      myModal.classList.remove("show");
    }
  });
});
