let dado = document.querySelector('#Dado');
let combattività= document.querySelector('#combattività');
let resistenza= document.querySelector('#resistenza');
let divCombattivita= document.querySelector('#divCombattivita');
let divResistenza= document.querySelector('#divResistenza');
let movimento= document.querySelector('#movimento');
let difesa= document.querySelector('#difesa');
let rifornimenti= document.querySelector('#rifornimenti');
let abilità= document.querySelector('#abilità');
let turno= document.querySelector('#turno');
let Mappa= document.querySelectorAll('section');
let CombattivitàNemico= document.querySelector('#CombattivitàNemico');
let ResistenzaNemico= document.querySelector('#ResistenzaNemico');
let NomeNemico= document.querySelector('#NomeNemico');
let ResistN=document.querySelector('#ResistN');
let cardNemici=document.querySelector('#cardNemici');

    
    // valori iniziali giocatore: posizione, resistenza, combattività.

    let giocatore={Y:1, X:8};
    let resistGiocatore= 0;
    let combatGiocatore= 0;
    let tiroDado=0;
    let nemiciMorti=0;

    // valori nemici
    let nemici =[
    {classe:'cervo' , name:'Cervo', Y:2 , X:10 , Resist: 15 ,Combat:10},
    {classe:'cinghiale' , name:'Cinghiale', Y:6, X:9 , Resist:20 , Combat:18},
    {classe:'drago' , name:'Drago',Y:6, X:2,Resist:60,Combat:45},
    {classe:'ghoul' , name:'Ghoul' ,Y:5, X:12 , Resist:22 , Combat:19},
    {classe:'lupo' , name:'Lupo', Y:11, X:3,Resist:18 , Combat:23},
    {classe:'lupoMannaro' , name:'Lupo Mannnaro', Y:12, X:5,Resist:40, Combat:33},
    {classe:'minotauro' , name:'Minotauro' , Y:7, X:11 , Resist:50 , Combat:38},
    {classe:'orso' , name:'Orso' , Y:2, X:5 , Resist:33 , Combat:30},
    {classe:'pantera' , name:'Pantera' , Y:9, X:8 , Resist:25 , Combat:26},
    {classe:'ragnoGigante' , name:'Ragno Gigante' , Y:5, X:6 , Resist:28 , Combat:26},
    {classe:'ratto' , name:'Ratto' , Y:2, X:8 , Resist:7 , Combat:8},
    {classe:'succubus' , name:'Succubus' , Y:10, X:11 , Resist:37 , Combat:30},
    {classe:'tigre' , name:'Tigre' , Y:3, X:2 , Resist:33 , Combat:35},
    {classe:'zombie' , name:'Zombie' , Y:8 , X:5 , Resist:15 , Combat:14}];

// Array per paragone dado/combattività

//  -14 o inferiore
    let tabella1=[{N:0,G:100},{N:0,G:100},{N:0,G:8},{N:0,G:8},{N:1,G:7},
                {N:2,G:6},{N:3,G:5},{N:4,G:4},{N:5,G:3},{N:6,G:0}];
