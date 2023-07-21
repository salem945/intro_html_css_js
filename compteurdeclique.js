let compt = document.querySelector("#compteur")
let btn = document.querySelector("#bouton")
let bttn = document.querySelector("#boutton")
let botnn = document.querySelector("#btnn")
let foiss = document.querySelector("#fois")
let surll = document.querySelector(".surl")
let surlll = document.querySelector("#surligner")
let bob = document.querySelector("#bob")
let frebob = document.querySelector("#frebob")


let nb = 0;
console.log("bonjour");
btn.addEventListener("click", function () {
    console.log("avant", nb)
    nb = nb + 1;
    compt.innerHTML = nb + " clique"
    if (nb > 1) {
        compt.innerHTML = nb + " cliques"
    } else {
        compt.innerHTML = nb + " clique"
    }




    console.log("après", nb)

})
bttn.addEventListener("click", function () {
    nb = 0;
    compt.innerHTML = 0;
})

botnn.addEventListener("click", function () {
    nb = nb - 1;
    compt.innerHTML = nb;
})


foiss.addEventListener("click", function () {
    nb = nb * 2;
    compt.innerHTML = nb;
})

surlll.addEventListener("mouseover", function () {
    surll.style.backgroundColor = "red";
    surll.style.textDecoration = "underline";
})
surlll.addEventListener("mouseout", function () {
    surll.style.backgroundColor = "transparent";
    surll.style.textDecoration = "underline";
})
bob.addEventListener("input", function () {
    console.log("hello")
    frebob.innerHTML = "Salut " + bob.value;
})