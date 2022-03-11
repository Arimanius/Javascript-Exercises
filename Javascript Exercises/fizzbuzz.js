var indice;

for(indice = parseInt(1,10); indice<=100; indice++)
{
  switch(indice)
  {
    case indice%3 != 0 && indice%5 != 5 : console.log(indice);
    break;

    case indice%3 == 0 : console.log("Fizz");
    break;

    case indice%5 == 0 : console.log("Buzz");
    break;

    case indice%3 == 0 && indice%5 == 0 : console.log("FizzBuzz");
    break;
  }
}