const addForm = document.querySelector(".add");
const list = document.querySelector(".todo");



// ajouter des taches
const generertemplate = (todo) => {
var z = document.getElementsByClassName("groupe"); 
var a = z.length + 1;
var b = a.toString();
  const html = `
            <li class="groupe" >
                <span>${todo}</span>
                <button class ="rep" id = ${b}  onclick=modifier()>A Faire</button>
                <i class="fa fa-times delete"></i>
                
                
            </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
e.preventDefault();
const todo = addForm.add.value.trim();
  

if (todo.length) {
    generertemplate(todo);
    addForm.reset(); 
     a = a+ 1;
     b = a.toString();
  }
});

// Supprimer une tache
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
       e.target.parentElement.remove();
       var m = event.target.id;
   
    }
  });

// modifier l'etat d'une tache
function modifier (){
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("rep")) {
      var m = event.target.id;
       
      var x = document.getElementById(m);
     
      if (x.innerHTML === "A Faire") {
          x.innerHTML = "En cours";
          x.style.backgroundColor = "#f2c94c";
      } 
      else if (x.innerHTML === "En cours"){
          x.innerHTML = "Fait";
          x.style.backgroundColor = "#81d5a3";  
      }    
      else if (x.innerHTML === "Fait"){
          x.innerHTML = "En retard";
          x.style.backgroundColor = "#eb5757";
      }   
      else if (x.innerHTML === "En retard"){
         x.innerHTML = "A Faire";
         x.style.backgroundColor = "#56ccf2";
      }
    }
  });}


  // Changer l'état des taches chaque 10 seconde (non fonctionel)
/* 
  function changer (){
    list.addEventListener("load", (e) => {
      if (target.classList.contains("rep")) {
        console.log(event.target.id)
        console.log(x);
         var m = event.target.id;
         
         var x = document.getElementById(m);
         console.log(x);
         if (x.innerHTML === "A Faire") {
          setTimeout('changer()' , 10000);
          x.innerHTML = "En cours";
          x.style.backgroundColor = "#f2c94c";
          
      } else if (x.innerHTML === "En cours"){
        setTimeout('changer()' , 10000);
          x.innerHTML = "Fait";
          x.style.backgroundColor = "#81d5a3";
      }    
      else if (x.innerHTML === "Fait"){
        setTimeout('changer()' , 10000);
        x.innerHTML = "En retard";
        x.style.backgroundColor = "#eb5757";
  
    }   
    else if (x.innerHTML === "En retard"){
      setTimeout('changer()' , 10000);
      x.innerHTML = "A Faire";
      x.style.backgroundColor = "#56ccf2";
      }}
    });}

*/




 // rechercher une tache 
function search() {
    
    let input = document.getElementById('rechercher').value
        input=input.toLowerCase();
    let x = document.getElementsByClassName('groupe');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}



