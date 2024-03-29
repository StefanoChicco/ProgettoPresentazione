let Tutorial=document.querySelector('#tutorial');
let Carosello=document.querySelector('#carosello');
let Musica=document.querySelector('#musica');
let stamina=document.querySelector('#Stamina');
let puntiStamina=document.querySelector('#puntiStamina');
let nemiciSconfitti=document.querySelector('#nemiciSconfitti');
let combattività= document.querySelector('#combattività');
let resistenza= document.querySelector('#resistenza');
let divCombattivita= document.querySelector('#divCombattivita');
let divResistenza= document.querySelector('#divResistenza');
let movimento= document.querySelector('#movimento');
let difesa= document.querySelector('#difesa');
let rifornimenti= document.querySelector('#rifornimenti');
let dado = document.querySelector('#Dado');
let Risuldado = document.querySelector('#risultatoDado');
let turno= document.querySelector('#turno');
let arteguerra= document.querySelector('#ArteGuerra');
let Medicina= document.querySelector('#Medicina');
let CombattivitàNemico= document.querySelector('#CombattivitàNemico');
let ResistenzaNemico= document.querySelector('#ResistenzaNemico');
let NomeNemico= document.querySelector('#NomeNemico');
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

// la musica di gioco è definita mentre le altre no, perchè altrimenti all'evento non viene bloccata ma continua.
let musicUnder=new Audio('/audio/musicaSottofondo.mp3');
    
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
    let turni=0;
    
    // valori nemici
    let nemici =[
    {audio:"/audio/cervoRoar.mp3",classe2:'cervo2',classe:'cervo' , name:'Cervo', Y:2 , X:10 , Resist: 15 ,Combat:10},
    {audio:"/audio/cinghialeRoar.mp3",classe2:'cinghiale2',classe:'cinghiale' , name:'Cinghiale', Y:6, X:9 , Resist:20 , Combat:18},
    {audio:"/audio/dragonRoarHigh.mp3",classe2:'drago2',classe:'drago' , name:'Drago',Y:6, X:2,Resist:60,Combat:45},
    {audio:"/audio/ghoulRoar.mp3",classe2:'ghoul2',classe:'ghoul' , name:'Ghoul' ,Y:5, X:12 , Resist:22 , Combat:19},
    {audio:"/audio/lupoGrowl.mp3",classe2:'lupo2',classe:'lupo' , name:'Lupo', Y:11, X:3,Resist:18 , Combat:23},
    {audio:"/audio/lupoMannaroRoar.mp3",classe2:'lupoMannaro2',classe:'lupoMannaro' , name:'Lupo Mannnaro', Y:12, X:5,Resist:45, Combat:37},
    {audio:"/audio/minotauro.mp3",classe2:'minotauro2',classe:'minotauro' , name:'Minotauro' , Y:7, X:11 , Resist:50, Combat:38},
    {audio:"/audio/orsoRoar.mp3",classe2:'orso2',classe:'orso' , name:'Orso' , Y:2, X:5 , Resist:33 , Combat:30},
    {audio:"/audio/panteraRoar.mp3",classe2:'pantera2',classe:'pantera' , name:'Pantera' , Y:9, X:8 , Resist:25 , Combat:26},
    {audio:"/audio/ragnoGiganteRoar.mp3",classe2:'ragnoGigante2',classe:'ragnoGigante' , name:'Ragno Gigante' , Y:5, X:6 , Resist:28 , Combat:26},
    {audio:"/audio/rattoSquit.mp3",classe2:'ratto2',classe:'ratto' , name:'Ratto' , Y:2, X:8 , Resist:7 , Combat:8},
    {audio:"/audio/demonicWoman.mp3",classe2:'succubus2',classe:'succubus' , name:'Succubus' , Y:10, X:11 , Resist:37 , Combat:30},
    {audio:"/audio/tigreRoar.mp3",classe2:'tigre2',classe:'tigre' , name:'Tigre' , Y:3, X:2 , Resist:33 , Combat:30},
    {audio:"/audio/zombieScream.mp3",classe2:'zombie2',classe:'zombie' , name:'Zombie' , Y:8 , X:5 , Resist:15 , Combat:14}];

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


