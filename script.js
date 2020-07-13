const shareIcon = document.querySelector(".share-icon-box");
const shareTab = document.querySelector(".share-tab");
const contentFooter  = document.querySelector(".content__footer");

shareIcon.addEventListener("click", () => {
    if(screen.width <= 900) {
        contentFooter.style.backgroundColor = "#48556a";
    }

    shareTab.classList.toggle("active");
});
