const shareIcon = document.querySelector(".share-icon-box");
const shareTab = document.querySelector(".share-tab");

shareIcon.addEventListener("click", () => {
    shareTab.classList.toggle("active");
});
