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

let A1 = document.querySelector('#A-1'); let A2 = document.querySelector('#A-2');
let A3 = document.querySelector('#A-3'); let A4 = document.querySelector('#A-4');
let A5 = document.querySelector('#A-5'); let A6 = document.querySelector('#A-6');
let A7 = document.querySelector('#A-7'); let A8 = document.querySelector('#A-8');
let A9 = document.querySelector('#A-9'); let A10 = document.querySelector('#A-10');
let A11 = document.querySelector('#A-11'); let A12 = document.querySelector('#A-12'); 

let B1 = document.querySelector('#B-1'); let B2 = document.querySelector('#B-2');
let B3 = document.querySelector('#B-3'); let B4 = document.querySelector('#B-4');
let B5 = document.querySelector('#B-5'); let B6 = document.querySelector('#B-6');
let B7 = document.querySelector('#B-7'); let B8 = document.querySelector('#B-8');
let B9 = document.querySelector('#B-9'); let B10 = document.querySelector('#B-10');
let B11 = document.querySelector('#B-11'); let B12 = document.querySelector('#B-12'); 

let C1 = document.querySelector('#C-1'); let C2 = document.querySelector('#C-2');
let C3 = document.querySelector('#C-3'); let C4 = document.querySelector('#C-4');
let C5 = document.querySelector('#C-5'); let C6 = document.querySelector('#C-6');
let C7 = document.querySelector('#C-7'); let C8 = document.querySelector('#C-8');
let C9 = document.querySelector('#C-9'); let C10 = document.querySelector('#C-10');
let C11 = document.querySelector('#C-11'); let C12 = document.querySelector('#C-12');

let D1 = document.querySelector('#D-1'); let D2 = document.querySelector('#D-2');
let D3 = document.querySelector('#D-3'); let D4 = document.querySelector('#D-4');
let D5 = document.querySelector('#D-5'); let D6 = document.querySelector('#D-6');
let D7 = document.querySelector('#D-7'); let D8 = document.querySelector('#D-8');
let D9 = document.querySelector('#D-9'); let D10 = document.querySelector('#D-10');
let D11 = document.querySelector('#D-11'); let D12 = document.querySelector('#D-12');

let E1 = document.querySelector('#E-1'); let E2 = document.querySelector('#E-2');
let E3 = document.querySelector('#E-3'); let E4 = document.querySelector('#E-4');
let E5 = document.querySelector('#E-5'); let E6 = document.querySelector('#E-6');
let E7 = document.querySelector('#E-7'); let E8 = document.querySelector('#E-8');
let E9 = document.querySelector('#E-9'); let E10 = document.querySelector('#E-10');
let E11 = document.querySelector('#E-11'); let E12 = document.querySelector('#E-12');

let F1 = document.querySelector('#F-1'); let F2 = document.querySelector('#F-2');
let F3 = document.querySelector('#F-3'); let F4 = document.querySelector('#F-4');
let F5 = document.querySelector('#F-5'); let F6 = document.querySelector('#F-6');
let F7 = document.querySelector('#F-7'); let F8 = document.querySelector('#F-8');
let F9 = document.querySelector('#F-9'); let F10 = document.querySelector('#F-10');
let F11 = document.querySelector('#F-11'); let F12 = document.querySelector('#F-12');

let G1 = document.querySelector('#G-1'); let G2 = document.querySelector('#G-2');
let G3 = document.querySelector('#G-3'); let G4 = document.querySelector('#G-4');
let G5 = document.querySelector('#G-5'); let G6 = document.querySelector('#G-6');
let G7 = document.querySelector('#G-7'); let G8 = document.querySelector('#G-8');
let G9 = document.querySelector('#G-9'); let G10 = document.querySelector('#G-10');
let G11 = document.querySelector('#G-11'); let G12 = document.querySelector('#G-12');

let H1 = document.querySelector('#H-1'); let H2 = document.querySelector('#H-2');
let H3 = document.querySelector('#H-3'); let H4 = document.querySelector('#H-4');
let H5 = document.querySelector('#H-5'); let H6 = document.querySelector('#H-6');
let H7 = document.querySelector('#H-7'); let H8 = document.querySelector('#H-8');
let H9 = document.querySelector('#H-9'); let H10 = document.querySelector('#H-10');
let H11 = document.querySelector('#H-11'); let H12 = document.querySelector('#H-12');

