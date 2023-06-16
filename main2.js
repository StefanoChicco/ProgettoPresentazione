
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
  {value:2, array:'2', classe:'scudo' , name:'Scudo', Resist:4 , Combat:1 ,Dif:1},
  {value:3, array:'2', classe:'ascia' , name:'Ascia', Resist:2 , Combat:4 ,Dif:0},
  {value:4, array:'2', classe:'mazza' , name:'Mazza', Resist:0, Combat:5 ,Dif:0},
  {value:5, array:'2', classe:'arco' , name:'Arco', Resist:0 , Combat:2 ,Dif:1},
  {value:6, array:'2', classe:'pugnale' , name:'Pugnale', Resist:2 , Combat:2 ,Dif:0}
];

let equipaggiamenti=[      
  {value:0, array:'3', classe:'amuleto' , name:'Amuleto', Resist:2 , Combat:3 ,Dif:1},
  {value:1, array:'3', classe:'anello' , name:'Anello', Resist:4 , Combat:2 ,Dif:0},
  {value:2, array:'3', classe:'cintura' , name:'Cintura', Resist:2 , Combat:3 ,Dif:1},
  {value:3, array:'3', classe:'elmo' , name:'Elmo', Resist:4 , Combat:0 ,Dif:1},
  {value:4, array:'3', classe:'armatura' , name:'Armatura', Resist:6 , Combat:0 , Dif:1},
  {value:5, array:'3', classe:'mantello' , name:'Mantello', Resist:2 , Combat:0 , Dif:0 }
];

let armiRare = [
  {value:0, array:'4', classe:'spadaSole' , name:'Spada del Sole', Resist:10 , Combat:6 ,Dif:0},
  {value:1, array:'4', classe:'scudoShianthi' , name:'Scudo degli Shianthi', Resist:10 , Combat:4 ,Dif:3}
];


let carte =[];
let carteGiocate=[];
let oggettoDifesa=[];
let oggettoCombattività=[];
let oggettoResistenza=[];

let totaleCarte = 0;




  // Alert Modificati
let vis = 10000;

// ALERT    
window.alert = function (message) {
var a = document.createElement('div');
a.style.cssText = "width:30vw; height:100px; border:1px solid #bbb; border-radius:5px; padding:10px;background-image:url(/media/bgDark.jpg); background-size:cover; box-shadow:0px 0px 8px #0006; position:fixed; top:20px; right:0; left:0; margin:auto; font-family: \"Arial\", sans-serif; color:black; text-shadow:-1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000; z-index:"+ vis+ ";";a.innerHTML = "<b></b><br>"+message;document.body.appendChild(a);vis--;


a.addEventListener("click", function() {
a.remove();
})
};

//CONFIRM
window.confirm = function(message) {
let a = document.createElement('div');
let y = document.createElement('button');  

a.style.cssText = "width:50vw; height:300px; border:1px solid #bbb; border-radius:5px; padding:10px; background-image:url(/media/bgSkull.jpg);background-size:cover;background-position:center; box-shadow:0px 0px 8px #0006; position:fixed; top:20px; right:0; left:0; margin:auto; font-family: \"Arial\", sans-serif; color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;z-index:"+ vis+ ";";


y.style.cssText = "height:30px; position:absolute; bottom:0; left:0; width:50%;clear:both;background-color:transparent;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;";    
a.innerHTML = "<b>Sei Morto!</b><br>"+message;
y.innerHTML = "Nuova Partita";

document.body.appendChild(a);
a.appendChild(y);

vis--;

y.addEventListener("click", function() {
   a.remove();
   document.location.href = '/index.html';
}
)};
      
    // Per visualizzare le carte creiamo una funzione sul bottone gioca una carta
    // che crea un div con all'interno le carte in possesso del giocatore e un bottone per toglierlo. 
      
    // al click sul div prende le caratteristiche dell'oggetto e svuota il div e aggiunge i valori 
    // della carta alle statistiche. se è un arma svuota il div e trasferisce i valori della carta 
    // nello slot arma e se equipaggiamento negli slot equipaggiamento.
    // nella carta messa negli slot dev'essere presente un bottone per rimuoverla dallo slot che svuoti il div
    // e cambi il booleano per permettere di inserire un altra carta al suo interno.

