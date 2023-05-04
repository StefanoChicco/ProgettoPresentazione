document.querySelectorAll(".caselle").forEach((casella) => {
    casella.addEventListener('click', () => {
       let x=casella.dataset.x;
       let y=casella.dataset.y;
       console.log(x,y);
       let orizzontale =mappamentoX(giocatore.X , x);
        let verticale =mappamentoY(giocatore.Y , y);
        
    if(orizzontale<=movimento.value && verticale<=movimento.value && map==false){
    Mappa.forEach(section => {
        section.classList.remove('giocatore')
    });
        casella.classList.add('giocatore');  
      giocatore.X= casella.dataset.x;
      giocatore.Y= casella.daset.y;
      map=true;
      
    }
    else if(map==true){
    
        alert('aspetta il prossimo turno');
    
    }else if(check==false){
        alert("aspetta l'inizio del turno");
    }else{
        alert('è troppo lontano, scegli un altra via');  
    }
    });
});
