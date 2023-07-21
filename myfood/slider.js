let slides = document.querySelectorAll(".images")
console.log(slides)
let currentIndex = 0;
let gauche = document.querySelector("#gauche");
let droite = document.querySelector('#droite');
function afficherImage(numero) {
    for (i of [0, 1, 2]) {
        if (i == numero) {
            slides[i].style.display = "block"
        } else {
            slides[i].style.display = "none"
        }
    }
}
droite.addEventListener("click", function () {
    if (currentIndex == 2) {
        currentIndex = 0
        afficherImage(currentIndex)
    } else {
        currentIndex = currentIndex + 1
        afficherImage(currentIndex)
    }
    // currentIndex = currentIndex + 1
    // afficherImage(currentIndex)
    // currentIndex += 1
    // currentIndex++

})
gauche.addEventListener("click", function () {

    if (currentIndex == 0) {
        currentIndex = 2
        afficherImage(currentIndex)
    } else {
        currentIndex = currentIndex - 1
        afficherImage(currentIndex)
    }
})

afficherImage(currentIndex)
// if currentIndex = 2
// else afficherImage(currentIndex)