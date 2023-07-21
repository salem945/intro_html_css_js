let navigation = document.querySelector("#navv")
let mennu = document.querySelector("#lemenu")
let fermer = document.querySelector("#close")
let special = document.querySelector("#lemenu.ouvert")

console.log("js chargé")
navigation.addEventListener("click", function () {

    if (mennu.classList.contains('ouvert')) {
        mennu.classList.remove('ouvert')
    }
    else {
        mennu.classList.add('ouvert');
    }



    // console.log("chapai")
    // mennu.style.display = "flex";
})

fermer.addEventListener("click", function () {
    console.log("salem")
    mennu.classList.remove('ouvert');
})