window.ManoGioc = function(message){
let a = document.createElement('div');
let y = document.createElement('button');
let divRow = document.createElement('div');

a.style.cssText = "width:59vw; height:400px; border:1px solid #bbb; border-radius:5px; padding:10px; background-image:url(/media/bgDark.jpg);background-size:cover;background-position:center; box-shadow:0px 0px 8px #0006; position:fixed; top:200px; right:0; left:0; margin:auto; font-family: \"Arial\", sans-serif; color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;z-index:"+ vis+ ";";
a.classList.add('container')
divRow.cssText ="width:59vw; height:300px; border:1px solid #bbb; border-radius:5px; padding:10px; display:flex; background-color:transparent; box-shadow:0px 0px 8px #0006; font-family: \"Arial\", sans-serif; color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;z-index:"+ vis+ ";";
divRow.classList.add('row')
y.style.cssText = "height:30px; position:absolute; bottom:0; left:0; width:50%;clear:both;background-color:transparent;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;";    
carte.forEach((card)=>{
 
  let Carta = document.createElement('div');
  Carta.classList.add('col-3')
  Carta.style.cssText ="height:250px;width:175px;clear:both;margin-left:19px;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;display:column;border:solid 5px;border-color:#5a4c38; border-radius:15px;";
  divRow.appendChild(Carta);


  let Nome = document.createElement('h3');
  Nome.style.cssText ="height:5vh;padding:auto;color:white;";
  Nome.innerHTML= card.name;
  Carta.appendChild(Nome);
  Carta.classList.add(card.classe);

  if(card.array=='1'){

    let valoreResistenza = document.createElement('p');
    valoreResistenza.style.cssText ="height:8vh;padding:auto;color:white;padding-top:30px;justify-content:center;margin-top:17vh";
    valoreResistenza.innerHTML='Resistenza + '+ card.Resist; 
    Carta.appendChild(valoreResistenza); 


  }else{
    let valoreResistenza = document.createElement('p');
    valoreResistenza.style.cssText ="height:6vh;padding:auto;color:white;padding-top:10px;justify-content:center;";
    valoreResistenza.innerHTML='Resistenza aumentata di '+ card.Resist; 
    Carta.appendChild(valoreResistenza);
    
    let valorecombattività = document.createElement('p');
    valorecombattività.style.cssText ="height:6vh;padding:auto;color:white;padding-top:10px;justify-content:center;";
    valorecombattività.innerHTML='combattività aumentata di '+ card.Combat; 
    Carta.appendChild(valorecombattività); 

    let valoredifesa = document.createElement('p');
    valoredifesa.style.cssText ="height:6vh;padding:auto;color:white;padding-top:10px;justify-content:center;";
    valoredifesa.innerHTML='Difesa aumentata di '+ card.Dif; 
    Carta.appendChild(valoredifesa); 
  }


  // pulsante usa nello zaino

  let usa= document.createElement('button');
  usa.style.cssText ="margin-top:20px;height:6vh;border:solid 2px;border-color:black;background-color:#5a4c38;color:black;right:0px;";
  usa.classList.add('btn');
  usa.innerHTML='Usa'; 
  Carta.appendChild(usa); 
  usa.addEventListener("click", function(){
    
   
    console.log('totaleCarte',totaleCarte);
    console.log('carte',carte);

  if(card.array=='1'){
    for( let i = 0; i < carte.length; i++){ 
      // === al posto di == importante per evitare che elimini le carte doppie
      if ( carte[i] === card) { 
        carte.splice(i, 1); 
      }
    }
    divRow.removeChild(Carta);
    totaleCarte = totaleCarte - 1; 
    let SaluteIncr = card.Resist + resistGiocatore;
    resistGiocatore=SaluteIncr;
    let vitaDopata= vitaMassima + sommaResistenza ;
    let div = document.getElementById('resistenza');                         
    div.innerHTML = resistGiocatore +'/' + vitaDopata;
      
      if(SaluteIncr>vitaDopata){
        SaluteIncr=vitaDopata;
        resistGiocatore=SaluteIncr;
        let div = document.getElementById('resistenza');                          
        div.innerHTML = resistGiocatore +'/' + vitaDopata;
      }
    }else if(card.array=='2' && Arma1===true && Arma2===true){
      alert('Stai già utilizzando due armi. Gettane una per usarne un altra.');

      // parte della Arma1 parte della Arma1 parte della Arma1 parte della Arma1 parte della Arma1 parte della Arma1
    }else if(card.array=='2' &&  Arma1==false){
     
      for( let i = 0; i < carte.length; i++){ 
        // === al posto di == importante per evitare che elimini le carte doppie
        if ( carte[i] === card) { 
          carte.splice(i, 1); 
          carteGiocate.push(card);
        

        }
     }
     oggettoDifesa.splice(0,oggettoDifesa.length);
     oggettoCombattività.splice(0,oggettoCombattività.length);
     oggettoResistenza.splice(0,oggettoResistenza.length);
    
 
     carteGiocate.forEach((oggetto)=>{

       oggettoDifesa.push(oggetto.Dif);
       oggettoCombattività.push(oggetto.Combat);
       oggettoResistenza.push(oggetto.Resist);
        
     })
   
     sommaDifesa=0;
     for(let i = 0; i < oggettoDifesa.length; i++){
        sommaDifesa = sommaDifesa + oggettoDifesa[i];    
     };
     
   
     sommaCombattività=0;
     for(let i = 0; i < oggettoCombattività.length; i++){     
         sommaCombattività= sommaCombattività + oggettoCombattività[i];    
     };
     

     sommaResistenza=0;
     for(let i = 0; i < oggettoResistenza.length; i++){    
        sommaResistenza= sommaResistenza + oggettoResistenza[i];
     };
     
      divRow.removeChild(Carta);
      totaleCarte = totaleCarte - 1;

      let carta = document.createElement('div');
      carta.classList.add('col-12')
      carta.style.cssText ="height:100%;width:100%;clear:both;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;display:column;border:solid 5px;border-color:#5a4c38; border-radius:15px;";
      slotArma1.appendChild(carta);
    
      let Nome = document.createElement('h3');
      Nome.style.cssText ="height:4vh;padding:auto;color:white;";
      Nome.innerHTML= card.name;
      carta.appendChild(Nome);
      carta.classList.add(card.classe);

      let valoreResistenza = document.createElement('p');
      valoreResistenza.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
      valoreResistenza.innerHTML='Resistenza + '+ card.Resist; 
      carta.appendChild(valoreResistenza);
      
      let valorecombattività = document.createElement('p');
      valorecombattività.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
      valorecombattività.innerHTML='Combattività + '+ card.Combat; 
      carta.appendChild(valorecombattività); 
  
      let valoredifesa = document.createElement('p');
      valoredifesa.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
      valoredifesa.innerHTML='Difesa + '+ card.Dif; 
      carta.appendChild(valoredifesa); 
    
      let button = document.getElementById('resistenza');
      let button2 = document.getElementById('combattività');  
      let vitaDopata= vitaMassima + sommaResistenza ;
      let combatDopata= combatGiocatore + sommaCombattività;
      button.innerHTML = resistGiocatore + '/'+ vitaDopata;
      button2.innerHTML = combatDopata;

      // pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta

      let getta= document.createElement('button');
      getta.style.cssText ="margin-top:-10px;height:5vh;border:solid 2px;border-color:black;background-color:red;color:black;left:0px";
      getta.classList.add('btn');
      getta.innerHTML='Getta'; 
      carta.appendChild(getta); 
      getta.addEventListener("click", function(){
      for( let i = 0; i < carteGiocate.length; i++){ 
      // === al posto di == importante per evitare che elimini le carte doppie
      if ( carteGiocate[i] === card) { 
        carteGiocate.splice(i, 1); 
      }
      }
    slotArma1.removeChild(carta);
    let button = document.getElementById('resistenza');
    let button2 = document.getElementById('combattività');  
    Arma1=false;
    oggettoDifesa.splice(0,oggettoDifesa.length);
    oggettoCombattività.splice(0,oggettoCombattività.length);
    oggettoResistenza.splice(0,oggettoResistenza.length);
    carteGiocate.forEach((oggetto)=>{

      oggettoDifesa.push(oggetto.Dif);
      oggettoCombattività.push(oggetto.Combat);
      oggettoResistenza.push(oggetto.Resist);
       
    })
    
      sommaDifesa=0;
      for(let i = 0; i < oggettoDifesa.length; i++){
         sommaDifesa = sommaDifesa + oggettoDifesa[i]; 
         
      };
      
    
      sommaCombattività=0;
      for(let i = 0; i < oggettoCombattività.length; i++){     
          sommaCombattività= sommaCombattività + oggettoCombattività[i];    
      };
      
     
      sommaResistenza=0;
      for(let i = 0; i < oggettoResistenza.length; i++){    
         sommaResistenza= sommaResistenza + oggettoResistenza[i];
      };
      vitaDopata= vitaMassima + sommaResistenza ;
      combatDopata=combatGiocatore + sommaCombattività;
      button.innerHTML = resistGiocatore + '/'+ vitaDopata;
      button2.innerHTML = combatDopata;
      console.log('carteGiocate',carteGiocate);
    
    
  })

      

      Arma1=true;
     
    
    // parte della Arma2 parte della Arma2 parte della Arma2 parte della Arma2 parte della Arma2 parte della Arma2 
    }else if(card.array=='2' &&  Arma1==true){
      for( let i = 0; i < carte.length; i++){ 
        // === al posto di == importante per evitare che elimini le carte doppie
        if ( carte[i] === card) { 
          carte.splice(i, 1); 
          carteGiocate.push(card);
         
        }
     }
      oggettoDifesa.splice(0,oggettoDifesa.length);
     oggettoCombattività.splice(0,oggettoCombattività.length);
     oggettoResistenza.splice(0,oggettoResistenza.length);
 
     carteGiocate.forEach((oggetto)=>{

       oggettoDifesa.push(oggetto.Dif);
       oggettoCombattività.push(oggetto.Combat);
       oggettoResistenza.push(oggetto.Resist);
        
     })
  //  let sommaDifesa = 0;
  sommaDifesa=0;
  for(let i = 0; i < oggettoDifesa.length; i++){
     sommaDifesa = sommaDifesa + oggettoDifesa[i];    
  };
  
 //  let sommaCombattività = 0;
  sommaCombattività=0;
  for(let i = 0; i < oggettoCombattività.length; i++){     
      sommaCombattività= sommaCombattività + oggettoCombattività[i];    
  };
  
 //  let sommaResistenza = 0;
  sommaResistenza=0;
  for(let i = 0; i < oggettoResistenza.length; i++){    
     sommaResistenza= sommaResistenza + oggettoResistenza[i];
  };
      
      divRow.removeChild(Carta);
      totaleCarte = totaleCarte - 1;

      let carta = document.createElement('div');
      carta.classList.add('col-12')
      carta.style.cssText ="height:100%;width:100%;clear:both;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;display:column;border:solid 5px;border-color:#5a4c38; border-radius:15px;";
      slotArma2.appendChild(carta);
    
      let Nome = document.createElement('h3');
      Nome.style.cssText ="height:4vh;padding:auto;color:white;";
      Nome.innerHTML= card.name;
      carta.appendChild(Nome);
      carta.classList.add(card.classe);

      let valoreResistenza = document.createElement('p');
      valoreResistenza.style.cssText ="height:3vh;color:white;padding-top:2px;";
      valoreResistenza.innerHTML='Resistenza + '+ card.Resist; 
      carta.appendChild(valoreResistenza);
      
      let valorecombattività = document.createElement('p');
      valorecombattività.style.cssText ="height:3vh;color:white;padding-top:2px;";
      valorecombattività.innerHTML='Combattività + '+ card.Combat; 
      carta.appendChild(valorecombattività); 
  
      let valoredifesa = document.createElement('p');
      valoredifesa.style.cssText ="height:3vh;color:white;padding-top:2px;";
      valoredifesa.innerHTML='Difesa + '+ card.Dif; 
      carta.appendChild(valoredifesa); 

      
      let button = document.getElementById('resistenza');
      let button2 = document.getElementById('combattività');  
      let vitaDopata= vitaMassima + sommaResistenza ;
      let combatDopata= combatGiocatore + sommaCombattività;
      button.innerHTML = resistGiocatore + '/'+ vitaDopata;
      button2.innerHTML = combatDopata;

// pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta
      let getta= document.createElement('button');
      getta.style.cssText ="margin-top:-10px;height:5vh;border:solid 2px;border-color:black;background-color:red;color:black;left:0px";
      getta.classList.add('btn');
      getta.innerHTML='Getta'; 
      carta.appendChild(getta); 
      getta.addEventListener("click", function(){
      for( let i = 0; i < carteGiocate.length; i++){ 
      // === al posto di == importante per evitare che elimini le carte doppie
      if ( carteGiocate[i] === card) { 
        carteGiocate.splice(i, 1); 
      }
      }

    slotArma2.removeChild(carta);
    let button = document.getElementById('resistenza');
    let button2 = document.getElementById('combattività');  
    Arma2=false;
    oggettoDifesa.splice(0,oggettoDifesa.length);
    oggettoCombattività.splice(0,oggettoCombattività.length);
    oggettoResistenza.splice(0,oggettoResistenza.length);
    carteGiocate.forEach((oggetto)=>{

      oggettoDifesa.push(oggetto.Dif);
      oggettoCombattività.push(oggetto.Combat);
      oggettoResistenza.push(oggetto.Resist);
       
    })
    sommaDifesa=0;
      for(let i = 0; i < oggettoDifesa.length; i++){
         sommaDifesa = sommaDifesa + oggettoDifesa[i];    
      };
      
    
      sommaCombattività=0;
      for(let i = 0; i < oggettoCombattività.length; i++){     
          sommaCombattività= sommaCombattività + oggettoCombattività[i];    
      };
      
     
      sommaResistenza=0;
      for(let i = 0; i < oggettoResistenza.length; i++){    
         sommaResistenza= sommaResistenza + oggettoResistenza[i];
      };
      vitaDopata= vitaMassima + sommaResistenza ;
      combatDopata=combatGiocatore + sommaCombattività;
      button.innerHTML = resistGiocatore + '/'+ vitaDopata;
      button2.innerHTML = combatDopata;

    console.log('carteGiocate',carteGiocate);
    
    
  })

      

      Arma2=true;
      
     
    }else if(card.array=='3' && Equip1===true && Equip2===true){
      alert('Stai già utilizzando due oggetti. Gettane uno per usarne un altro.');


      // parte della Equip1 parte della Equip1 parte della Equip1 parte della Equip1 parte della Equip1 parte della Equip1
    }else if(card.array=='3' &&  Equip1==false){
     
      for( let i = 0; i < carte.length; i++){ 
        // === al posto di == importante per evitare che elimini le carte doppie
        if ( carte[i] === card) { 
          carte.splice(i, 1); 
          carteGiocate.push(card);
      
        }
     }
     oggettoDifesa.splice(0,oggettoDifesa.length);
     oggettoCombattività.splice(0,oggettoCombattività.length);
     oggettoResistenza.splice(0,oggettoResistenza.length);
 
     carteGiocate.forEach((oggetto)=>{

       oggettoDifesa.push(oggetto.Dif);
       oggettoCombattività.push(oggetto.Combat);
       oggettoResistenza.push(oggetto.Resist);
        
     })
    //  let sommaDifesa = 0;
    sommaDifesa=0;
    for(let i = 0; i < oggettoDifesa.length; i++){
       sommaDifesa = sommaDifesa + oggettoDifesa[i];    
    };
    
   //  let sommaCombattività = 0;
    sommaCombattività=0;
    for(let i = 0; i < oggettoCombattività.length; i++){     
        sommaCombattività= sommaCombattività + oggettoCombattività[i];    
    };
    
   //  let sommaResistenza = 0;
    sommaResistenza=0;
    for(let i = 0; i < oggettoResistenza.length; i++){    
       sommaResistenza= sommaResistenza + oggettoResistenza[i];
    };
      
      divRow.removeChild(Carta);
      totaleCarte = totaleCarte - 1;

      let carta = document.createElement('div');
      carta.classList.add('col-12')
      carta.style.cssText ="height:100%;width:100%;clear:both;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;display:column;border:solid 5px;border-color:#5a4c38; border-radius:15px;";
      slotEquip1.appendChild(carta);
    
      let Nome = document.createElement('h3');
      Nome.style.cssText ="height:4vh;padding:auto;color:white;";
      Nome.innerHTML= card.name;
      carta.appendChild(Nome);
      carta.classList.add(card.classe);

      let valoreResistenza = document.createElement('p');
      valoreResistenza.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
      valoreResistenza.innerHTML='Resistenza + '+ card.Resist; 
      carta.appendChild(valoreResistenza);
      
      let valorecombattività = document.createElement('p');
      valorecombattività.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
      valorecombattività.innerHTML='Combattività + '+ card.Combat; 
      carta.appendChild(valorecombattività); 
  
      let valoredifesa = document.createElement('p');
      valoredifesa.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
      valoredifesa.innerHTML='Difesa + '+ card.Dif; 
      carta.appendChild(valoredifesa); 

      let button = document.getElementById('resistenza');
      let button2 = document.getElementById('combattività');  
      let vitaDopata= vitaMassima + sommaResistenza ;
      let combatDopata= combatGiocatore + sommaCombattività;
      button.innerHTML = resistGiocatore + '/'+ vitaDopata;
      button2.innerHTML = combatDopata;

      // pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta

      let getta= document.createElement('button');
      getta.style.cssText ="margin-top:-10px;height:5vh;border:solid 2px;border-color:black;background-color:red;color:black;left:0px";
      getta.classList.add('btn');
      getta.innerHTML='Getta'; 
      carta.appendChild(getta); 
      getta.addEventListener("click", function(){
      for( let i = 0; i < carteGiocate.length; i++){ 
      // === al posto di == importante per evitare che elimini le carte doppie
      if ( carteGiocate[i] === card) { 
        carteGiocate.splice(i, 1); 
      }
      }
    slotEquip1.removeChild(carta);
    let button = document.getElementById('resistenza');
    let button2 = document.getElementById('combattività');  
  
    oggettoDifesa.splice(0,oggettoDifesa.length);
    oggettoCombattività.splice(0,oggettoCombattività.length);
    oggettoResistenza.splice(0,oggettoResistenza.length);
    carteGiocate.forEach((oggetto)=>{

      oggettoDifesa.push(oggetto.Dif);
      oggettoCombattività.push(oggetto.Combat);
      oggettoResistenza.push(oggetto.Resist);
       
    })
    sommaDifesa=0;
    for(let i = 0; i < oggettoDifesa.length; i++){
       sommaDifesa = sommaDifesa + oggettoDifesa[i];    
    };
    
  
    sommaCombattività=0;
    for(let i = 0; i < oggettoCombattività.length; i++){     
        sommaCombattività= sommaCombattività + oggettoCombattività[i];    
    };
    
   
    sommaResistenza=0;
    for(let i = 0; i < oggettoResistenza.length; i++){    
       sommaResistenza= sommaResistenza + oggettoResistenza[i];
    };
    vitaDopata= vitaMassima + sommaResistenza ;
    combatDopata=combatGiocatore + sommaCombattività;
    button.innerHTML = resistGiocatore + '/'+ vitaDopata;
    button2.innerHTML = combatDopata;
    
    Equip1=false;

    console.log('carteGiocate',carteGiocate);
    
  })

      Equip1=true;

      // parte della Equip2 parte della Equip2 parte della Equip2 parte della Equip2 parte della Equip2 parte della Equip2
    
    }else if(card.array=='3' &&  Equip1==true){
      for( let i = 0; i < carte.length; i++){ 
        // === al posto di == importante per evitare che elimini le carte doppie
        if ( carte[i] === card) { 
          carte.splice(i, 1); 
          carteGiocate.push(card);
         
        }
     }
     oggettoDifesa.splice(0,oggettoDifesa.length);
     oggettoCombattività.splice(0,oggettoCombattività.length);
     oggettoResistenza.splice(0,oggettoResistenza.length);

     carteGiocate.forEach((oggetto)=>{

       oggettoDifesa.push(oggetto.Dif);
       oggettoCombattività.push(oggetto.Combat);
       oggettoResistenza.push(oggetto.Resist);
        
     })
    //  let sommaDifesa = 0;
     sommaDifesa=0;
     for(let i = 0; i < oggettoDifesa.length; i++){
        sommaDifesa = sommaDifesa + oggettoDifesa[i];    
     };
     
    //  let sommaCombattività = 0;
    
     sommaCombattività=0;
     for(let i = 0; i < oggettoCombattività.length; i++){     
         sommaCombattività= sommaCombattività + oggettoCombattività[i];    
     };
     
    //  let sommaResistenza = 0;
     sommaResistenza=0;
     for(let i = 0; i < oggettoResistenza.length; i++){    
        sommaResistenza= sommaResistenza + oggettoResistenza[i];
     };
    
      divRow.removeChild(Carta);
      totaleCarte = totaleCarte - 1;

      let carta = document.createElement('div');
      carta.classList.add('col-12')
      carta.style.cssText ="height:100%;width:100%;clear:both;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;display:column;border:solid 5px;border-color:#5a4c38; border-radius:15px;";
      slotEquip2.appendChild(carta);
    
      let Nome = document.createElement('h3');
      Nome.style.cssText ="height:4vh;padding:auto;color:white;";
      Nome.innerHTML= card.name;
      carta.appendChild(Nome);
      carta.classList.add(card.classe);

      let valoreResistenza = document.createElement('p');
      valoreResistenza.style.cssText ="height:3vh;color:white;padding-top:2px;";
      valoreResistenza.innerHTML='Resistenza + '+ card.Resist; 
      carta.appendChild(valoreResistenza);
      
      let valorecombattività = document.createElement('p');
      valorecombattività.style.cssText ="height:3vh;color:white;padding-top:2px;";
      valorecombattività.innerHTML='Combattività + '+ card.Combat; 
      carta.appendChild(valorecombattività); 
  
      let valoredifesa = document.createElement('p');
      valoredifesa.style.cssText ="height:3vh;color:white;padding-top:2px;";
      valoredifesa.innerHTML='Difesa + '+ card.Dif; 
      carta.appendChild(valoredifesa); 

      
      let button = document.getElementById('resistenza');
      let button2 = document.getElementById('combattività');  
      let vitaDopata= vitaMassima + sommaResistenza ;
      let combatDopata= combatGiocatore + sommaCombattività;
      button.innerHTML = resistGiocatore + '/'+ vitaDopata;
      button2.innerHTML = combatDopata;

// pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta pulsante getta
      let getta= document.createElement('button');
      getta.style.cssText ="margin-top:-10px;height:5vh;border:solid 2px;border-color:black;background-color:red;color:black;left:0px";
      getta.classList.add('btn');
      getta.innerHTML='Getta'; 
      carta.appendChild(getta); 
      getta.addEventListener("click", function(){
      for( let i = 0; i < carteGiocate.length; i++){ 
      // === al posto di == importante per evitare che elimini le carte doppie
      if ( carteGiocate[i] === card) { 
        carteGiocate.splice(i, 1); 
      }
      }
    slotEquip2.removeChild(carta);
    let button = document.getElementById('resistenza');
    let button2 = document.getElementById('combattività');  
    oggettoDifesa.splice(0,oggettoDifesa.length);
    oggettoCombattività.splice(0,oggettoCombattività.length);
    oggettoResistenza.splice(0,oggettoResistenza.length);
    carteGiocate.forEach((oggetto)=>{

      oggettoDifesa.push(oggetto.Dif);
      oggettoCombattività.push(oggetto.Combat);
      oggettoResistenza.push(oggetto.Resist);
       
    })
    sommaDifesa=0;
    for(let i = 0; i < oggettoDifesa.length; i++){
       sommaDifesa = sommaDifesa + oggettoDifesa[i];    
    };
    
  
    sommaCombattività=0;
    for(let i = 0; i < oggettoCombattività.length; i++){     
        sommaCombattività= sommaCombattività + oggettoCombattività[i];    
    };
    
   
    sommaResistenza=0;
    for(let i = 0; i < oggettoResistenza.length; i++){    
       sommaResistenza= sommaResistenza + oggettoResistenza[i];
    };
    vitaDopata= vitaMassima + sommaResistenza ;
    combatDopata=combatGiocatore + sommaCombattività;
    button.innerHTML = resistGiocatore + '/'+ vitaDopata;
    button2.innerHTML = combatDopata;
    

    Equip2=false;

    console.log('carteGiocate',carteGiocate);
    
    
  })

      
      Equip2=true;
      
     
    }
  })


  // pulsante getta nello zaino

  let getta= document.createElement('button');
  getta.style.cssText ="margin-top:20px;height:6vh;border:solid 2px;border-color:black;background-color:red;color:black;left:0px";
  getta.classList.add('btn');
  getta.innerHTML='Getta'; 
  Carta.appendChild(getta); 
  getta.addEventListener("click", function(){
    for( let i = 0; i < carte.length; i++){ 
      // === al posto di == importante per evitare che elimini le carte doppie
      if ( carte[i] === card) { 
        carte.splice(i, 1); 
      }
   }
    divRow.removeChild(Carta);
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
 
ManoGiocatore.addEventListener('click', () => {
ManoGioc('Zaino');


console.log('oggettoDifesa',oggettoDifesa);
console.log('oggettoCombattività',oggettoCombattività);
console.log('oggettoResistenza',oggettoResistenza);
console.log('sommaResistenza',sommaResistenza);
console.log('sommaCombattività',sommaCombattività);
console.log('sommaDifesa',sommaDifesa);
console.log('carte giocate', carteGiocate);

});


 