
let dice1 = document.getElementById('dice')
let dice2 = document.getElementById('dice')

let imgtop = document.getElementById('imgtop');
let imgside1 = document.getElementById('imgside1');
let imgside2 = document.getElementById('imgside2');
let imgside3 = document.getElementById('imgside3');
let imgside4 = document.getElementById('imgside4');
let imgbottom = document.getElementById('imgbottom');

let side = document.getElementsByClassName('side')

let clickbereich = document.querySelector('img');

function dice() {
    return 1 + Math.floor(Math.random() * 6);
}   

clickbereich.onclick = function () {
    bildwechsel(dice());
    rotate();
}

let isRotated = false;

function rotate() {
    if(isRotated){
        dice1.classList.remove('rotate1');
        isRotated = false;
    }else{
        dice1.classList.add('rotate1');
        isRotated = true;
    }
}

function bildwechsel(wuerfel) { 
    
if(wuerfel === 1){
    
    imgtop.setAttribute('src','/cssdice/img/dice1.svg')
    imgside1.setAttribute('src', '/cssdice/img/dice4.svg')
    imgside2.setAttribute('src', '/cssdice/img/dice5.svg')
    imgside3.setAttribute('src', '/cssdice/img/dice2.svg')
    imgside4.setAttribute('src', '/cssdice/img/dice3.svg')
    imgbottom.setAttribute('src', '/cssdice/img/dice6.svg')
}

else if (wuerfel === 2) {

    imgtop.setAttribute('src','/cssdice/img/dice2.svg')
    imgside1.setAttribute('src', '/cssdice/img/dice4.svg')
    imgside2.setAttribute('src', '/cssdice/img/dice1.svg')
    imgside3.setAttribute('src', '/cssdice/img/dice6.svg')
    imgside4.setAttribute('src', '/cssdice/img/dice3.svg')
    imgbottom.setAttribute('src', '/cssdice/img/dice5.svg')
    
}
else if (wuerfel === 3) {

    imgtop.setAttribute('src','/cssdice/img/dice3.svg')
    imgside1.setAttribute('src', '/cssdice/img/dice6.svg')
    imgside2.setAttribute('src', '/cssdice/img/dice2.svg')
    imgside3.setAttribute('src', '/cssdice/img/dice5.svg')
    imgside4.setAttribute('src', '/cssdice/img/dice4.svg')
    imgbottom.setAttribute('src', '/cssdice/img/dice1.svg')

}
else if (wuerfel === 4) {

    imgtop.setAttribute('src','/cssdice/img/dice4.svg')
    imgside1.setAttribute('src', '/cssdice/img/dice3.svg')
    imgside2.setAttribute('src', '/cssdice/img/dice2.svg')
    imgside3.setAttribute('src', '/cssdice/img/dice5.svg')
    imgside4.setAttribute('src', '/cssdice/img/dice6.svg')
    imgbottom.setAttribute('src', '/cssdice/img/dice1.svg')

}
else if (wuerfel === 5) {

    imgtop.setAttribute('src','/cssdice/img/dice5.svg')
    imgside1.setAttribute('src', '/cssdice/img/dice4.svg')
    imgside2.setAttribute('src', '/cssdice/img/dice6.svg')
    imgside3.setAttribute('src', '/cssdice/img/dice3.svg')
    imgside4.setAttribute('src', '/cssdice/img/dice1.svg')
    imgbottom.setAttribute('src', '/cssdice/img/dice2.svg')

}
else if (wuerfel === 6) {

    imgtop.setAttribute('src','/cssdice/img/dice6.svg')
    imgside1.setAttribute('src', '/cssdice/img/dice4.svg')
    imgside2.setAttribute('src', '/cssdice/img/dice2.svg')
    imgside3.setAttribute('src', '/cssdice/img/dice5.svg')
    imgside4.setAttribute('src', '/cssdice/img/dice3.svg')
    imgbottom.setAttribute('src', '/cssdice/img/dice1.svg')
}


}

