// 


let oggetti =[
  {value:0, array:'1', classe:'pozVigorilla' , name:'Pozione di Vigorilla', Resist: 4 ,Combat:0 ,Dif:0},
  {value:1, array:'1', classe:'pasto' , name:'Pasto', Resist:3 , Combat:0 ,Dif:0},
  {value:2, array:'1', classe:'bende' , name:'Bende', Resist: 2 , Combat:0 ,Dif:0},
  {value:3, array:'1', classe:'impiastro' , name:'Impiastro', Resist: 4 , Combat:0 ,Dif:0},
  {value:4, array:'1', classe:'pozSalute' , name:'Pozione della Salute', Resist: 6 , Combat:0 ,Dif:0}
];

let armi=[
  {value:0, array:'2', classe:'lancia' , name:'Lancia', Resist: 4 , Combat:2 ,Dif:1},
  {value:1, array:'2', classe:'spada' , name:'Spada', Resist:4,Combat:3 ,Dif:0},
  {value:2, array:'2', classe:'scudo' , name:'Scudo', Resist:4 , Combat:1 ,Dif:2},
  {value:3, array:'2', classe:'ascia' , name:'Ascia', Resist:2 , Combat:4 ,Dif:0},
  {value:4, array:'2', classe:'mazza' , name:'Mazza', Resist:0, Combat:5 ,Dif:0},
  {value:5, array:'2', classe:'arco' , name:'Arco', Resist:0 , Combat:2 ,Dif:2},
  {value:6, array:'2', classe:'pugnale' , name:'Pugnale', Resist:2 , Combat:2 ,Dif:0}
];

let equipaggiamenti=[      
  {value:0, array:'3', classe:'amuleto' , name:'Amuleto', Resist:2 , Combat:3 ,Dif:1},
  {value:1, array:'3', classe:'anello' , name:'Anello', Resist:4 , Combat:2 ,Dif:0},
  {value:2, array:'3', classe:'cintura' , name:'Cintura', Resist:2 , Combat:3 ,Dif:1},
  {value:3, array:'3', classe:'elmo' , name:'Elmo', Resist:4 , Combat:0 ,Dif:1},
  {value:4, array:'3', classe:'armatura' , name:'Armatura', Resist:6 , Combat:0 , Dif:2},
  {value:5, array:'3', classe:'mantello' , name:'Mantello', Resist:2 , Combat:0 , Dif:0 }
];

let armiRare = [
  {value:0, array:'4', classe:'spadaSole' , name:'Spada del Sole', Resist:10 , Combat:6 ,Dif:0},
  {value:1, array:'4', classe:'scudoShianthi' , name:'Scudo degli Shianthi', Resist:10 , Combat:4 ,Dif:3}
];

let carte =[

];
let totaleCarte = 0;
  // Alert Modificati
let vis = 10000;

//ALERT
window.alert = function (message) {
//Creazione dell'elemento
var a = document.createElement('div');
//regole di stile CSS
a.style.cssText = "width:30vw; height:100px; border:1px solid #bbb; border-radius:5px; padding:10px;background-image:url(/media/bgDark.jpg); background-size:cover; box-shadow:0px 0px 8px #0006; position:fixed; top:20px; right:0; left:0; margin:auto; font-family: \"Arial\", sans-serif; color:black; text-shadow:-1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000; z-index:"+ vis+ ";";a.innerHTML = "<b></b><br>"+message;document.body.appendChild(a);

vis--;

//Rimozione dell'elemento al click
a.addEventListener("click", function() {
a.remove();
})
};

//CONFIRM
window.confirm = function(message) {
let a = document.createElement('div');
let y = document.createElement('button');  
//regole di stile CSS
a.style.cssText = "width:50vw; height:300px; border:1px solid #bbb; border-radius:5px; padding:10px; background-image:url(/media/bgSkull.jpg);background-size:cover;background-position:center; box-shadow:0px 0px 8px #0006; position:fixed; top:20px; right:0; left:0; margin:auto; font-family: \"Arial\", sans-serif; color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;z-index:"+ vis+ ";";

//buttons style
y.style.cssText = "height:30px; position:absolute; bottom:0; left:0; width:50%;clear:both;background-color:transparent;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;";    
a.innerHTML = "<b>Sei Morto!</b><br>"+message;
y.innerHTML = "Nuova Partita";

document.body.appendChild(a);
a.appendChild(y);

vis--;
// case YES  
y.addEventListener("click", function() {
   a.remove();
   document.location.href = '/index.html';
}
)};

