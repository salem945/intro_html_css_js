let nm = document.querySelector("#nom")
let prnm = document.querySelector("#prenom")
let moniteur = document.querySelector("#affichage")
let cac = document.querySelector("#euro")
let btn = document.querySelector("#popup")
let pop = document.querySelector("#alert")
let ferm = document.querySelector("#fermer")

nm.addEventListener("input", function () {
    moniteur.innerHTML = "Salut " + nm.value + prnm.value;
})

prnm.addEventListener("input", function () {
    moniteur.innerHTML = "Salut " + nm.value + prnm.value;
})

cac.addEventListener("input", function () {
    moniteur.innerHTML = "Ca fait " + cac.value * 3;
})

btn.addEventListener("click", function () {
    console.log("coucou")
    pop.style.display = "flex";
})

ferm.addEventListener("click", function () {
    console.log("chapai")
    pop.style.display = "none";
})

