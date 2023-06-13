let dado = document.querySelector('#Dado');
let stamina=document.querySelector('#Stamina');
let puntiStamina=document.querySelector('#puntiStamina');
let combattività= document.querySelector('#combattività');
let resistenza= document.querySelector('#resistenza');
let divCombattivita= document.querySelector('#divCombattivita');
let divResistenza= document.querySelector('#divResistenza');
let movimento= document.querySelector('#movimento');
let difesa= document.querySelector('#difesa');
let rifornimenti= document.querySelector('#rifornimenti');
let abilità= document.querySelector('#abilità');
let turno= document.querySelector('#turno');
let CombattivitàNemico= document.querySelector('#CombattivitàNemico');
let ResistenzaNemico= document.querySelector('#ResistenzaNemico');
let NomeNemico= document.querySelector('#NomeNemico');
let ResistN=document.querySelector('#ResistN');
let cardNemici=document.querySelector('#cardNemici');
let schedaNemici=document.querySelector('#schedaNemici');
let ManoGiocatore=document.querySelector('#manoGiocatore');
let ButtonUsa=document.querySelector('#usa');
let ButtonGetta=document.querySelector('#getta');
let slotArma1=document.querySelector('#arma1');
let slotArma2=document.querySelector('#arma2');
let slotEquip1=document.querySelector('#slot1');
let slotEquip2=document.querySelector('#slot2');

let Mappa= document.querySelectorAll('section');
let Statistiche= document.querySelectorAll('option');

let divmovimento=document.createElement('div');
let divdifesa=document.createElement('div');
let divrifornimenti=document.createElement('div');
let divabilità=document.createElement('div');

    
    // valori iniziali giocatore: posizione, resistenza, combattività, count nemici sconfitti, vitamassima, modificatori
    // resistenza,combattività,difesa.

    let giocatore={Y:1, X:8};
    let resistGiocatore= 0;
    let combatGiocatore= 0;
    let nemiciMorti=0;
    let vitaMassima=0;
    let sommaResistenza = 0;
    let sommaDifesa = 0;
    let sommaCombattività = 0;
    
    
   
    
    
    // valori nemici
    let nemici =[
    {classe2:'cervo2',classe:'cervo' , name:'Cervo', Y:2 , X:10 , Resist: 15 ,Combat:10},
    {classe2:'cinghiale2',classe:'cinghiale' , name:'Cinghiale', Y:6, X:9 , Resist:20 , Combat:18},
    {classe2:'drago2',classe:'drago' , name:'Drago',Y:6, X:2,Resist:60,Combat:45},
    {classe2:'ghoul2',classe:'ghoul' , name:'Ghoul' ,Y:5, X:12 , Resist:22 , Combat:19},
    {classe2:'lupo2',classe:'lupo' , name:'Lupo', Y:11, X:3,Resist:18 , Combat:23},
    {classe2:'lupoMannaro2',classe:'lupoMannaro' , name:'Lupo Mannnaro', Y:12, X:5,Resist:40, Combat:33},
    {classe2:'minotauro2',classe:'minotauro' , name:'Minotauro' , Y:7, X:11 , Resist:50 , Combat:38},
    {classe2:'orso2',classe:'orso' , name:'Orso' , Y:2, X:5 , Resist:33 , Combat:30},
    {classe2:'pantera2',classe:'pantera' , name:'Pantera' , Y:9, X:8 , Resist:25 , Combat:26},
    {classe2:'ragnoGigante2',classe:'ragnoGigante' , name:'Ragno Gigante' , Y:5, X:6 , Resist:28 , Combat:26},
    {classe2:'ratto2',classe:'ratto' , name:'Ratto' , Y:2, X:8 , Resist:7 , Combat:8},
    {classe2:'succubus2',classe:'succubus' , name:'Succubus' , Y:10, X:11 , Resist:37 , Combat:30},
    {classe2:'tigre2',classe:'tigre' , name:'Tigre' , Y:3, X:2 , Resist:33 , Combat:35},
    {classe2:'zombie2',classe:'zombie' , name:'Zombie' , Y:8 , X:5 , Resist:15 , Combat:14}];

// Array per paragone dado/combattività

//  -14 o inferiore
    let tabella1=[{N:0,G:20},{N:0,G:18},{N:0,G:16},{N:0,G:14},{N:1,G:7},
                {N:2,G:6},{N:3,G:5},{N:4,G:4},{N:5,G:3},{N:6,G:0}];
// -11 o inferiore
    let tabella2=[{N:0,G:12},{N:0,G:10},{N:0,G:8},{N:1,G:7},{N:2,G:6},
                {N:3,G:6},{N:4,G:5},{N:5,G:4},{N:6,G:3},{N:7,G:0}];