let I1 = document.querySelector('#I-1'); let I2 = document.querySelector('#I-2');
let I3 = document.querySelector('#I-3'); let I4 = document.querySelector('#I-4');
let I5 = document.querySelector('#I-5'); let I6 = document.querySelector('#I-6');
let I7 = document.querySelector('#I-7'); let I8 = document.querySelector('#I-8');
let I9 = document.querySelector('#I-9'); let I10 = document.querySelector('#I-10');
let I11 = document.querySelector('#I-11'); let I12 = document.querySelector('#I-12');

let L1 = document.querySelector('#L-1'); let L2 = document.querySelector('#L-2');
let L3 = document.querySelector('#L-3'); let L4 = document.querySelector('#L-4');
let L5 = document.querySelector('#L-5'); let L6 = document.querySelector('#L-6');
let L7 = document.querySelector('#L-7'); let L8 = document.querySelector('#L-8');
let L9 = document.querySelector('#L-9'); let L10 = document.querySelector('#L-10');
let L11 = document.querySelector('#L-11'); let L12 = document.querySelector('#L-12');

let M1 = document.querySelector('#M-1'); let M2 = document.querySelector('#M-2');
let M3 = document.querySelector('#M-3'); let M4 = document.querySelector('#M-4');
let M5 = document.querySelector('#M-5'); let M6 = document.querySelector('#M-6');
let M7 = document.querySelector('#M-7'); let M8 = document.querySelector('#M-8');
let M9 = document.querySelector('#M-9'); let M10 = document.querySelector('#M-10');
let M11 = document.querySelector('#M-11'); let M12 = document.querySelector('#M-12');

let N1 = document.querySelector('#N-1'); let N2 = document.querySelector('#N-2');
let N3 = document.querySelector('#N-3'); let N4 = document.querySelector('#N-4');
let N5 = document.querySelector('#N-5'); let N6 = document.querySelector('#N-6');
let N7 = document.querySelector('#N-7'); let N8 = document.querySelector('#N-8');
let N9 = document.querySelector('#N-9'); let N10 = document.querySelector('#N-10');
let N11 = document.querySelector('#N-11'); let N12 = document.querySelector('#N-12');


