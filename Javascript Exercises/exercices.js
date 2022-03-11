/**/
// Exercices : Afficher du texte

var nom;
var prenom;
var sexe;

nom = window.prompt("Entrez votre nom");
prenom = window.prompt("Entrez votre prenom");
if (sexe = window.confirm("Etes-vous une femme ?") == true)
{
    var sexe = "femme";     
}

else 
{
  var sexe = "homme";
}

if (sexe == "femme")
{
    alert("Bonjour Madame "+ nom +" "+ prenom +"\n\n\n Bienvenue sur notre site web !\n\n\n");
}

else 
{
    alert("Bonjour Monsieur "+ nom +" "+ prenom +"\n\n\n Bienvenue sur notre site web !\n\n\n");
}


// Exercices : Opérateurs

var a = "100";

var b = 10;

var c = 1.00;

var d = true;

console.log("Ceci est une chaîne de caractères : "+ a);

b--;

console.log(b);

c += parseInt(a,10);

console.log(c);

d = !d;

console.log(bd);

// Exercices : Instructions conditionnelles

// Exercice 1 

var nombre = prompt("Veuillez saisir un entier.");

if(nombre%2 == 0)

{
    console.log("nombre pair");
}

else

{
    console.log("nombre impair");
} 

// Exercice 2 

var anneeNaissance;
var age;

anneeNaissance = prompt("Veuillez indiquer votre année de naissance.");

age = 2022-anneeNaissance;

if (age >= 18)
{
    console.log("Vous avez "+ age +" ans, vous êtes majeur.");
}

else 
{
    console.log("Vous avez "+ age +" ans, vous êtes mineur.");
}

// Exercice 3

var nb1 = prompt("Veuillez saisir un premier nombre.");
var nb2 = prompt("Veuillez saisir un deuxième nombre.");
nb1 = parseInt(nb1, 10);
nb2 = parseInt(nb2, 10);
var operateur = prompt("Veuillez indiquer l'opération choisie.");
var resultat;

if (operateur != "+" && operateur != "-" && operateur != "*" && operateur != "/")
{
    console.log("Erreur, veuillez saisir un opérateur parmi la liste qui suit : +,-,*,/");
}

else switch (operateur)
{
    case "+": 
    resultat = nb1+nb2;
    break;

    case "-": 
    resultat = nb1-nb2;
    break;

    case "*": 
    resultat = nb1*nb2;
    break;

    case "/": 
    if (nb2 == 0)
    {
        console.log("Attention : Division par zéro impossible.");
    }
    else
    {
       resultat = nb1/nb2; 
    }
    break;
}

console.log("Le resultat de l'opération est : "+ resultat);

// Exercices : Les boucles

// Exercice 1

var prenom = "default";
var indice = 1;

do
{
    prenom = prompt("Saisissez le prénom N°"+ indice +"\nou cliquez sur Annuler pour arrêter la saisie.");

    if (prenom !=null)
    {
        indice++; // impossible d'afficher les prénoms les uns à la suite des autres, à ce stade

        console.log("Le nombre de prénoms indiqués s'élève à "+ (indice-1) +" qui sont les suivants : "+ prenom);
    }

} while (prenom != null);

// Exercice 2

var N;
var indice;

N = prompt("Veuillez saisir un entier");

for (indice = 0; indice <N; indice++)
{
    console.log(indice);
}

// Exercice 3

var indice = parseInt(1,10);
var entier;
var somme = parseInt(0,10);

do 
{
    entier = prompt("Veuillez saisir un entier.");

    entier = parseInt(entier,10);

    if(entier != 0)
    {
        somme += entier;

        alert("La somme est égale à "+ somme +" et sa moyenne est de "+ (somme/indice));
    }

    else
    {
        alert("La saisie est égale à 0, fin du processus.");
    }

    indice++;

} while(entier != 0);

// Exercice 4

var X;
var N;
var indice;

X = prompt("Veuillez indiquer le nombre dont vous voulez la table de multiplication");
N = prompt("Veuillez préciser jusqu'à quel nombre vous voulez afficher la table");

X = parseInt(X,10);
N = parseInt(N,10);

for(indice=parseInt(1,10); indice <= N; indice++)
{
    console.log(indice +"*"+ X +"="+ indice*X);
}

// Exercice 5

var mot;
var nombre = parseInt(1,10);
var position = parseInt(0,10);
var nbVoyelles = parseInt(0,10);
var indice = parseInt(0,10);

mot = prompt("Veuillez entrer un mot.");