// -11 o inferiore
    let tabella2=[{N:0,G:100},{N:0,G:8},{N:0,G:7},{N:1,G:7},{N:2,G:6},
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
// +12 o superiore
    let tabella11=[{N:7,G:4},{N:8,G:3},{N:9,G:2},{N:10,G:2},{N:11,G:2},
                {N:12,G:1},{N:14,G:0},{N:16,G:0},{N:18,G:0},{N:20,G:0}];

      
// valori booleani statistiche, movimento, combattimento.

let check= false;
let jack= false;
let move= false;
let shield= false;
let item= false;
let abilities= false;
let map= false;
let combat= false;

// valori boleani abilità

let arteGuerra= false;
let medicina= false;
let raggioPsico= false;
let scudoPsico= false;

// funzione dado combattimento
let confronto =(valore1 , valore2)=>{

    let sottrazione=valore1-valore2;
    return sottrazione;
}

dado.addEventListener('click', ()=>{
    if(combat==true){

        tiro = Math.floor(Math.random() * 10); 
        alert(tiro);
        tiroDado=tiro;
        nemici.forEach(nemico => {
        if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){

            let scontro = confronto(combatGiocatore , nemico.Combat);
    
                if(scontro < -13) {
                    let vitaN = nemico.Resist - tabella1[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella1[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1 ;
                            
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            });
                        }

                }else if(scontro>-14 && scontro< -10){
                    let vitaN = nemico.Resist - tabella2[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella2[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';   
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1 ;                            
                            
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            }); 
                        }
                    
                }else if(scontro>-11 && scontro< -7){
                    let vitaN = nemico.Resist - tabella3[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella3[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1 ;
                            
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            });
                            
                              
                         
                        }
                    
                }else if(scontro>-8 && scontro< -4){                
                    let vitaN = nemico.Resist - tabella4[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella4[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';                    
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemi;
                            nemiciMorti=nemiciMorti +1 ;
                            
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            });
                            
                              
                         
                        }
                    
                }else if(scontro>-5 && scontro< -1){
                    let vitaN = nemico.Resist - tabella5[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella5[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';                    
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                          nemico.X=100;
                            nemi;
                            nemiciMorti=nemiciMorti +1 ;
                            
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            });                         
                        }
                    
                }else if(scontro>-2 && scontro< 2){                
                    let vitaN = nemico.Resist - tabella6[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella6[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';                    
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1 ;
                           
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            });                 
                        }
                    
                }else if(scontro> 1 && scontro< 5){              
                    let vitaN = nemico.Resist - tabella7[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella7[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';                    
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1 ;
                           
                            Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            });                       
                        }
                    
                }else if(scontro > 4 && scontro< 7){                   
                    let vitaN = nemico.Resist - tabella8[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella8[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';                    
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1 ;
                            
                            MappaforEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            });
                            
                        }
                    
                }else if(scontro > 6 && scontro< 10){                   
                    let vitaN = nemico.Resist - tabella9[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella9[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';                   
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1 ;
                            
                           Mappa.forEach(section => {
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola')
                            });
                            
                              
                    
                        }
                    
                }else if(scontro > 9 && scontro< 13){   
                    let vitaN = nemico.Resist - tabella10[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella10[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1 ;

                            Mappa.forEach(section => {  
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola');
                            });
                            
                              
                     
                        }

                }else if(scontro>12){
                    let vitaN = nemico.Resist - tabella11[tiroDado].N;  
                    let vitaG = resistGiocatore - tabella11[tiroDado].G; 
                    nemico.Resist=vitaN;
                    resistGiocatore=vitaG;
                    
                    let div = document.getElementById('resistenza');                          
                    div.innerHTML = vitaG +'/' + vitaMassima;
                    
                    let p = document.getElementById('ResistN');      
                    p.innerText = vitaN + '/';  
                    
                        if(vitaG<1){
                            alert('Sei Morto, la partita è finita!');
                            document.location.href = '/index.html';
                        }else if(vitaN<1){
                            combat=false;
                            nemico.X=100;
                            nemico.Y=100;
                            nemiciMorti=nemiciMorti +1; 
                           
                            Mappa.forEach(section => {  
                            section.classList.remove(nemico.classe);
                            section.classList.remove('nuvola');
                            });
                            
                           
                        
                            
                        }
                }
            }    
        });   
    }else{
        alert('Non sei in combattimento');
    }
    
});

// funzioni resistenza

resistenza.addEventListener('click', ()=>{

    if(check==false){
        tiro = Math.ceil(Math.random() * 10);
        valoreResistenza = tiro + 20; 
        resistGiocatore=valoreResistenza;
        vitaMassima= resistGiocatore ;
        let button = document.getElementById('resistenza');                 
            button.innerHTML = valoreResistenza;
        

        check=true;
    }else if(check==true){
        alert('Mò TE LO TIENI!');
    
}
});

// funzioni combattività

combattività.addEventListener('click', ()=>{
  
if(check==false){
    alert('prima tira per la resistenza')
    
    }else if(jack==false){
        tiro = Math.ceil(Math.random() * 10);
        valoreCombattività = tiro + 15;   
        combatGiocatore = valoreCombattività;
   
   
   let button = document.getElementById('combattività');      
   button.innerHTML = valoreCombattività;
   
   jack=true;
    }else{
    alert('Mò TE LO TIENI!');

}
});

//    funzioni difesa

