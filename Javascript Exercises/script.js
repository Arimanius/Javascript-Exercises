var indice = parseInt(0,10);
var somme = parseInt(0,10);

var tableau = [];

do 
{
  var inputNumber = prompt("Veuillez entrer un nombre.");
  inputNumber = parseInt(inputNumber,10);

  if(inputNumber != 0)
  {
    tableau.push(inputNumber);

    somme += inputNumber;

    indice++;
  }

} while(inputNumber != 0);

alert("La valeur indiquée est égale à 0, arrêt de la saisie.");

console.log(tableau);

console.log("L'utilisateur a saisi "+ indice +" valeurs dont la somme est égale à "+ somme +" et la moyenne à "+ somme/indice +".");