window.ManoGioc = function(message){
let a = document.createElement('div');
let y = document.createElement('button');
let divRow = document.createElement('div');

a.style.cssText = "width:59vw; height:400px; border:1px solid #bbb; border-radius:5px; padding:10px; background-image:url(/media/bgDark.jpg);background-size:cover;background-position:center; box-shadow:0px 0px 8px #0006; position:fixed; top:20px; right:0; left:0; margin:auto; font-family: \"Arial\", sans-serif; color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;z-index:"+ vis+ ";";
a.classList.add('container')
divRow.cssText ="width:59vw; height:300px; border:1px solid #bbb; border-radius:5px; padding:10px; display:flex; background-color:transparent; box-shadow:0px 0px 8px #0006; font-family: \"Arial\", sans-serif; color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;z-index:"+ vis+ ";";
divRow.classList.add('row')
y.style.cssText = "height:30px; position:absolute; bottom:0; left:0; width:50%;clear:both;background-color:transparent;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;";    
carte.forEach((card)=>{
 
  let carta = document.createElement('div');
  carta.classList.add('col-3')
  carta.style.cssText ="height:250px;width:175px;clear:both;margin-left:19px;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;display:column;border:solid 5px;border-color:#5a4c38; border-radius:15px;";
  divRow.appendChild(carta);


  let Nome = document.createElement('h3');
  Nome.style.cssText ="height:5vh;padding:auto;color:white;";
  Nome.innerHTML= card.name;
  carta.appendChild(Nome);
  carta.classList.add(card.classe);

  if(card.array=='1'){

    let valoreResistenza = document.createElement('p');
    valoreResistenza.style.cssText ="height:8vh;padding:auto;color:white;padding-top:30px;justify-content:center;margin-top:17vh";
    valoreResistenza.innerHTML='Resistenza + '+ card.Resist; 
    carta.appendChild(valoreResistenza); 


  }else{
    let valoreResistenza = document.createElement('p');
    valoreResistenza.style.cssText ="height:6vh;padding:auto;color:white;padding-top:10px;justify-content:center;";
    valoreResistenza.innerHTML='Resistenza aumentata di '+ card.Resist; 
    carta.appendChild(valoreResistenza);
    
    let valorecombattività = document.createElement('p');
    valorecombattività.style.cssText ="height:6vh;padding:auto;color:white;padding-top:10px;justify-content:center;";
    valorecombattività.innerHTML='combattività aumentata di '+ card.Combat; 
    carta.appendChild(valorecombattività); 

    let valoredifesa = document.createElement('p');
    valoredifesa.style.cssText ="height:6vh;padding:auto;color:white;padding-top:10px;justify-content:center;";
    valoredifesa.innerHTML='Difesa aumentata di '+ card.Dif; 
    carta.appendChild(valoredifesa); 
  }
  let usa= document.createElement('button');
  usa.style.cssText ="margin-top:20px;height:6vh;border:solid 2px;border-color:black;background-color:#5a4c38;color:black;right:0px;";
  usa.classList.add('btn');
  usa.innerHTML='Usa'; 
  carta.appendChild(usa); 
 

  let getta= document.createElement('button');
  getta.style.cssText ="margin-top:20px;height:6vh;border:solid 2px;border-color:black;background-color:red;color:black;left:0px";
  getta.classList.add('btn');
  getta.innerHTML='Getta'; 
  carta.appendChild(getta); 
  getta.addEventListener("click", function(){
    for( let i = 0; i < carte.length; i++){ 
      if ( carte[i] === card) {
        carte.splice(i, 1); 
      }
   }
    divRow.removeChild(carta);
    totaleCarte = totaleCarte - 1;
    console.log('totaleCarte',totaleCarte);
    console.log('carte',carte);
  })

})
a.innerHTML = "<b>Zaino</b><br>";
y.innerHTML = "Torna indietro";


document.body.appendChild(a);
a.appendChild(y);
a.appendChild(divRow);


vis--;

y.addEventListener("click", function() {
 a.remove();
}
);

};
  // ButtonUsa.addEventListener('click', ()=>{


  // })
  
 





// il problema erano gli alert modificati che non intervengono più sul
// bloccare il codice se non vengono rispettati i parametri.
 


// rifornimenti dev'essere implementato nella funzione mappa.
// al click su di una casella viene lanciato un dado da 1 a 10; se rientra nel rage di numeri allora si tira un altro dado da 100 e 
// se il numero uscito è compreso tra 0 e 3 allora è un oggetto,tra 4 e 6 è un arma, tra 7 e 9 è un equipaggiamento.
// Se la categ è arma allora viene lanciato un ulteriore dado da 7 e verrano presi
// i valori dell'oggetto con il value uguale al tiro di dado, se la categ è oggetto allora viene lanciato un ulteriore dado da 5
// se la categ è equipaggiamento allora viene lanciato un ulteriore dado da 6.
// a seconda del numero uscito deve prendere le caratteristiche dell'oggetto nell'array e pusharle in un altro array vuoto
// aumentando di uno il countdown carteMassime(se supera 3 il giocatore).
// I mostri sconfitti rilasciano sempre 1 oggetto(questo è da implementare nella 
// funzione dado). 

// Per visualizzare le carte creiamo una funzione sul bottone gioca una carta
// che crea un div con all'interno le carte in possesso del giocatore e un bottone per toglierlo. 


// al click sul div prende le caratteristiche dell'oggetto e svuota il div e aggiunge i valori 
// della carta alle statistiche. se è un arma svuota il div e trasferisce i valori della carta 
// nello slot arma e se equipaggiamento negli slot equipaggiamento.
// nella carta messa negli slot dev'essere presente un bottone per rimuoverla dallo slot che svuoti il div
// e cambi il booleano per permettere di inserire un altra carta al suo interno.
// 


ManoGiocatore.addEventListener('click', () => {
ManoGioc('Zaino');

console.log('funziono');
});