difesa.addEventListener('click', ()=>{
  
    if(shield!=false){
        alert('aspetta il prossimo turno');

    }else if(check==false){
        alert('prima tira per la resistenza e la combattività')
        
        }
    else{
        
        shield=true; 
    };
   
   });

//  funzioni movimento

movimento.addEventListener('click', ()=>{
    if(move!=false){
        alert('aspetta il prossimo turno');

        }
        else if(check==false){
            alert('prima tira per la resistenza e la combattività')
            
            }else{
        move=true; 
    };
   
   });

    // funzione rifornimenti

rifornimenti.addEventListener('click', ()=>{
        if(item!=false){
            alert('aspetta il prossimo turno');
        } else if(check==false){
            alert('prima tira per la resistenza e la combattività')           
            }else {
            item=true; 
        };
       
    }); 

    // funzione abilità

abilità.addEventListener('click', ()=>{
    if(abilities!=false){
        alert("aspetta l'inizio del turno");
        
    } else if(jack==false){
        alert("prima devi iniziare il primo turno")
    }else {
        abilities=true;
        
    };
   
});

// funzione Turno

turno.addEventListener('click', ()=>{
    if(combat==false){
     
     move=false;
     shield=false;
     item=false;
     abilities=false;
     map=false;

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





// al click sulla casella deve prendere l'informazione movimento e
//  paragonarla con il risultato delle funzioni mappamentoX ed Y della 
// casella con la casella giocatore e quella cliccata. se rispetta la
// condizione (risultato<=movimento) per entrambe le funzioni e il valore map è false, 
// allora toglie la classlist giocatore alla vecchia casella e la inserisce nella casella
// cliccata, altrimenti darà un alert che dice "è troppo lontano, scegli un altra via"

// funzione movimento giocatore.

document.querySelectorAll(".caselle").forEach((casella) => {
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
            
            nemici.forEach(nemico => {
                if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){
                    casella.classList.add('nuvola'); 
                    combat=true; 

                    cardNemici.innerHTML =''; 
                    
                    let div = document.createElement('div');

                    div.classList.add('col-12', 'col-md-6', 'my-2');
        
                    div.innerHTML = `
                    
                    <div id="NomeNemico" class="statisticheNemici text-terzo">Nome:${nemico.name}
                    </div>
                    <div id="ResistenzaNemico" class="statisticheNemici text-terzo">Resistenza:<p id="ResistN"></p>${nemico.Resist}
                    </div>
                    <div id="CombattivitàNemico" class="statisticheNemici text-terzo">Combattività:${nemico.Combat}</div> 
                    `;
        
                    cardNemici.appendChild(div);
              
                    
                    // {let div = document.createElement('div');      
                    // div.classList.add('divNemico');
                    // div.innerText = nemico.Combat;
                    // CombattivitàNemico.appendChild(div);}  
                    
                    // {let div = document.createElement('div');      
                    // div.classList.add('divNemico');       
                    // div.innerText = nemico.Resist;
                    // ResistenzaNemico.appendChild(div);} 

                    // {let div = document.createElement('div');      
                    // div.classList.add('divNemico');       
                    // div.innerText = nemico.name;
                    // NomeNemico.appendChild(div); } 

                };
            });
           
        }else if(map==true){
            alert('aspetta il prossimo turno');                 
        }else if(check==false){
            alert("prima resistenza e combattività");
        }else{
            alert('è troppo lontano, scegli un altra via');  
        }
    });
});



// per il combattimento fa partire una funzione (dopo lo spostamento del pg) che per ogni nemico deve
// paragonare i parametri X e y del giocatore con quelli nemici e se combaciano con uno far partire il 
// combattimento e cancellare la classlist nemico dalla mappa.

// la funzione combattimento mette a paragone le caratteristiche combattività del giocatore
// con quelle del nemico(sottrae la forza del giocatore a quella del nemico) e si tira il dado
// a seconda del tiro uscito ci sarà una tabella che informa il numero dei danni ricevuti dal 
// giocatore e dal nemico e andranno scalati dal loro livello di combattività. una volta che la 
// resistenza del nemico va a 0 il giocatore viene premiato con un oggetto casuale(tranne per i boss
// che danno un oggetto specifico)e il giocatore può far avanzare il turno.