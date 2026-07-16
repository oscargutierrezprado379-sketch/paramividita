// ==============================
// LOADER
// ==============================

window.onload = () => {

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800);

};

// ==============================
// MÚSICA
// ==============================

const audio=document.getElementById("audio");

const play=document.getElementById("play");

let reproduciendo=false;

play.onclick=()=>{

if(!reproduciendo){

audio.play();

play.innerHTML='<i class="fa-solid fa-pause"></i>';

reproduciendo=true;

}else{

audio.pause();

play.innerHTML='<i class="fa-solid fa-play"></i>';

reproduciendo=false;

}

};

// ==============================
// CARTAS
// ==============================

const cartas=[

`Mi futura arquitecta hermosa 💙

Gracias por aparecer en mi vida.

La distancia podrá separarnos físicamente,

pero jamás logrará separar todo lo que siento por vos.`,

`Si hoy pudiera pedir un deseo...

sería verte sonreír frente a mí.

No necesito nada más.`,

`Me gustás por tu sonrisa,

por tus ojos,

por tu inteligencia,

pero sobre todo,

por la paz que siento cuando hablo con vos.`,

`Cada noche imagino el día

en que ya no exista un mapa

entre vos y yo,

solo un abrazo.`,

`Gracias por dejarme conocerte.

Espero seguir construyendo

muchos recuerdos con vos.`,

`No sos perfecta.

Y justamente por eso

sos perfecta para mí.`

];

let cartaActual=0;

document.getElementById("otraCarta").onclick=()=>{

cartaActual++;

if(cartaActual>=cartas.length){

cartaActual=0;

}

document.getElementById("textoCarta").innerHTML=cartas[cartaActual];

};

// ==============================
// RAZONES
// ==============================

const razones=[

"Porque hacés felices mis días.",

"Porque tu sonrisa ilumina todo.",

"Porque siempre pienso en vos.",

"Porque me encanta hablar con vos.",

"Porque admiro la mujer que sos.",

"Porque sos inteligente.",

"Porque sos hermosa.",

"Porque me hacés reír.",

"Porque incluso desde lejos estás presente.",

"Porque me hacés sentir querido.",

"Porque cada foto tuya me alegra el día.",

"Porque tu voz me transmite paz.",

"Porque me inspirás.",

"Porque sos única.",

"Porque quiero seguir conociéndote.",

"Porque cada día encuentro una razón nueva para elegirte."

];

document.getElementById("cambiar").onclick=()=>{

const random=Math.floor(Math.random()*razones.length);

document.getElementById("razon").innerHTML=razones[random];

};

// ==============================
// CORAZONES
// ==============================

function crearCorazon(){

const corazon=document.createElement("div");

corazon.className="corazon";

const emojis=["💙","❤️","🤍","🌸","💕"];

corazon.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

corazon.style.left=Math.random()*100+"vw";

corazon.style.animationDuration=(4+Math.random()*4)+"s";

corazon.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},8000);

}

setInterval(crearCorazon,500);

// ==============================
// EFECTO GALERÍA
// ==============================

const imagenes=document.querySelectorAll(".grid img,.galeria img");

imagenes.forEach(img=>{

img.onclick=()=>{

const fondo=document.createElement("div");

fondo.style.position="fixed";

fondo.style.inset="0";

fondo.style.background="rgba(0,0,0,.9)";

fondo.style.display="flex";

fondo.style.justifyContent="center";

fondo.style.alignItems="center";

fondo.style.zIndex="99999";

const foto=document.createElement("img");

foto.src=img.src;

foto.style.maxWidth="90%";

foto.style.maxHeight="90%";

foto.style.borderRadius="20px";

foto.style.boxShadow="0 0 40px black";

fondo.appendChild(foto);

document.body.appendChild(fondo);

fondo.onclick=()=>{

fondo.remove();

}

}

});

// ==============================
// SCROLL SUAVE
// ==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// ==============================
// MENSAJE FINAL
// ==============================

console.log("Hecho con mucho cariño para alguien muy especial. 💙");