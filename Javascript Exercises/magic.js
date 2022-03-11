var nbMagique;

function alea()
{
  nbMagique = Math.round(Math.random()*(100-0)+0);
}

alea();
console.log(nbMagique);

function verif()
{
  var nbInput = document.getElementById("textBox1").value;
  nbInput = Number(nbInput);
  console.log(nbInput);

  switch (true)
  {
    case (nbInput == nbMagique) :
      document.getElementById("label1").innerHTML = "Félicitations, vous avez trouvé le nombre magique !";
    break;

    case (nbInput < nbMagique) :
      document.getElementById("label1").innerHTML = "Trop petit.";
    break;

    case (nbInput > nbMagique) :
      document.getElementById("label1").innerHTML = "Trop grand.";
    break;
  }

}

var Bouton1 = document.getElementById("button1");

Bouton1.addEventListener("click", verif);