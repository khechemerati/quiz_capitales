const boutons = document.querySelectorAll(".btn");
const btn1 = document.querySelectorAll(".btn1");
const reponses1 = document.querySelectorAll(".response1");
const reponses2 = document.querySelectorAll(".response2");
const reponses3 = document.querySelectorAll(".response3");
const reponses4 = document.querySelectorAll(".response4");
const reponses5 = document.querySelectorAll(".response5");
const reponses6 = document.querySelectorAll(".response6");
const cptr = document.querySelector(".cptr");
const score = document.querySelector(".score");
let compteur = 0;
let son = () => {
  let ring = new Audio();
  ring.src = "bravo.mp3";
  ring.play();
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<TRAITEMENT<<<<<<<<<<<<<<<<<2
btn1.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    bouton.style.background = "red";

    btn1.forEach((btnOne) => {
      btnOne.disabled = "true";
    });
  });
});
reponses1.forEach((laReponse) => {
  laReponse.addEventListener("click", () => {
    laReponse.style.background = "green";
    son();
    cptr.innerHTML = compteur++;
    btn1.forEach((btnOne) => {
      btnOne.disabled = "true";
    });
  });
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<btn2<<<<<<<<<<<<<<<<<<<<<<<

const btn2 = document.querySelectorAll(".btn2");
btn2.forEach((bouton2) => {
  bouton2.addEventListener("click", () => {
    bouton2.style.background = "red";

    btn2.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
reponses2.forEach((laReponse) => {
  laReponse.addEventListener("click", () => {
    laReponse.style.background = "green";
    son();
    cptr.innerHTML = ++compteur;
    btn2.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<BTN3<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const btn3 = document.querySelectorAll(".btn3");
btn3.forEach((bouton3) => {
  bouton3.addEventListener("click", () => {
    bouton3.style.background = "red";

    btn3.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
reponses3.forEach((laReponse) => {
  laReponse.addEventListener("click", () => {
    laReponse.style.background = "green";
    son();
    cptr.innerHTML = ++compteur;
    btn3.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<tbn4<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const btn4 = document.querySelectorAll(".btn4");
btn4.forEach((bouton4) => {
  bouton4.addEventListener("click", () => {
    bouton4.style.background = "red";

    btn4.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
reponses4.forEach((laReponse) => {
  laReponse.addEventListener("click", () => {
    laReponse.style.background = "green";
    son();
    cptr.innerHTML = ++compteur;
    btn4.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});

// <<<<<<<<<<<<<<<<<<<<<<<<<BTN5<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const btn5 = document.querySelectorAll(".btn5");
btn5.forEach((bouton5) => {
  bouton5.addEventListener("click", () => {
    bouton5.style.background = "red";

    btn5.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
reponses5.forEach((laReponse) => {
  laReponse.addEventListener("click", () => {
    laReponse.style.background = "green";
    son();
    cptr.innerHTML = ++compteur;
    btn5.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXBTNXXXXXXXXXXXXXXXXXXXXXX

const btn6 = document.querySelectorAll(".btn6");
btn6.forEach((bouton6) => {
  bouton6.addEventListener("click", () => {
    bouton6.style.background = "red";

    btn6.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
reponses6.forEach((laReponse) => {
  laReponse.addEventListener("click", () => {
    laReponse.style.background = "green";
    son();
    cptr.innerHTML = ++compteur;
    btn6.forEach((btnTwo) => {
      btnTwo.disabled = "true";
    });
  });
});
cptr.addEventListener("click", () => {
  score.innerHTML = "Votres scores est de : " + compteur;
  score.style.fontSize = "1.5rem";
});