// array caselle mappa

    let caselle = [
        {name:'A1', Y :1 , X:1},  {name:'B1', Y :2 , X:1},
        {name:'A2', Y :1 , X:2},  {name:'B2', Y :2 , X:2},
        {name:'A3', Y :1 , X:3},  {name:'B3', Y :2 , X:3},
        {name:'A4', Y :1 , X:4},  {name:'B4', Y :2 , X:4},
        {name:'A5', Y :1 , X:5},  {name:'B5', Y :2 , X:5},
        {name:'A6', Y :1 , X:6},  {name:'B6', Y :2 , X:6},
        {name:'A7', Y :1 , X:7},  {name:'B7', Y :2 , X:7},
        {name:'A8', Y :1 , X:8},  {name:'B8', Y :2 , X:8},
        {name:'A9', Y :1 , X:9},  {name:'B9', Y :2 , X:9},
        {name:'A10', Y :1 , X:10},  {name:'B10', Y :2 , X:10},
        {name:'A11', Y :1 , X:11},  {name:'B11', Y :2 , X:11},
        {name:'A12', Y :1 , X:12},  {name:'B12', Y :2 , X:12},

        {name:'C1', Y :3 , X:1},  {name:'D1', Y :4 , X:1},
        {name:'C2', Y :3 , X:2},  {name:'D2', Y :4 , X:2},
        {name:'C3', Y :3 , X:3},  {name:'D3', Y :4 , X:3},
        {name:'C4', Y :3 , X:4},  {name:'D4', Y :4 , X:4},
        {name:'C5', Y :3 , X:5},  {name:'D5', Y :4 , X:5},
        {name:'C6', Y :3 , X:6},  {name:'D6', Y :4 , X:6},
        {name:'C7', Y :3 , X:7},  {name:'D7', Y :4 , X:7},
        {name:'C8', Y :3 , X:8},  {name:'D8', Y :4 , X:8},
        {name:'C9', Y :3 , X:9},  {name:'D9', Y :4 , X:9},
        {name:'C10', Y :3 , X:10}, {name:'D10', Y :4 , X:10},
        {name:'C11', Y :3 , X:11}, {name:'D11', Y :4 , X:11},
        {name:'C12', Y :3 , X:12}, {name:'D12', Y :4 , X:12},

        {name:'E1', Y :5 , X:1},  {name:'F1', Y :6 , X:1},
        {name:'E2', Y :5 , X:2},  {name:'F2', Y :6 , X:2},
        {name:'E3', Y :5 , X:3},  {name:'F3', Y :6 , X:3},
        {name:'E4', Y :5 , X:4},  {name:'F4', Y :6 , X:4},
        {name:'E5', Y :5 , X:5},  {name:'F5', Y :6 , X:5},
        {name:'E6', Y :5 , X:6},  {name:'F6', Y :6 , X:6},
        {name:'E7', Y :5 , X:7},  {name:'F7', Y :6 , X:7},
        {name:'E8', Y :5 , X:8},  {name:'F8', Y :6 , X:8},
        {name:'E9', Y :5 , X:9},  {name:'F9', Y :6 , X:9},
        {name:'E10', Y :5 , X:10}, {name:'F10', Y :6 , X:10},
        {name:'E11', Y :5 , X:11}, {name:'F11', Y :6 , X:11},
        {name:'E12', Y :5 , X:12}, {name:'F12', Y :6 , X:12},

        {name:'G1', Y :7 , X:1},  {name:'H1', Y :8 , X:1},
        {name:'G2', Y :7 , X:2},  {name:'H2', Y :8 , X:2},
        {name:'G3', Y :7 , X:3},  {name:'H3', Y :8 , X:3},
        {name:'G4', Y :7 , X:4},  {name:'H4', Y :8 , X:4},
        {name:'G5', Y :7 , X:5},  {name:'H5', Y :8 , X:5},
        {name:'G6', Y :7 , X:6},  {name:'H6', Y :8 , X:6},
        {name:'G7', Y :7 , X:7},  {name:'H7', Y :8, X:7},
        {name:'G8', Y :7 , X:8},  {name:'H8', Y :8, X:8},
        {name:'G9', Y :7 , X:9},  {name:'H9', Y :8, X:9},
        {name:'G10', Y :7 , X:10}, {name:'H10', Y :8 , X:10},
        {name:'G11', Y :7 , X:11}, {name:'H11', Y :8 , X:11},
        {name:'G12', Y :7 , X:12}, {name:'H12', Y :8 , X:12},

        {name:'I1', Y :9 , X:1},   {name:'L1', Y :10 , X:1},
        {name:'I2', Y :9 , X:2},   {name:'L2', Y :10 , X:2},
        {name:'I3', Y :9 , X:3},   {name:'L3', Y :10 , X:3},
        {name:'I4', Y :9 , X:4},   {name:'L4', Y :10 , X:4},
        {name:'I5', Y :9 , X:5},   {name:'L5', Y :10 , X:5},
        {name:'I6', Y :9 , X:6},   {name:'L6', Y :10 , X:6},
        {name:'I7', Y :9 , X:7},   {name:'L7', Y :10 , X:7},
        {name:'I8', Y :9 , X:8},   {name:'L8', Y :10 , X:8},
        {name:'I9', Y :9 , X:9},   {name:'L9', Y :10 , X:9},
        {name:'I10', Y :9 , X:10}, {name:'L10', Y :10 , X:10},
        {name:'I11', Y :9 , X:11}, {name:'L11', Y :10 , X:11},
        {name:'I12', Y :9 , X:12}, {name:'L12', Y :10 , X:12},

        {name:'M1', Y :11 , X:1},  {name:'N1', Y :12 , X:1},
        {name:'M2', Y :11 , X:2},  {name:'N2', Y :12 , X:2},
        {name:'M3', Y :11 , X:3},  {name:'N3', Y :12 , X:3},
        {name:'M4', Y :11 , X:4},  {name:'N4', Y :12 , X:4},
        {name:'M5', Y :11 , X:5},  {name:'N5', Y :12 , X:5},
        {name:'M6', Y :11 , X:6},  {name:'N6', Y :12 , X:6},
        {name:'M7', Y :11 , X:7},  {name:'N7', Y :12 , X:7},
        {name:'M8', Y :11 , X:8},  {name:'N8', Y :12 , X:8},
        {name:'M9', Y :11 , X:9},  {name:'N9', Y :12 , X:9},
        {name:'M10', Y :11 , X:10}, {name:'N10', Y :12 , X:10},
        {name:'M11', Y :11 , X:11}, {name:'N11', Y :12 , X:11},
        {name:'M12', Y :11 , X:12}, {name:'N12', Y :12 , X:12}
   
    ];

    // valori iniziali giocatore: posizione, resistenza, combattività.

    let giocatore={Y:1, X:8};
    let resistGiocatore= 0;
    let combatGiocatore= 0;
    let tiroDado=0;

    // valori nemici
    let nemici =[
    {name:'Cervo', Y:2 , X:10 , Resist: 15 ,Combat:10},
    {name:'Cinghiale', Y:6, X:9 , Resist:20 , Combat:18},
    {name:'Drago',Y:6, X:2,Resist:60,Combat:45},
    {name:'Ghoul' ,Y:5, X:12 , Resist:22 , Combat:19},
    {name:'Lupo', Y:11, X:3,Resist:18 , Combat:23},
    {name:'Lupo Mannnaro', Y:12, X:5,Resist:40, Combat:33},
    {name:'Minotauro' , Y:7, X:11 , Resist:50 , Combat:38},
    {name:'Orso' , Y:2, X:5 , Resist:33 , Combat:30},
    {name:'Pantera' , Y:9, X:8 , Resist:25 , Combat:26},
    {name:'Ragno Gigante' , Y:5, X:6 , Resist:28 , Combat:26},
    {name:'Ratto' , Y:2, X:8 , Resist:7 , Combat:8},
    {name:'Succubus' , Y:10, X:11 , Resist:37 , Combat:30},
    {name:'Tigre' , Y:3, X:2 , Resist:33 , Combat:35},
    {name:'Zombie' , Y:8 , X:5 , Resist:15 , Combat:14}];

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