// valore booleano musica di sottofondo e tutorial.
let musicaOnOff=false;  
let caroselloBoolean=false;
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

// valori booleani turni

 let faseTurni1=false;
 let faseTurni2=false;
 let faseTurni3=false;
 let faseTurni4=false;

//  valori booleani armi rare

let Fiamma=false;
let Eterno=false;
let stopFiamma=false;
let stopEterno=false;

 Musica.addEventListener('click',()=>{
    
    musicUnder.play();
    musicUnder.volume=0.7;
    musicUnder.loop=true;
    if(musicaOnOff==false){
    Musica.innerHTML='Musica On';
    musicaOnOff=true;
    }else if(musicaOnOff==true){
    
    musicUnder.pause();
    musicUnder.currentTime = 0;
    Musica.innerHTML='Musica Off';
    musicaOnOff=false;
    }
})

Tutorial.addEventListener('click',()=>{
    if(caroselloBoolean==false){
    Carosello.removeAttribute("hidden");
    caroselloBoolean=true;
    }else{
        Carosello.setAttribute("hidden", "hidden");
        caroselloBoolean=false;
    }

})
Tutorial.addEventListener("mouseover", ()=>{
    Tutorial.style.cursor = "pointer"; 
  });
  

// funzioni resistenza
// Al click sul bottone resistenza viene creato un numero randomico tra 1 e 10 al quale viene addizionato 20
// e vengono riempite due variabili (una già esistente, vitaMassima viene creata)  con il numero ValoreResistenza
// e viene rimpiazzata la scritta tira con il valore di vitaMassima mentre il booleano resist diventa true.
// in caso il giocatore riprovasse a ricliccare nuovamente il bottone verrebbe trollato dall'alert
resistenza.addEventListener('click', ()=>{

    if(resist==false){
        let audio=new Audio("/audio/tiroStatistiche.mp3");
        audio.play();
        tiro = Math.ceil(Math.random() * 10);
         valoreResistenza = tiro + 20; 
         resistGiocatore=valoreResistenza;
         vitaMassima=valoreResistenza;
        let button = document.getElementById('resistenza');                 
            button.innerHTML = vitaMassima;
        

        resist=true;
    }else if(resist==true){
        let audio=new Audio("/audio/nonono.mp3");
        audio.play();
        alert('EHH!!! VOOLEVVIII!!! Mò TE LO TIENI!');
    
}
});

// funzioni combattività

// Al click sul bottone combattività viene creato un numero randomico tra 1 e 10 al quale viene addizionato 15
// e viene riempita la variabile combatGiocatore con il numero valoreCombattività.
// Viene rimpiazzata la scritta tira con valoreCombattività mentre il booleano comb diventa true.
// in caso il giocatore riprovasse a ricliccare nuovamente il bottone verrebbe trollato dall'alert
combattività.addEventListener('click', ()=>{
  
if(resist==false){
    alert('prima tira per la resistenza')
    
    }else if(comb==false){
        let audio=new Audio("/audio/tiroStatistiche.mp3");
        audio.play();
        tiro = Math.ceil(Math.random() * 10);
        let valoreCombattività = tiro + 15;   
        combatGiocatore = valoreCombattività;
   
   
   let button = document.getElementById('combattività');      
   button.innerHTML = valoreCombattività;
   
   comb=true;
    }else{
        let audio=new Audio("/audio/nonono.mp3");
        audio.play();
    alert('EHH!!! VOOLEVVIII!!! Mò TE LO TIENI!');

}
});

// funzioni difesa
// per le funzioni difesa, movimento, rifornimenti, abilità  al click su quei select se il giocatroe non ha ancora
// tirato per La resistenza o la combattività fanno partire un alert che lo informa.

