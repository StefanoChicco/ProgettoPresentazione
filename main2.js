// 


    let oggetti =[
        {value:0, classe:'pozVigorilla' , name:'Pozione di Vigorilla', Resist: 4 ,Combat:0 ,Dif:0},
        {value:1, classe:'pasto' , name:'Pasto', Resist:3 , Combat:0 ,Dif:0},
        {value:2, classe:'bende' , name:'Bende', Resist: 2 , Combat:0 ,Dif:0},
        {value:3, classe:'impiastro' , name:'Impiastro', Resist: 4 , Combat:0 ,Dif:0},
        {value:4, classe:'pozSalute' , name:'Pozione della Salute', Resist: 6 , Combat:0 ,Dif:0}
      ];
    
    let armi=[
        {value:0, classe:'lancia' , name:'Lancia', Resist: 4 , Combat:2 ,Dif:1},
        {value:1, classe:'spada' , name:'Spada', Resist:4,Combat:3 ,Dif:0},
        {value:2, classe:'scudo' , name:'Scudo', Resist:4 , Combat:1 ,Dif:2},
        {value:3, classe:'ascia' , name:'Ascia', Resist:2 , Combat:4 ,Dif:0},
        {value:4, classe:'mazza' , name:'Mazza', Resist:0, Combat:5 ,Dif:0},
        {value:5, classe:'arco' , name:'Arco', Resist:0 , Combat:2 ,Dif:2},
        {value:6, classe:'pugnale' , name:'Pugnale', Resist:2 , Combat:2 ,Dif:0}
      ];
      
    let equipaggiamenti=[      
        {value:0, classe:'amuleto' , name:'Amuleto', Resist:2 , Combat:3 ,Dif:1},
        {value:1, classe:'anello' , name:'Anello', Resist:4 , Combat:2 ,Dif:0},
        {value:2, classe:'cintura' , name:'Cintura', Resist:2 , Combat:3 ,Dif:1},
        {value:3, classe:'elmo' , name:'Elmo', Resist:4 , Combat:0 ,Dif:1},
        {value:4, classe:'armatura' , name:'Armatura', Resist:6 , Combat:0 , Dif:2},
        {value:5, classe:'mantello' , name:'Mantello', Resist:2 , Combat:0 , Dif:0 }
      ];

    let armiRare = [
        {value:0, classe:'spadaSole' , name:'Spada del Sole', Resist:10 , Combat:6 ,Dif:0},
        {value:1, classe:'scudoShianthi' , name:'Scudo degli Shianthi', Resist:10 , Combat:4 ,Dif:3}
      ];

    let carte =[

    ];

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

// il problema sono gli alert modificati che non intervengono più sul
// bloccare il codice se non vengono rispettati i parametri.
// cercare soluzione o chiedere. 


// rifornimenti dev'essere implementato nella funzione mappa.
// al click su di una casella viene lanciato un dado da 1 a 10; se rientra nel rage di numeri allora si tira un altro dado da 100 e 
// se il numero uscito è compreso tra 0 e 3 allora è un oggetto,tra 4 e 6 è un arma, tra 7 e 9 è un equipaggiamento.
// Se la categ è arma allora viene lanciato un ulteriore dado da 7 e verrano presi
// i valori dell'oggetto con il value uguale al tiro di dado, se la categ è oggetto allora viene lanciato un ulteriore dado da 5
// se la categ è equipaggiamento allora viene lanciato un ulteriore dado da 6.
// a seconda del numero uscito deve prendere le caratteristiche dell'oggetto nell'array e pusharle in un altro array vuoto
// aumentando di uno il countdown carteMassime(se supera 4 deve far partire un confirm che ti avvisa che hai troppe carte
// e ti chiede quale vuoi tenere tra quelle che già hai e la nuova).
// I mostri sconfitti rilasciano sempre 1 oggetto(questo è da implementare nella 
// funzione dado). 

// Per visualizzare le carte creiamo una funzione sul bottone gioca una carta
// che crea un div con all'interno le carte in possesso del giocatore e un bottone per toglierlo. 
// forse necessario local storage?

// al click sul div prende le caratteristiche dell'oggetto e svuota il div e aggiunge i valori 
// della carta alle statistiche. se è un arma svuota il div e trasferisce i valori della carta 
// nello slot arma e se equipaggiamento negli slot equipaggiamento.
// nella carta messa negli slot dev'essere presente un bottone per rimuoverla dallo slot che svuoti il div
// e cambi il booleano per permettere di inserire un altra carta al suo interno.
// 
let totaleCarte = 0;

Mappa.forEach((casella) => {
  casella.addEventListener('click', () => {
     let x=casella.dataset.x;
     let y=casella.dataset.y;
     
     let orizzontale =mappamentoX(giocatore.X , x);
     let verticale =mappamentoY(giocatore.Y , y);
     
     if(orizzontale<=movimento.value && verticale<=movimento.value && map==false && combat==false){
         Mappa.forEach(section => {
             section.classList.remove('giocatore')
          });
          casella.classList.add('giocatore');  
          giocatore.X= casella.dataset.x;
          giocatore.Y= casella.dataset.y;
          map=true;


          let dado = Math.floor(Math.random() * 10); 
          let Rifornimenti = rifornimenti.value*2 +1;
          console.log(dado,'dado');
          console.log(Rifornimenti,'Rifornimenti');
          if(Rifornimenti>=dado){
            let categ = Math.floor(Math.random() * 10);
            console.log(categ,'dado categorie')
            if(categ<4){
              let dadoOggetti=  Math.floor(Math.random() * 5);
              oggetti.forEach(oggetto => {
                if(dadoOggetti == oggetto.value){
                  console.log(oggetto);
                }
              });
            }else if(categ>3 && categ<7){
              let dadoArmi=  Math.floor(Math.random() * 7);
              armi.forEach(arma => {
                if(dadoArmi == arma.value){
                  console.log(arma);
            }})
            }else{
              let dadoEquip=  Math.floor(Math.random() * 6);
              equipaggiamenti.forEach(equip => {
                if(dadoEquip == equip.value){
                  console.log(equip);
            }})
              
            }
          }else{
            console.log('tiro sfortunato')
           };


          nemici.forEach(nemico => {
              if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){
                  casella.classList.add('nuvola'); 
                  combat=true; 

                  cardNemici.innerHTML =''; 
                  
                  let div = document.createElement('div');

                  div.classList.add('col-12', 'col-md-6', 'my-2');
      
                  div.innerHTML = `
                  
                  <div id="NomeNemico" class="statisticheNemici text-terzo">Nome: ${nemico.name}
                  </div>
                  <div id="ResistenzaNemico" class="statisticheNemici text-terzo">Resistenza:<p id="ResistN"></p>${nemico.Resist}
                  </div>
                  <div id="CombattivitàNemico" class="statisticheNemici text-terzo">Combattività:${nemico.Combat}</div> 
                  `;
      
                  cardNemici.appendChild(div);

              };
          });
         
      }else if(map==true){
          alert('aspetta il prossimo turno');                 
      }else if(resist==false){
          alert("prima resistenza e combattività");
      }else{
          alert('è troppo lontano, scegli un altra via');  
      }
  });
});


// let inserireCarte = (valore)=>{



// };

// ManoGiocatore.addEventListener('click', () => {
 

// });