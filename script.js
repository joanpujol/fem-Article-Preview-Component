const shareActive = document.getElementById("share-active");
const shareUnactive = document.getElementById("share-unactive");

shareActive.style.display = "none";

document.getElementById("share-action").addEventListener("click", () => {
    shareActive.style.display = "";
    shareUnactive.style.display = "none";
});

document.getElementById("share-action-cancel").addEventListener("click", () => {
    shareActive.style.display = "none";
    shareUnactive.style.display = "";
});
