//Description de l'algorithme : L'utilisateur peut cliquer sur 3 choix : Pierre, feuille ou ciseaux
//Quand il clique sur un choix, l'ordinateur declanche un evénement : 
//1 : l'ordinateur choisit un chiffre entre 1 et 3 (1 = pierre, 2 = feuille, 3=ciseaux)
//2 : On supprime les enfants de la div centre pour chaque joueur
//3 : On affiche la main choisit du joueur au centre et la main choisit de l'ordi au centre
//4 : Si notre main est superieur on incremente la variable score de chaque joueur
//5 : On affiche le score




//VARIABLES
    //variables elements
let dMenu = document.getElementById('dMenu');//Div principale de demarrage
let menu = document.getElementById('menu'); //Div principale
let perdu = document.getElementById('perdu'); //div principale ecran perdu
let gagne = document.getElementById('gagne'); //Div principale ecran gagné
let j1Divs = document.querySelectorAll('.prop1');//Div joueur1
let j2Divs = document.querySelectorAll('.prop2');//Div joueur2
let pier1 = document.getElementById('pier1') //Proposition pierre
let feuil1 = document.getElementById('feuil1') //Proposition feuille
let cis1 = document.getElementById('cis1')  //Proposition ciseaux
let pier2 = document.getElementById('pier2') //Proposition pierre
let feuil2 = document.getElementById('feuil2') //Proposition feuille
let cis2 = document.getElementById('cis2')  //Proposition ciseaux
let propGame1 = document.getElementById('prop-game1') //carré du centre joueur 1
let propGame2 = document.getElementById('prop-game2') //carré du centre joueur 2
let p1 = document.getElementById('score1') //affichage resultat 1
let p2 = document.getElementById('score2') //affichage resultat 2
let score1 = 0; //score joueur 1
let score2 = 0; //score joueur 2
let choidif = document.querySelectorAll('.choidif'); //Bouttons difficultés
let refresh = document.getElementById('refresh'); //Boutton acceuil
let recommencer = document.getElementById('recommencer'); //Boutton recommencer
let refresh1 = document.getElementById('refresh1'); //Boutton acceuil perdu
let recommencer1 = document.getElementById('recommencer1'); //Boutton recommencer perdu
let refresh2 = document.getElementById('refresh2'); //Boutton acceuil
let recommencer2 = document.getElementById('recommencer2'); //Boutton recommencer

//variables algo
const joueur1 = true; //selection du joueur
const joueur2 = false; //selection du joueur

let tmpJoueur1 = 0; //choix joueur 1
let tmpJoueur2 = 0; //choix joueur 2

let difficult = 1;
let play = document.getElementById('play');

//FONCTIONS
    //fonction pour créer un chiffre random entre 1 et 3