// -8 o inferiore
    let tabella3=[{N:0,G:8},{N:0,G:7},{N:1,G:6},{N:2,G:6},{N:3,G:5},
                {N:4,G:5},{N:5,G:4},{N:6,G:3},{N:7,G:2},{N:8,G:0}];
// -5 o inferiore
    let tabella4=[{N:0,G:6},{N:1,G:6},{N:2,G:5},{N:3,G:5},{N:4,G:4},
                {N:5,G:4},{N:6,G:3},{N:7,G:2},{N:8,G:0},{N:9,G:0}];
// -2 o inferiore
    let tabella5=[{N:1,G:6},{N:2,G:5},{N:3,G:5},{N:4,G:4},{N:5,G:4},
                {N:6,G:3},{N:7,G:2},{N:8,G:1},{N:9,G:0},{N:10,G:0}];
// 0 o inferiore o superiore
    let tabella6=[{N:2,G:5},{N:3,G:5},{N:4,G:4},{N:5,G:4},{N:6,G:3},
                {N:7,G:2},{N:8,G:2},{N:9,G:1},{N:10,G:0},{N:11,G:0}];
// +2 o superiore
    let tabella7=[{N:3,G:5},{N:4,G:4},{N:5,G:4},{N:6,G:3},{N:7,G:2},
                {N:8,G:2},{N:9,G:1},{N:10,G:0},{N:11,G:0},{N:12,G:0}];
// +5 o superiore
    let tabella8=[{N:4,G:5},{N:5,G:4},{N:6,G:3},{N:7,G:3},{N:8,G:2},
                {N:9,G:2},{N:10,G:1},{N:11,G:0},{N:12,G:0},{N:14,G:0}];
// +7 o superiore
    let tabella9=[{N:5,G:4},{N:6,G:3},{N:7,G:3},{N:8,G:2},{N:9,G:2},
                {N:10,G:2},{N:11,G:1},{N:12,G:0},{N:14,G:0},{N:16,G:0}];
// +10 o superiore
    let tabella10=[{N:6,G:4},{N:7,G:3},{N:8,G:3},{N:9,G:2},{N:10,G:2},
                {N:11,G:1},{N:12,G:0},{N:14,G:0},{N:16,G:0},{N:18,G:0}];
// +13 o superiore
    let tabella11=[{N:7,G:4},{N:8,G:3},{N:9,G:2},{N:10,G:2},{N:11,G:2},
                {N:12,G:1},{N:14,G:0},{N:16,G:0},{N:18,G:0},{N:20,G:0}];

      
// valori booleani statistiche, movimento, combattimento.

let resist= false;
let comb= false;
let map= false;
let combat= false;

// valori booleani slot armi e equipaggiamento

let Arma1=false;
let Arma2=false;
let Equip1=false;
let Equip2=false;

// valori boleani abilità

let arteGuerra= false;
let medicina= false;
let raggioPsico= false;
let scudoPsico= false;

// funzione dado combattimento
let confronto =(valore1 , valore2)=>{

    let sottrazione=(valore1)-valore2;
    return sottrazione;
}



