var testNom = new RegExp("^[A-Za-z]+$");
var testCode = new RegExp("^\\d{5}$");
var testMail = new RegExp("^\\w.*\\w@.+[a-z]{2,4}$");

function veriFormulaire(event)
{
var société = document.getElementById("société").value;
var personne_contact = document.getElementById("personne_contact").value;
var adresse_entreprise = document.getElementById("adresse_entreprise").value;
var code_postal= document.getElementById("code_postal").value;
var ville = document.getElementById("ville").value;
var mail = document.getElementById("mail").value;
var téléphone = document.getElementById("téléphone").value;
var environnement_technique = document.getElementById("environnement_technique").value;

  var message ="";
  
  if(société == "")
  {
    message += "Veuillez renseigner le nom de la société.\n";
  }

  else if (testNom.test(société) == false)
  {
    message += "Le nom de la société doit comporter au moins 1 caractère.\n";
  }

  if(personne_contact == "")
  {
    message += "Veuillez renseigner le nom de la personne à contacter.\n";
  }

  else if (testNom.test(personne_contact) == false)
  {
    message += "Le nom de la personne doit comporter au moins 1 caractère.\n";
  }

  if(code_postal == "")
  {
    message += "Veuillez renseigner le code postal correspondant.\n";
  }

  else if (testCode.test(code_postal) == false)
  {
    message += "Le code postal est de 5 chiffres.\n";
  }

  if(ville == "")
  {
    message += "Veuillez renseigner le nom de la ville associée.\n";
  }

  else if (testNom.test(ville) == false)
  {
    message += "Le nom de la ville doit avoir au moins 1 caractère.\n";
  }

  if(mail == "")
  {
    message += "Veuillez renseigner l'adresse électronique de l'entreprise.\n";
  }

  else if (testMail.test(mail) == false)
  {
    message += "L'e-mail doit inclure au minimum le caractère '@'.\n";
  }

  if(message == "")
  {
    alert("Formulaire expédié.");
  }
  else
  {
    alert(message);
    event.preventDefault();
  }
}

document.getElementById("Contact").addEventListener("submit", veriFormulaire);

document.getElementById("cancel").addEventListener("click", function(e)
{
  var confirmation = confirm ("Voulez-vous vraiment effacer le contenu du formulaire ?")

  if(confirmation == false)
  {
    e.preventDefault();
  }

});

document.getElementById("environnement_technique").addEventListener("change", function(e)
{
  if (document.getElementById("environnement_technique").value == "autres...")
  {
    document.getElementById("environnement").value = "";
    
    document.getElementById("environnement").focus();
  }

  else 
  {
    document.getElementById("environnement").value = document.getElementById("environnement_technique").value;
  }
});