if (mot != "")
{
    mot.toString();

        // version while 

        while (indice < mot.length)
        {
            var caractere = mot.substring(position, position+1);

            console.log(caractere);
            console.log(position);

            if ((caractere) == 'a' || (caractere) == 'e' || (caractere) == 'i' || (caractere) == 'o' || (caractere) == 'u' ||(caractere) == 'y')
            {
                nbVoyelles++;
            }

            position++;
            indice++;
        } 

        // version for

        for (i=1; i<mot.length; i++)
        {
            var caractere = mot.substring(i, i+1);

            if ((caractere) == 'a' || (caractere) == 'e' || (caractere) == 'i' || (caractere) == 'o' || (caractere) == 'u' ||(caractere) == 'y')
            {
                nbVoyelles++;
            }
        } 

        alert("Le mot comporte exactement "+ nbVoyelles +" voyelles.");
}

else
{
    alert("Vous n'avez pas indiqué de mot, fin du processus.");
}

// Exercices : Les tableaux

// Exercice 1

var taille = parseInt(taille, 10);
var tableau;
var indice;

taille = prompt("Veuillez indiquer la taille du tableau à créer.");

tableau = Array(taille);

for (indice = parseInt(0,10); indice < taille; indice ++)
{
    tableau[indice] = prompt("Veuillez saisir la valeur de l'élément d'indice "+ indice +".");
}

console.log("Affichage du contenu du tableau : \n");

for (indice = parseInt(0,10); indice < taille; indice ++)
{
    console.log(tableau[indice]);
}

// Exercice 2

var nombre;
var tableau;
var indice;
var somme = 0;
var max;

function GetInteger(TextMsg)
{
    var nombre = prompt(TextMsg);

    nombre = parseInt(nombre,10);

    return nombre;
}

function InitTab()
{
    nombre = GetInteger("Veuillez préciser la taille du tableau.");

    tableau = Array(nombre);
}

function SaisieTab()
{
        for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        tableau[indice] = GetInteger("Veuillez saisir la valeur de l'élément d'indice "+ indice +".");
    }
}

function AfficheTab()
{
        for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        console.log(tableau[indice]);
    }
}

function RechercheTab()
{
    indice = prompt("Veuillez renseigner l'indice de l'élément à afficher.");

    console.log("L'élément correspondant à l'indice saisi a pour valeur : "+ tableau[indice] +".");
}

function InfoTab()
{   
    max = tableau[0];

    for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        if (tableau[indice] > max)
        {
            max = tableau[indice];
        }
    } 

    console.log("Le maximum du tableau a pour valeur : "+ max);

    for (indice = parseInt(0,10); indice < nombre; indice ++)
    {
        somme += parseInt(tableau[indice]) ;
    }

    console.log("La moyenne des valeurs du tableau est égale à : "+ (somme/nombre));
}

GetInteger();
InitTab();
SaisieTab();
AfficheTab();
RechercheTab();
InfoTab();

// Exercice 3 

function triBulle()
{
    InitTab();
    SaisieTab();

    console.log("Tableau non trié :\n");

    AfficheTab();

    permutation = false;
    longueur = tableau.length;

    do 
    {
        for(jndice = parseInt(0,10); jndice < longueur - 1; jndice++)
        {
            if(tableau[jndice] > tableau[jndice + 1])
            {
                temporaire = tableau[jndice];
                tableau[jndice] = tableau[jndice + 1];
                tableau[jndice + 1] = temporaire;

                permutation = true;
            }

        }

    } while (permutation == true);
    
    console.log("Tableau trié :\n");

    AfficheTab();
}

triBulle();

// Exercices : Les fonctions

// Exercice 1

function produit()
{
    x = prompt("Veuillez entrer un nombre.");
    y = prompt("Veuillez indiquer un multiplicateur.");

    resultat = x * y;

    cube = x * x * x;

    var img = document.getElementById("papillon");
    img.insertAdjacentHTML("afterend", "<p id ='cube'>"+"Le cube de "+ x +" est égal à "+ cube +"</p>");
    img.insertAdjacentHTML("afterend", "<p id ='resultat'>"+"Le produit de "+ x +" et "+ y + " est égal à "+ resultat +"</p>");

}

function afficheImg(path, varId, varAlt)
{
    var newImg = document.createElement("img");

    newImg.src = path;
    newImg.id = varId;
    newImg.alt = varAlt;
    
    document.body.appendChild(newImg);
}

//document.body.onload = afficheImg;

afficheImg("papillon.jpg", "papillon", "Papillon à rayures jaunes et bleues et liserés oranges");
produit();

// Exercice 2

function strtok (str1, str2, n)
{
    const mots = str1.split(str2);
    
    console.log(mots);

    console.log(mots[n-1]);
}

strtok("robert;dupont;amiens;80000", ";", 1);