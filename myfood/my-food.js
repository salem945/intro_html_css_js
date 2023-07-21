let navigation = document.querySelector("#navv")
let mennou = document.querySelector("#menu")
let fermer = document.querySelector("#croix")
let un = document.querySelector("#pageun")
let deux = document.querySelector("#pagedeux")
let trois = document.querySelector("#pagetrois")
let quatre = document.querySelector("#pagequatre")
let travel = document.querySelector(".tagz")
let tags = document.querySelectorAll(".tagz")
let flchgauche = document.querySelector(".gvoche")
let flchdroite = document.querySelector(".drvoite")
let slides = document.querySelectorAll()










console.log("js chargé")
navigation.addEventListener("click", function () {

    if (mennou.classList.contains('chapai')) {
        mennou.classList.remove('chapai')
    }
    else {
        mennou.classList.add('chapai');
    }

})

fermer.addEventListener("click", function () {
    console.log("salem")
    mennou.classList.remove('chapai');
})

console.log("aiaiai")

un.addEventListener("click", function () {

    if (un.classList.contains('mousover')) {
        un.classList.remove('mousover')
    }
    else {
        un.classList.add('mousover')
    }
})

deux.addEventListener("click", function () {

    if (deux.classList.contains('overdeu')) {
        deux.classList.remove('overdeu')
    }
    else {
        deux.classList.add('overdeu')
    }
})

trois.addEventListener("click", function () {

    if (trois.classList.contains('overtrois')) {
        trois.classList.remove('overtrois')
    }
    else {
        trois.classList.add('overtrois')
    }
})

quatre.addEventListener("click", function () {

    if (quatre.classList.contains('overquatre')) {
        quatre.classList.remove('overquatre')
    }
    else {
        quatre.classList.add('overquatre')
    }
})



// for (tag of tags) {
//     tag.addEventListener("click", function () {

//         if (tag.classList.contains('klik')) {
//             tag.classList.remove('klik')
//         }
//         else {
//             tag.classList.add('klik')
//         }

//     });
// }


tags.forEach(function (tag) {
    tag.addEventListener("click", function () {

        if (tag.classList.contains('klik')) {
            tag.classList.remove('klik')
        }
        else {
            tag.classList.add('klik')
        }
    });
})