// funzione dado
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
                console.log(tabella1[tiroDado]);   

                }else if(scontro>-14 && scontro< -10){
                console.log (tabella2[tiroDado]);    

                }else if(scontro>-11 && scontro< -7){
                console.log (tabella3[tiroDado]);    

                }else if(scontro>-8 && scontro< -4){                
                console.log (tabella4[tiroDado]);                    
                
                }else if(scontro>-5 && scontro< -1){
                console.log (tabella5[tiroDado]);                    
                
                }else if(scontro>-2 && scontro< 2){                
                console.log (tabella6[tiroDado]);                    
                
                }else if(scontro> 1 && scontro< 5){              
                console.log (tabella7[tiroDado]);                    
              
                }else if(scontro > 4 && scontro< 7){                   
                console.log (tabella8[tiroDado]);                    
              
                }else if(scontro > 6 && scontro< 10){                   
                console.log (tabella9[tiroDado]);                    
              
                }else if(scontro > 9 && scontro< 13){   
                console.log (tabella10[tiroDado]);

                }else{
                console.log (tabella11[tiroDado]);
              
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
   

        let div = document.createElement('div');      
            div.classList.add('divCombattivita');
            
            div.innerHTML = valoreResistenza;
        divResistenza.appendChild(div);

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
   
   
   let div = document.createElement('div');      
   div.classList.add('divCombattivita');
   
   div.innerHTML = valoreCombattività;
   divCombattivita.appendChild(div);
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
                    
        {let div = document.createElement('div');      
        div.classList.add('divNemico');
        
        div.innerHTML = nemico.Combat;
        CombattivitàNemico.appendChild(div);}  
        
        {let div = document.createElement('div');      
        div.classList.add('divNemico');
        
        div.innerHTML = nemico.Resist;
        ResistenzaNemico.appendChild(div);} 

        {let div = document.createElement('div');      
        div.classList.add('divNemico');
        
        div.innerHTML = nemico.name;
        NomeNemico.appendChild(div); } 
    };
            });
           
        }
        else if(map==true){
    
        alert('aspetta il prossimo turno');

        }else if(check==false){
            alert("prima resistenza e combattività");
        }else{
            alert('è troppo lontano, scegli un altra via');  
        }
});
});