dado.addEventListener('click', ()=>{
    if(combat==true){
        tiro = Math.floor(Math.random() * 10); 
        alert(tiro);
        let difValue=Number(difesa.value);
        let DifTot=difValue + sommaDifesa;
        let combatTot= combatGiocatore + sommaCombattività;
        tiroDado=tiro;
        nemici.forEach(nemico => {
        if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){
  
            let scontro = confronto(combatTot , nemico.Combat);
            let combattimento=(valore, valore2)=>{
            let Difesa= valore[tiroDado].G - valore2;
            if(Difesa<0){
              Difesa=0;
            } 
                let vitaN = nemico.Resist - valore[tiroDado].N;  
                let vitaG = resistGiocatore - Difesa; 
                let vitaDopata= vitaMassima + sommaResistenza ;
                nemico.Resist=vitaN;
                resistGiocatore=vitaG;
                
                let div = document.getElementById('resistenza');                          
                div.innerHTML = vitaG +'/' + vitaDopata ;
                
                let p = document.getElementById('ResistN');      
                p.innerText = vitaN + '/';
                
                    if(vitaG<1){
                       
                        confirm('Sei morto, Game over!');
                    }else if(vitaN<1){
                        combat=false;
                        nemico.X=100;
                        nemico.Y=100;
                        nemiciMorti=nemiciMorti +1 ;
                        cardNemici.innerHTML ='';
                        
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            cardNemici.innerHTML = `<div class="statisticheNemici text-terzo fs-3">Hai sconfitto ${nemico.name}</div>`;
                        });
                        schedaNemici.classList.remove(nemico.classe2);
                    }
            }
            
                if(scontro < -13) {
                    let battaglia1 = combattimento(tabella1,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia1;
  
                }else if(scontro>-14 && scontro< -10){
                    let battaglia2 = combattimento(tabella2,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia2;
                    
                }else if(scontro>-11 && scontro< -7){
                    let battaglia3 = combattimento(tabella3,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia3;
                    
                }else if(scontro>-8 && scontro< -4){                
                    let battaglia4 = combattimento(tabella4,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia4;
                    
                }else if(scontro>-5 && scontro< -1){
                    let battaglia5 = combattimento(tabella5,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia5;
                    
                }else if(scontro>-2 && scontro< 2){                
                    let battaglia6 = combattimento(tabella6,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia6;
                    
                }else if(scontro> 1 && scontro< 5){              
                    let battaglia7 = combattimento(tabella7,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia7;
  
                }else if(scontro > 4 && scontro< 7){                   
                    let battaglia8 = combattimento(tabella8,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia8;
                    
                }else if(scontro > 6 && scontro< 10){                   
                    let battaglia9 = combattimento(tabella9,DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia9;
                    
                }else if(scontro > 9 && scontro< 13){   
                    let battaglia10 = combattimento(tabella10, DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia10;
  
                }else if(scontro>12){
                    let battaglia11 = combattimento(tabella11, DifTot);
                    console.log('DifTot',DifTot);
                    console.log('combatTot', combatTot)
                    return battaglia11;
  
                }
            }    
        });   
    }else{
        alert('Non sei in combattimento');
    }
    
  });
let counterStamina=(valore1, valore2, valore3, valore4)=>{
    let sottrazione= valore1 - valore2 - valore3 - valore4;      
           return sottrazione;
}


// funzioni resistenza

resistenza.addEventListener('click', ()=>{

    if(resist==false){
        tiro = Math.ceil(Math.random() * 10);
         valoreResistenza = tiro + 20; 
         resistGiocatore=valoreResistenza;
         vitaMassima=resistGiocatore;
        let button = document.getElementById('resistenza');                 
            button.innerHTML = vitaMassima;
        

        resist=true;
    }else if(resist==true){
        alert('Mò TE LO TIENI!');
    
}
});

// funzioni combattività

combattività.addEventListener('click', ()=>{
  
if(resist==false){
    alert('prima tira per la resistenza')
    
    }else if(comb==false){
        tiro = Math.ceil(Math.random() * 10);
        let valoreCombattività = tiro + 15;   
        combatGiocatore = valoreCombattività;
   
   
   let button = document.getElementById('combattività');      
   button.innerHTML = valoreCombattività;
   
   comb=true;
    }else{
    alert('Mò TE LO TIENI!');

}
});

//    funzioni difesa

difesa.addEventListener('click', ()=>{

     if(resist==false || comb==false){
            alert('prima tira per la resistenza e la combattività');
        
        }else if(combat==true){
            alert('Sei in combattimento, non puoi cambiare le statistiche')
        };          
           
});

//  funzioni movimento

movimento.addEventListener('click', ()=>{
   
     if(resist==false || comb==false){
        alert('prima tira per la resistenza e la combattività')
        
    }else if(combat==true){
        alert('Sei in combattimento, non puoi cambiare le statistiche')
    };
   
   });

    // funzione rifornimenti

rifornimenti.addEventListener('click', ()=>{

        if(resist==false || comb==false){
            alert('prima tira per la resistenza e la combattività')         
        }else if(combat==true){
            alert('Sei in combattimento, non puoi cambiare le statistiche')
        };
       
    }); 

    // funzione abilità

abilità.addEventListener('click', ()=>{

    if(resist==false || comb==false){
        alert("prima tira per la resistenza e la combattività")

    }else if(combat==true){
        alert('Sei in combattimento, non puoi cambiare le abilità')
    };
   
});

document.addEventListener('click', ()=>{
    let PuntiStamina= counterStamina(5, difesa.value, movimento.value, rifornimenti.value);
    if( PuntiStamina>=0){
        Statistiche.forEach(option => {
            let number=parseInt(option.value);
            if(number>PuntiStamina){
                option.setAttribute("hidden", "hidden");          
            }else{
                option.removeAttribute("hidden");
                
            }
        });
    
        puntiStamina.innerText =''; 
        
        let p = document.createElement('p');
        
        p.classList.add('text-terzo');
        
        p.innerText = `${PuntiStamina}`;
        
        puntiStamina.appendChild(p);
    }  
        
           
});


// funzione Turno

turno.addEventListener('click', ()=>{
    if(combat==false){
     cardNemici.innerHTML ='';
     move=false;
     shield=false;
     item=false;
     abilities=false;
     map=false;
   
     divdifesa.parentNode.replaceChild(difesa, divdifesa);
     divmovimento.parentNode.replaceChild(movimento, divmovimento);
     divrifornimenti.parentNode.replaceChild(rifornimenti, divrifornimenti);
     divabilità.parentNode.replaceChild(abilità, divabilità);
    }else{

        alert('finisci questo scontro');

    };
   
}); 

// funzioni mappamento per movimento giocatore

let mappamentoX = (valore1 , valore2)=>{

    let sottrazione=valore1 - valore2;
    if (sottrazione<0) {
        risultato = sottrazione*(-1);
        return risultato;
    } else{
       return sottrazione;

    }

};
let mappamentoY = (valore1 , valore2)=>{

    let sottrazione=valore1 - valore2;
    if (sottrazione<0) {
        risultato = sottrazione*(-1);
        return risultato;
    } else{
       return sottrazione;

    }

};

Mappa.forEach((casella) => {
    casella.addEventListener('click', () => {
    let x=casella.dataset.x;
    let y=casella.dataset.y;
    
    let orizzontale =mappamentoX(giocatore.X , x);
    let verticale =mappamentoY(giocatore.Y , y);
    
    if(orizzontale<=movimento.value && verticale<=movimento.value && map==false && combat==false && resist==true && comb==true){
       Mappa.forEach(section => {
           section.classList.remove('giocatore')
        });
        casella.classList.add('giocatore');  
        giocatore.X= casella.dataset.x;
        giocatore.Y= casella.dataset.y;
        map=true;
        let abilitàLettura = abilità.data-x;
        if(abilitàLettura==0){
          abilitàLettura = 'Arte della Guerra';
        }else if(abilitàLettura==1){
          abilitàLettura='Medicina';
        }else if(abilitàLettura==2){
          abilitàLettura= 'Raggio Psichico';
        }else{
          abilitàLettura= 'Scudo Psichico';
        }
        difesa.parentNode.replaceChild(divdifesa, difesa);
        movimento.parentNode.replaceChild(divmovimento, movimento);
        rifornimenti.parentNode.replaceChild(divrifornimenti, rifornimenti);
        abilità.parentNode.replaceChild(divabilità, abilità);
    
        divdifesa.innerText = difesa.value;
        divdifesa.classList.add('divStatistiche');
        divmovimento.innerText = movimento.value;
        divmovimento.classList.add('divStatisticheCorte');
        divrifornimenti.innerText = rifornimenti.value;
        divrifornimenti.classList.add('divStatisticheCorte');
        divabilità.innerText = abilitàLettura;
        divabilità.classList.add('divStatistiche');
    
        let dado = Math.floor(Math.random() * 10); 
        let Rifornimenti = rifornimenti.value*2 +1;
        console.log(dado,'dado');
        console.log(Rifornimenti,'Rifornimenti');
        if(Rifornimenti>=dado && totaleCarte<4){
            totaleCarte ++;
            
          let categ = Math.floor(Math.random() * 10);
          console.log(categ,'dado categorie')
          console.log(carte);
          if(categ<4){
            let dadoOggetti=  Math.floor(Math.random() * 5);
            oggetti.forEach(oggetto => {
              if(dadoOggetti == oggetto.value){
                let oggettoScelto=oggetto;
                carte.push(oggettoScelto);
               alert('Hai trovato '+ oggettoScelto.name);
              }
            });
          }else if(categ>3 && categ<7){
            let dadoArmi=  Math.floor(Math.random() * 7);
            armi.forEach(arma => {
              if(dadoArmi == arma.value){
                let armaScelta=arma;
                carte.push(armaScelta);
                alert('Hai trovato '+ armaScelta.name);
          }})
            }else{
            let dadoEquip=  Math.floor(Math.random() * 6);
            equipaggiamenti.forEach(equip => {
              if(dadoEquip == equip.value){
                let equipScelto=equip;
                carte.push(equipScelto);
                alert('Hai trovato '+ equipScelto.name);
          }})
            
          }
        }else if(Rifornimenti>=dado && totaleCarte>3){
            alert('Hai lo zaino pieno, non puoi raccogliere altri oggetti');  
            
        }else{
          console.log('tiro sfortunato')
         };
         
    
        nemici.forEach(nemico => {
            if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){
                casella.classList.add('nuvola'); 
                combat=true; 
    
                cardNemici.innerHTML =''; 
                schedaNemici.classList.add(nemico.classe2)

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
    }else if(comb==false){
      alert('prima combattività')
    }else{
        alert('è troppo lontano, scegli un altra via');  
    }
    });
    });
    

    
