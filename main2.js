    let Stamina = button => {
        let element = document.getElementsByTagName("option");
        let hidden = element.getAttribute("hidden");
        
        if (hidden) {
           element.removeAttribute("hidden");
           button.innerText = "Hide option";
        } else {
           element.setAttribute("hidden", "hidden");
           button.innerText = "Show option";
        }
      }

    //   al click deve prendere il valore dell'opzione selezionata 



    let carte =[
        {categ:'oggetto', classe:'pozVigorilla' , name:'Pozione di Vigorilla', Resist: 4 ,Combat:0 ,Dif:0},
        {categ:'oggetto', classe:'pasto' , name:'Pasto', Resist:3 , Combat:0 ,Dif:0},
        {categ:'oggetto', classe:'bende' , name:'Bende', Resist: 2 , Combat:0 ,Dif:0},
        {categ:'oggetto', classe:'impiastro' , name:'Impiastro', Resist: 4 , Combat:0 ,Dif:0},
        {categ:'oggetto', classe:'pozSalute' , name:'Pozione della Salute', Resist: 4 , Combat:2 ,Dif:1},
        {categ:'arma', classe:'lancia' , name:'Lancia', Resist: 4 , Combat:2 ,Dif:1},
        {categ:'arma', classe:'spada' , name:'Spada', Resist:4,Combat:3 ,Dif:0},
        {categ:'arma', classe:'scudo' , name:'Scudo', Resist:4 , Combat:1 ,Dif:2},
        {categ:'arma', classe:'ascia' , name:'Ascia', Resist:2 , Combat:4 ,Dif:0},
        {categ:'arma', classe:'mazza' , name:'Mazza', Resist:0, Combat:5 ,Dif:0},
        {categ:'arma', classe:'arco' , name:'Arco', Resist:2 , Combat:2 ,Dif:2},
        {categ:'arma', classe:'pugnale' , name:'Pugnale', Resist:2 , Combat:2 ,Dif:0},
        {categ:'armaRara', classe:'spadaSole' , name:'Spada del Sole', Resist:10 , Combat:6 ,Dif:0},
        {categ:'armaRara', classe:'scudoShianthi' , name:'Scudo degli Shianthi', Resist:10 , Combat:4 ,Dif:3},
        {categ:'equip', classe:'amuleto' , name:'Amuleto', Resist:2 , Combat:3 ,Dif:1},
        {categ:'equip', classe:'anello' , name:'Anello', Resist:4 , Combat:2 ,Dif:0},
        {categ:'equip', classe:'cintura' , name:'Cintura', Resist:2 , Combat:3 ,Dif:1},
        {categ:'equip', classe:'elmo' , name:'Elmo', Resist:4 , Combat:0 ,Dif:1},
        {categ:'equip', classe:'armatura' , name:'Armatura', Resist:6 , Combat:0 , Dif:2},
        {categ:'equip', classe:'mantello' , name:'Mantello', Resist:2 , Combat:0 , Dif:0 }];


        // Alert Modificati
let vis = 1000;

//ALERT
window.alert = function (message) {
//Creazione dell'elemento
  var a = document.createElement('div');
  //regole di stile CSS
  a.style.cssText = "width:30vw; height:100px; border:1px solid #bbb; border-radius:5px; padding:10px; background-image:url(/media/bgDark.jpg); background-size:cover; box-shadow:0px 0px 8px #0006; position:fixed; top:20px; right:0; left:0; margin:auto; font-family: \"Arial\", sans-serif; color:black; text-shadow: -1px 0 #FF0000, 0 1px #FF0000, 1px 0 #FF0000, 0 -1px #FF0000; z-index:"+ vis+ ";";

  a.innerHTML = "<b></b><br>"+message;
  document.body.appendChild(a);

  vis--;

  //Rimozione dell'elemento al click
  a.addEventListener("click", function() {
    a.remove();
    }
  )
};

//CONFIRM
window.confirm = function(message) {
    var a = document.createElement('div');
    var y = document.createElement('button');  
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
  