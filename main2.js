document.querySelectorAll(".caselle").forEach((casella) => {
    casella.addEventListener('click', () => {       
        nemici.forEach(nemico => {
            if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){
            combat=true;
            
                

            }
        });
       
      
    });
    
});

// al click se le variabili X ed Y del giocatore corrispondono con quelle di 
// un mostro parte l'evento combattimento. vengono messi a paragone i valori 
// combattività dei due e dopo il lancio del dado vengono scalati i punti
// resistenza a seconda del risultato del primo paragone e del numero uscito dal dado
// seguendo una tabella che compare in mezzo alla mappa assieme al numero dato dalla 
// differenza del punteggio giocatore con quello del nemico. sotto nella barra 
// dei nemici vengono visualizzati i valori del nemico e i suoi punti resistenza 
// rimanenti.

// nemici.forEach(nemico => {
//     if(giocatore.X==nemico.X && giocatore.Y==nemico.Y){
//     console.log('funziono');
//     }
// });

