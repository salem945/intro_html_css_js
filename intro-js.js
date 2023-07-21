console.log("coucou")
let nm = document.querySelector("#nom")
let prnm = document.querySelector("#prenom")
let moniteur = document.querySelector("#ecran")

nm.addEventListener("input", function () {
    moniteur.innerHTML = "Salut " + nm.value;
})

prnm.addEventListener("input", function () {
    moniteur.innerHTML = "Salut " + nm.value + prnm.value;
})
