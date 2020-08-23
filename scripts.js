let share_wrapper = document.getElementById("share-wrapper");
let share_popup = document.getElementById("share-popup");
let main = document.getElementById("main");
share_wrapper.addEventListener('click', () => {
    if (share_popup.style.display == "none")
    {
        share_popup.style.display="flex";
    }
    else {
        share_popup.style.display="none";
    }
});