function creeRandom(){
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    //affiche la main que l'on vient de choisir au centre et change notre tmp Joueur1
function affichMain(divMain, divJoueur){
        //On supprime l'image existante si elle existe
        if(divJoueur.hasChildNodes()){
            divJoueur.innerHTML ="";
        }
        if (divMain.classList.contains("choix1")) {
            tmpJoueur1 = 1;
        } else if (divMain.classList.contains("choix2")){
            tmpJoueur1 = 2;
        } else if (divMain.classList.contains("choix3")){
            tmpJoueur1 = 3;
        }
        else {console.log("error")}
        
        let tmpImg = document.createElement('img');
        tmpImg.src = divMain.children[0].src;
        tmpImg.style.width ="200px";
        tmpImg.style.height ="200px";
        tmpImg.style.borderRadius ="4px";
        divJoueur.appendChild(tmpImg);
    }
    //fait choisir une main à l'ordinateur et l'affiche
function ordiPlay(random, choixJoueur, divJoueur){
    if(divJoueur.hasChildNodes()){
        divJoueur.innerHTML ="";
    }
    let divMain = choixJoueur[random-1]
    if (divMain.classList.contains("p2choix1")) {
        tmpJoueur2 = 1;
    } else if (divMain.classList.contains("p2choix2")){
        tmpJoueur2 = 2;
    } else if (divMain.classList.contains("p2choix3")){
        tmpJoueur2 = 3;
    }
    else {console.log("error")}
    
    let tmpImg = document.createElement('img');
        tmpImg.src = divMain.children[0].src;
        tmpImg.style.width ="200px";
        tmpImg.style.height ="200px";
        tmpImg.style.borderRadius ="4px";
        divJoueur.appendChild(tmpImg);
}
    //Selectionne le gagnant
function winner(tmpJoueur1, tmpJoueur2){
    let tmp1 = 0;
    let tmp2 = 0;
//Le joueur choisit la pierre:
    if(tmpJoueur1 === 1 && tmpJoueur2 === 1){console.log("nul")} //pierre contre pierre
    else if(tmpJoueur1 === 1 && tmpJoueur2 === 2){tmp2++}
    else if(tmpJoueur1 === 1 && tmpJoueur2 === 3){tmp1++}
//Le joueur choisit la feuille:
    else if(tmpJoueur1 === 2 && tmpJoueur2 === 1){tmp1++}
    else if(tmpJoueur1 === 2 && tmpJoueur2 === 2){console.log("nul")}
    else if(tmpJoueur1 === 2 && tmpJoueur2 === 3){tmp2++}
//Le joueur choisit les ciseaux:
    else if(tmpJoueur1 === 3 && tmpJoueur2 === 1){tmp2++}
    else if(tmpJoueur1 === 3 && tmpJoueur2 === 2){tmp1++}
    else if(tmpJoueur1 === 3 && tmpJoueur2 === 3){console.log("nul")}
//Si joueur 1 gagne, on modifie son score et on retourne le score du gagnant
//et inversement
//Si nulité, retourne string "nul"

    console.log("tmp1 : ",tmp1, "tmp2 : ",tmp2)
        if (tmp1>tmp2) {
            return true;
        } else if(tmp2>tmp1){
            return false;
        } else{
            return null;
        }

}


//CODE & EVENEMENTS
    //Choix du nombre de coups
for (let i = 0; i < choidif.length; i++) {
    choidif[i].addEventListener('click', function() {
        for (let j = 0; j < choidif.length; j++) {
            choidif[j].style.backgroundColor ="#2a2a2a";
            choidif[j].style.color ="white";
        }
        this.style.backgroundColor ="white";
        this.style.color ="#2a2a2a"
        if (i===0) {
            difficult = 1;
        }
        else if(i===1){
            difficult = 3;
        }
        else if(i===2){
            difficult = 10;
        }
        else{
            console.log("error")
        }
    })
}
    //Evenement bouton jouer
play.addEventListener('click', function() {
    dMenu.style.display ="none";
    menu.style.display ="flex";
})

for (let i = 0; i < j1Divs.length; i++) {
    j1Divs[i].addEventListener('click', function() {
        affichMain(j1Divs[i], propGame1);
        ordiPlay(creeRandom(), j2Divs, propGame2);
        if(winner(tmpJoueur1, tmpJoueur2) === true){
            score1 += 1;
        }
        else if(winner(tmpJoueur1, tmpJoueur2) === false){
            score2 += 1;
        }
        else{
            console.log("nul");
        }
        p1.textContent=" " + score1;
        p2.textContent=" " + score2;
        if(score1 >= difficult){
            setTimeout(function(){
                menu.style.display="none";
                gagne.style.display="flex";
            }, 500);
        }
        else if (score2 >= difficult) {
            setTimeout(function(){
                menu.style.display="none";
                perdu.style.display="flex";
            }, 500);
        }
        else {
            console.log("ca continue");
        }
        setTimeout(function(){
            propGame1.innerHTML="";
            propGame2.innerHTML="";
        }, 10000);
    })
}

refresh.addEventListener('click', function() {
    score2 = 0;
    score1 = 0;
    p1.textContent=" " + score1;
    p2.textContent=" " + score2;
    menu.style.display="none";
    dMenu.style.display="flex";
})
recommencer.addEventListener('click', function() {
    score2 = 0;
    score1 = 0;
    p1.textContent=" " + score1;
    p2.textContent=" " + score2;
})
refresh1.addEventListener('click', function() {
    score2 = 0;
    score1 = 0;
    p1.textContent=" " + score1;
    p2.textContent=" " + score2;
    perdu.style.display="none";
    dMenu.style.display="flex";
})
recommencer1.addEventListener('click', function() {
    score2 = 0;
    score1 = 0;
    p1.textContent=" " + score1;
    p2.textContent=" " + score2;
    perdu.style.display="none";
    menu.style.display="flex";
})
refresh2.addEventListener('click', function() {
    score2 = 0;
    score1 = 0;
    p1.textContent=" " + score1;
    p2.textContent=" " + score2;
    gagne.style.display="none";
    dMenu.style.display="flex";
})
recommencer2.addEventListener('click', function() {
    score2 = 0;
    score1 = 0;
    p1.textContent=" " + score1;
    p2.textContent=" " + score2;
    gagne.style.display="none";
    menu.style.display="flex";
})
//ordiPlay(creeRandom(), j2Divs, propGame2);