// funzioni caselle mappa da A1(381) ad A12(667)
//  funzioni caselle mappa da B1(697) ad B12(983)
// funzioni caselle mappa da C1(1013) ad C12(1299)
// funzioni caselle mappa da D1(1329) ad D12(1615)
// funzioni caselle mappa da E1(1645) ad E12(1931)
// funzioni caselle mappa da F1(1961) ad F12(2247)
// funzioni caselle mappa da G1(2278) ad G12(2564)
// funzioni caselle mappa da H1(2599) ad H12(2885)
// funzioni caselle mappa da I1(2909) ad I12(3195)
// funzioni caselle mappa da L1(3225) ad L12(3511)
// funzioni caselle mappa da M1(3538) ad M12(3827)
// funzioni caselle mappa da N1(3857) ad N12(4143)
// A1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// A12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 1;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     A12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=1;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da B1(659) ad B12(945)


// B1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// B12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 2;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     B12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=2;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da C1(975) ad C12(1261)


// C1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// C12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 3;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     C12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=3;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da D1(1291) ad D12(1577)


// D1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// D12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 4;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     D12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=4;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da E1(1607) ad E12(1893)


// E1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// E12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 5;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     E12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=5;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da F1(1923) ad F12(2209)


// F1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// F12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 6;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     F12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=6;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da G1(2239) ad G12(2525)


// G1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// G12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 7;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     G12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=7;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da H1(2593) ad H12(2879)


// H1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// H12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 8;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     H12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=8;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da I1(2909) ad I12(3195)


// I1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// I12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 9;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     I12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=9;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da L1(3225) ad L12(3511)


// L1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// L12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 10;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     L12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=10;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da M1(3538) ad M12(3827)


// M1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// M12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 11;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     M12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=11;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });


// // funzioni caselle mappa da N1(3857) ad N12(4143)


// N1.addEventListener('click' , ()=>{
//     X = 1;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N1.classList.add('giocatore');  
//   giocatore.X=1;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N2.addEventListener('click' , ()=>{
//     X = 2;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N2.classList.add('giocatore');  
//   giocatore.X=2;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N3.addEventListener('click' , ()=>{
//     X = 3;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N3.classList.add('giocatore');  
//   giocatore.X=3;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N4.addEventListener('click' , ()=>{
//     X = 4;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N4.classList.add('giocatore');  
//   giocatore.X=4;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N5.addEventListener('click' , ()=>{
//     X = 5;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N5.classList.add('giocatore');  
//   giocatore.X=5;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N6.addEventListener('click' , ()=>{
//     X = 6;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N6.classList.add('giocatore');  
//   giocatore.X=6;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N7.addEventListener('click' , ()=>{
//     X = 7;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N7.classList.add('giocatore');  
//   giocatore.X=7;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N8.addEventListener('click' , ()=>{
//     X = 8;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N8.classList.add('giocatore');  
//   giocatore.X=8;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N9.addEventListener('click' , ()=>{
//     X = 9;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N9.classList.add('giocatore');  
//   giocatore.X=9;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N10.addEventListener('click' , ()=>{
//     X = 10;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N10.classList.add('giocatore');  
//   giocatore.X=10;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N11.addEventListener('click' , ()=>{
//     X = 11;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N11.classList.add('giocatore');  
//   giocatore.X=11;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// N12.addEventListener('click' , ()=>{
//     X = 12;
//     Y = 12;
//    let orizzontale =mappamentoX(giocatore.X , X);
//     let verticale =mappamentoY(giocatore.Y , Y);
    
// if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
// Mappa.forEach(div => {
//     div.classList.remove('giocatore')
// });
//     N12.classList.add('giocatore');  
//   giocatore.X=12;
//   giocatore.Y=12;
//   map=true;
  
// }
// else if(map==true){

//     alert('aspetta il prossimo turno');

// }else if(check==false){
//     alert("aspetta l'inizio del turno");
// }else{
//     alert('è troppo lontano, scegli un altra via');  
// }
        
// });

// 

// per il combattimento fa partire una funzione (dopo lo spostamento del pg) che per ogni nemico deve
// paragonare i parametri X e y del giocatore con quelli nemici e se combaciano con uno far partire il 
// combattimento e cancellare la classlist nemico dalla mappa.

// la funzione combattimento mette a paragone le caratteristiche combattività del giocatore
// con quelle del nemico(sottrae la forza del giocatore a quella del nemico) e si tira il dado
// a seconda del tiro uscito ci sarà una tabella che informa il numero dei danni ricevuti dal 
// giocatore e dal nemico e andranno scalati dal loro livello di combattività. una volta che la 
// resistenza del nemico va a 0 il giocatore viene premiato con un oggetto casuale(tranne per i boss
// che danno un oggetto specifico)e il giocatore può far avanzare il turno.