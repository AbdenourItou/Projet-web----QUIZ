
function collorer_reponses(question, reponse, className) {
  var reponses = document.forms.form;
  for (var index = question*4; index < question*4 + 4; index++) {
    if (reponses[index].value === reponse) {
      reponses[index].classList.add(className);
    }
  }
}


/* Cette fonction afficher le score obtenus */
function score() {
 
  

  //Référencier la valeur de la question 
  var q1 = document.forms.form.q1.value;
  var q2 = document.forms.form.q2.value;
  var q3 = document.forms.form.q3.value;
  var q4 = document.forms.form.q4.value;
  var q5 = document.forms.form.q5.value;
  var q6 = document.forms.form.q6.value;
  var q7 = document.forms.form.q7.value;
  var q8= document.forms.form.q8.value;
  var q9 = document.forms.form.q9.value;
  var q10 = document.forms.form.q10.value;
  /* aprés avoir cliquer sur submit les radio buttons du form seront à l'etat disabled  donc vous ne pouvez pas modifier les réponses  */ 
  var elements = document.getElementById("questions").elements;
  for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].disabled = true;
  }

  //un tableau pour les questions 
  var questions = [q1, q2, q3, q4, q5, q6,q7,q8,q9,q10];

  //un tableau pour les répnonse pour chaque question dans l'ordre des indices 
  var reponses = ["b", "d", "a", "a", "d", "a","b","c","c","a"];

  //varibale pour calculer les points obtenus sur le total 
  var points = 0;
  var total = 10;
  

  //une boucle pour verifier les réponses vraies et les collorer par la couleur verte , et les réponses fausses et les collorer avec la couleur rouge 
  for (var i = 0; i < total; i++) {
    
    if (questions[i] == reponses[i]) {
      points = points + 1; //Increment the score by 2 for every correct answer given
      collorer_reponses(i, questions[i], "vrai");
    } else {
      points = points ;
      collorer_reponses(i, questions[i], "faux");
      collorer_reponses(i, reponses[i], "vrai");
    }
  }

// Séléctionner le div qui a le id " resultat" ET  affiche le score et les résultats obtenus 
  
  var q = document.getElementById("resultat");

  q.style.fontSize = "40px";
  q.style.textAlign = "center";
  q.innerHTML =
    "Vous avez eu  " +  points + " Points" +" Sur " + total + "<br />" ;

  return false;
}