difesa.addEventListener('click', ()=>{
    let audio=new Audio("/audio/difesa.mp3");
    audio.play();
     if(resist==false || comb==false){
            alert('prima tira per la resistenza e la combattività');
        
        }          
           
});

//  funzioni movimento

movimento.addEventListener('click', ()=>{
    let audio=new Audio("/audio/movimento.mp3");
    audio.play();
     if(resist==false || comb==false){
        alert('prima tira per la resistenza e la combattività')
        
    }
   
   });

    // funzione rifornimenti

rifornimenti.addEventListener('click', ()=>{
    let audio=new Audio("/audio/rifornimenti.mp3");
    audio.play();
        if(resist==false || comb==false){
            alert('prima tira per la resistenza e la combattività')         
        }
       
    }); 

    // funzione abilità


let counterStamina=(valore1, valore2, valore3, valore4)=>{
    let sottrazione= valore1 - valore2 - valore3 - valore4;      
           return sottrazione;
}

// al click su qualunque punto della pagina viene creata una variabile che sottrae al numero massimo di punti stamina
// (5) i valori di difesa,movimento e rifornimenti; poi per ogni option delle statistiche grazie ad una query 
// selector all trasforma la stringe dell'option in un numero e se il numero dell'option è maggiore dei puntiStamina
// rimanenti aggiunge l'attributo hidden per nasconderlo al giocatore in modo da non porterlo selezionare;
// altrimenti rimuove l'attributo hidden agli option che lo hanno per tornare a mostrarli.
document.addEventListener('click', ()=>{
        let PuntiStamina= counterStamina(5, difesa.value, movimento.value, rifornimenti.value);
   
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
        
        p.innerText = PuntiStamina;
        
        puntiStamina.appendChild(p);
             
});


// funzione dado combattimento
let confronto =(valore1 , valore2)=>{

    let sottrazione=(valore1)-valore2;
    return sottrazione;
}

// funzione per le carte Rare ottenuto sconfiggendo i miniboss.

                                let ArmiBoss= (valore1,valore2)=>{     
                                    carteGiocate.push(valore1);
                                    oggettoDifesa.push(valore1.Dif);
                                    oggettoCombattività.push(valore1.Combat);
                                    oggettoResistenza.push(valore1.Resist);

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
                                                                
                                    let cartaRara = document.createElement('div');
                                    cartaRara.classList.add('col-12');
                                    cartaRara.style.cssText ="height:100%;width:100%;clear:both;color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000;display:column;border:solid 5px;border-color:#5a4c38; border-radius:15px;";
                                    valore2.appendChild(cartaRara);
                                    
                                    let Nome = document.createElement('p');
                                    Nome.style.cssText ="height:11px;padding:2px;color:white;size:13px;";
                                    Nome.innerHTML= valore1.name;
                                    cartaRara.appendChild(Nome);
                                    cartaRara.classList.add(valore1.classe);

                                    let valoreResistenza = document.createElement('p');
                                    valoreResistenza.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
                                    valoreResistenza.innerHTML='Resistenza + '+ valore1.Resist; 
                                    cartaRara.appendChild(valoreResistenza);
                                    
                                    let valorecombattività = document.createElement('p');
                                    valorecombattività.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
                                    valorecombattività.innerHTML='Combattività + '+ valore1.Combat; 
                                    cartaRara.appendChild(valorecombattività); 
                                
                                    let valoredifesa = document.createElement('p');
                                    valoredifesa.style.cssText ="height:3vh;padding:auto;color:white;padding-top:2px;";
                                    valoredifesa.innerHTML='Difesa + '+ valore1.Dif; 
                                    cartaRara.appendChild(valoredifesa); 
                                    
                                    let button = document.getElementById('resistenza');
                                    let button2 = document.getElementById('combattività');  
                                    let vitaDopata= vitaMassima + sommaResistenza ;
                                    let combatDopata= combatGiocatore + sommaCombattività;
                                    button.innerHTML = resistGiocatore + '/'+ vitaDopata;
                                    button2.innerHTML = combatDopata;
                                    let audio=new Audio("/audio/armaSlot.mp3");
                                    audio.play();
                                
                                    alert('Hai trovato un arma formidabile. Ti accompagnerà per il resto del viaggio.')
                                };

