// Exercice 1

// var nbJeunes = parseInt(0,10);
// var nbMoyens = parseInt(0,10);
// var nbVieux = parseInt(0,10);
// var age = parseInt(age,10);

// do
// {
//  age = prompt("Veuillez indiquer votre âge ci-dessous :");

// switch(true)
// {
//   case (age < 20):
//     nbJeunes++;
//     break;

//   case (age >= 20 && age <= 40):
//     nbMoyens++;
//     break;
  
//     case (age > 40):
//       nbVieux++;
//       break;
// } 

// }while (age <= 100);

// alert ("Parmi les personnes ayant renseigné leur âge on compte "+ nbJeunes +" jeunes, "+ nbMoyens +" personnes d'âge moyen et "+ nbVieux +" personne âgée.");

// Exercice 2

// var indice;

// function tableDe(nombre)
// {

//   for (indice = parseInt(1,10); indice <= 10; indice++)
//   {
//     console.log(indice +" * "+ nombre +" = "+ indice * nombre); 
//   }

// }
// tableDe(3);
// tableDe(9);

// Exercice 3

// var tabPrenoms = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// var saisieUtilisateur;
// var antecedent = parseInt(antecedent,10);
// var dernier = parseInt(tabPrenoms.length-1,10);
// var intermediaire;

// saisieUtilisateur = prompt("Veuillez saisir un prénom ci-dessous en respectant la casse :\n");

// if(tabPrenoms.includes(saisieUtilisateur))
// {
//   antecedent = tabPrenoms.indexOf(saisieUtilisateur);

//   tabPrenoms.splice(antecedent,1);
//   tabPrenoms.push("");
// }

// else
// {
//   alert("Erreur : aucun élément correspondant dans le tableau.\n");
// }
// console.table(tabPrenoms);

// Exercice 4

// var PU = parseInt(3,10), QTECOM = parseInt(1,10), TOT = parseInt(TOT,10), REM = parseInt(0,10), PORT = parseInt(PORT,10), PAP = parseInt(PAP,10);

// TOT = PU * QTECOM;

// console.log(TOT);

// if (TOT >= 100 && TOT <= 200)
// {
//   REM = 0.05;
// }

// else if (TOT > 200)
// {
//   REM = 0.10;
// }

// console.log(REM);

// TOT *= (1-REM);

// console.log(TOT);

// if(TOT > 500)
// {
//   PORT = 0;
// }

// else
// {
//   PORT = 0.02*TOT;

//   if(PORT < 6)
//   {
//     PORT = 6;
//   }
// }

// PAP = TOT + PORT;

// console.log("Le montant avec remise s'élève à "+ TOT +"€.");
// console.log("Les frais de port sont de "+ PORT +"€.");
// console.log("Ainsi, le prix à payer est de "+ PAP +"€.");

// Exercice 5 : Voir dossier "jarditou_html_zip"