// Dado serve unicamente per i combattimenti contro i nemici. 
// se il giocatore si trova in combattimento(avendo spostato la pedina su quella di un nemico) allora crea un numero
// randomico tra 0 e 9 che servirà a capire il quantitativo di danni causati al giocatore dal nemico e viceversa.
// Per farlo prende i valori N e G dall'array tabella che viene scelto dal risultato tra la sottrazione della
//  combattività totale del giocatore e quella del nemico. Il tiro del dado serve per scegliere l'oggetto all'interno 
// dell'array e portarlo nella funzione.

dado.addEventListener('click', ()=>{
    if(combat==true){
        let audio=new Audio("/audio/dadoAudio.mp3");
                audio.play();
        tiro = Math.floor(Math.random() * 10); 
        Risuldado.innerHTML=tiro;
        let difValue=Number(difesa.value);
        let DifTot=difValue + sommaDifesa;
        let combatTot= combatGiocatore + sommaCombattività;
        tiroDado=tiro;
        nemici.forEach(nemico => {
        if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){

            let scontro = confronto(combatTot , nemico.Combat);
            let combattimento=(valore)=>{
            let Difesa= valore[tiroDado].G - DifTot;
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
                        let audio=new Audio("/audio/morte.mp3");
                        audio.play();
                        let audio2=new Audio("/audio/morteMusica.mp3");
                        audio2.play();
                        confirm('Sei morto, Game over!');
                    }else if(vitaN<1){
                        let audio=new Audio("/audio/nemicoSconfitto.mp3");
                        audio.play();
                        combat=false;
                        nemico.X=100;
                        nemico.Y=100;
                        nemiciMorti= nemiciMorti +1;
                        nemiciSconfitti.innerHTML =nemiciMorti;
                        cardNemici.innerHTML ='';
                        divdifesa.parentNode.replaceChild(difesa, divdifesa);
                        divmovimento.parentNode.replaceChild(movimento, divmovimento);
                        divrifornimenti.parentNode.replaceChild(rifornimenti, divrifornimenti);
                        
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            cardNemici.innerHTML = `<div class="statisticheNemici text-terzo fs-3">Hai sconfitto ${nemico.name}</div>`;
                        });
                        schedaNemici.classList.remove(nemico.classe2);
                        if(nemiciMorti>7 && arteGuerra==false){
                            let CombattivitàAumentata= combatGiocatore + 5;
                            combatGiocatore=CombattivitàAumentata;
                            let combGuerra = document.getElementById('combattività');
                            combGuerra.innerHTML = combatGiocatore + sommaCombattività;
                            arteGuerra=true;
                        }
                        if(nemici[2].X==100 && nemici[2].Y==100){
                            let audio=new Audio("/audio/vittoria.mp3");
                        audio.play();
                            vittoria('Complimenti!! Hai vinto la partita!')
                        }
                        if(nemici[5].X==100 && nemici[5].Y==100){
                            if(Arma1==false && stopFiamma==false){ 
                                
                                let FiammaSlot1=ArmiBoss(armiRare[0],slotArma1);
                                stopFiamma=true;
                                Arma1=true;
                                return FiammaSlot1;
                                                               
                                
                            }else if(Arma1==true && Arma2==false && stopFiamma==false){

                                let FiammaSlot2=ArmiBoss(armiRare[0],slotArma2);                       
                                stopFiamma=true;
                                Arma2=true;
                               return FiammaSlot2;

                            }else if(Arma1==true && Arma2==true && stopFiamma==false){
                               alert("Hai trovato un arma formidabile ma non puoi brandirne un altra. Getta un arma in tuo possesso per poterla usare");
                               Fiamma=true;
                               stopFiamma=true;
                            };
                        }
                        if(nemici[6].X==100 && nemici[6].Y==100){
                                if(Arma1==false && stopEterno==false){ 
                                
                                    let EternoSlot1=ArmiBoss(armiRare[1],slotArma1);
                                    stopEterno=true;
                                    Arma1=true;
                                    return EternoSlot1;
                                  
                                
                                }else if(Arma1==true && Arma2==false && stopEterno==false){
    
                                    let EternoSlot2=ArmiBoss(armiRare[1],slotArma2);
                                    Arma2=true;
                                    stopEterno=true;
                                    return EternoSlot2;
                                   
                                }else if(Arma1==true && Arma2==true && stopEterno==false){
                                    alert("Hai trovato un arma formidabile ma non puoi brandirne un altra. Getta un arma in tuo possesso per poterla usare");
                                    Eterno=true;
                                    stopEterno=true;
                                }
                        }
                    }
            }
            
                if(scontro < -13) {
                    let battaglia1 = combattimento(tabella1);
                    return battaglia1;
  
                }else if(scontro>-14 && scontro< -10){
                    let battaglia2 = combattimento(tabella2);
                    return battaglia2;
                    
                }else if(scontro>-11 && scontro< -7){
                    let battaglia3 = combattimento(tabella3);
                    return battaglia3;
                    
                }else if(scontro>-8 && scontro< -4){                
                    let battaglia4 = combattimento(tabella4);
                    return battaglia4;
                    
                }else if(scontro>-5 && scontro< -1){
                    let battaglia5 = combattimento(tabella5);
                    return battaglia5;
                    
                }else if(scontro>-2 && scontro< 2){                
                    let battaglia6 = combattimento(tabella6);
                    return battaglia6;
                    
                }else if(scontro> 1 && scontro< 5){              
                    let battaglia7 = combattimento(tabella7);
                    return battaglia7;
  
                }else if(scontro > 4 && scontro< 7){                   
                    let battaglia8 = combattimento(tabella8);
                    return battaglia8;
                    
                }else if(scontro > 6 && scontro< 10){                   
                    let battaglia9 = combattimento(tabella9);
                    return battaglia9;
                    
                }else if(scontro > 9 && scontro< 13){   
                    let battaglia10 = combattimento(tabella10);
                    return battaglia10;
  
                }else if(scontro>12){
                    let battaglia11 = combattimento(tabella11);
                    return battaglia11;
  
                }
            }    
        });   
    }else{
        let audio=new Audio("/audio/nonono.mp3");
        audio.play();
        alert('Non sei in combattimento');
    }
    
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
        let audio=new Audio("/audio/passiGiocatore.mp3");
        audio.play();

        cardNemici.innerHTML ='';
        Risuldado.innerHTML='';
        turni=turni+1; 
    
        let dado = Math.floor(Math.random() * 10); 
        let Rifornimenti = rifornimenti.value*2 +1;
   
        if(nemiciMorti>3){
            Medicina.removeAttribute("hidden");
                      
        }
         
        if(nemiciMorti>7){
            arteguerra.removeAttribute("hidden");
            
        }

        if(nemiciMorti>8){
            Medicina.innerText='Medicina ++';
        }

    // al click su di una casella viene lanciato un dado da 1 a 10; se rientra nel rage di numeri allora si tira un altro dado da 100 e 
    // se il numero uscito è compreso tra 0 e 3 allora è un oggetto,tra 4 e 6 è un arma, tra 7 e 9 è un equipaggiamento.
    // Se la categ è arma allora viene lanciato un ulteriore dado da 7 e verrano presi
    // i valori dell'oggetto con il value uguale al tiro di dado, se la categ è oggetto allora viene lanciato un ulteriore dado da 5
    // se la categ è equipaggiamento allora viene lanciato un ulteriore dado da 6.
    // a seconda del numero uscito deve prendere le caratteristiche dell'oggetto nell'array e pusharle in array vuoto(carte)
    // aumentando di uno il countdown carteMassime(se supera 4 il giocatore).
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
        
        if(nemiciMorti>3 && nemiciMorti<9){
            let incrementoSalute =resistGiocatore + 2;
            resistGiocatore=incrementoSalute;
            let vitaMax= vitaMassima + sommaResistenza ;
            let div = document.getElementById('resistenza');                         
            div.innerHTML = resistGiocatore +'/' + vitaMax;
            if(resistGiocatore>=vitaMax){
                incrementoSalute=vitaMax;
                resistGiocatore=incrementoSalute;
                let div = document.getElementById('resistenza');                         
                div.innerHTML = resistGiocatore +'/' + vitaMax;
            }
        }else if(nemiciMorti>8){
            let incrementoSalute =resistGiocatore + 5;
            resistGiocatore=incrementoSalute;
            let vitaMax= vitaMassima + sommaResistenza ;
            let div = document.getElementById('resistenza');                         
            div.innerHTML = resistGiocatore +'/' + vitaMax;
            if(resistGiocatore>=vitaMax){
                incrementoSalute=vitaMax;
                resistGiocatore=incrementoSalute;
                let div = document.getElementById('resistenza');                         
                div.innerHTML = resistGiocatore +'/' + vitaMax;
            }
        }
    
        
        nemici.forEach(nemico => {

            if(turni>4 && faseTurni1==false){
                
                for (let i = 0; i < nemici.length; i++){
                    let CombattivitàNemico= nemici[i].Combat+5;
                faseTurni1=true;
                    nemici[i].Combat = CombattivitàNemico;
                  }
            }else if(turni>9 && faseTurni2==false){
                for (let i = 0; i < nemici.length; i++){
                    let CombattivitàNemico= nemici[i].Combat+3;
                faseTurni2=true;
                    nemici[i].Combat = CombattivitàNemico;
                  }
            }else if(turni>14 && faseTurni3==false){
                for (let i = 0; i < nemici.length; i++){
                    let CombattivitàNemico= nemici[i].Combat+3;
                faseTurni3=true;
                    nemici[i].Combat = CombattivitàNemico;
                  }
            }else if(turni>19 && faseTurni4==false){
                for (let i = 0; i < nemici.length; i++){
                    let CombattivitàNemico= nemici[i].Combat+4;
                faseTurni4=true;
                    nemici[i].Combat = CombattivitàNemico;
                  }
            };
            if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){
                casella.classList.add('nuvola'); 
                combat=true; 
                let audio=new Audio(nemico.audio);
                audio.play();
                
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

                difesa.parentNode.replaceChild(divdifesa, difesa);
                movimento.parentNode.replaceChild(divmovimento, movimento);
                rifornimenti.parentNode.replaceChild(divrifornimenti, rifornimenti);       
            
                divdifesa.innerText = difesa.value;
                divdifesa.classList.add('divStatistiche');
                divmovimento.innerText = movimento.value;
                divmovimento.classList.add('divStatisticheCorte');
                divrifornimenti.innerText = rifornimenti.value;
                divrifornimenti.classList.add('divStatisticheCorte');     
            };
        
        });
       
    }else if(resist==false){
        alert("prima resistenza e combattività");
    }else if(comb==false){
      alert('prima combattività')
    }else if(combat==true){  
        alert('Non puoi fuggire dal combattimento');
    }else{
        alert('è troppo lontano, scegli un altra via');  
    }
    });
    });
    


    // nel momento in cui il boss viene sconfitto viene inserita un arma rara all'interno di uno slot. 
    // se lo slot è libero l'arma viene inserita normalmente, se è occupato viene inserito in quello libero, se entrambi occupati 
    // viene reso un booleano true e viene lanciato un alert che spiega al giocatore che deve gettare un arma per ottenere 
    // un arma molto più potente. una volta inserita l'arma non si può togliere.
    
 