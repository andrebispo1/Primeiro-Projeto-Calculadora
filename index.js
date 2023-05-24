
let nome = back2(prompt("Digite escolha uma cor : \n1 : azul \n2 : verde \n3 : amarelo  \n4 :vermelho \n5 :rosa "))

  function back2(n1)
  {
      debugger
      /*let div = document.getElementById('calculadora');
      if (n1 == 'vermelho') { 
          document.getElementById('calculadora').style.background="red"

      }
     else if (n1 == 'azul') {
      document.getElementById('calculadora').style.background="blue"
      }
      else if (n1 == 'verde') {
        document.getElementById('calculadora').style.background="green"
      }
      else if (n1 == 'amarelo') {
        document.getElementById('calculadora').style.background="yellow"
      }
      else if (n1 == 'rosa') {
       document.getElementById('calculadora').style.background="pink"
      }
      else  {
        document.getElementById('calculadora').style.background="orange"
    return alert("Cor Errada!")
      }

      div.style.background = 'write';


      */
switch (n1) {
    case 'vermelho':
    document.getElementById('calculadora').style.background="red"
    break;
    case 'azul':
    document.getElementById('calculadora').style.background="blue"
    break;
    case 'rosa':
    document.getElementById('calculadora').style.background="pink"
    break;
    case 'verde':
    document.getElementById('calculadora').style.background="green"
    break;
    case 'amarelo':
    document.getElementById('calculadora').style.background="yellow"
    break;
  default:
    document.getElementById('calculadora').style.background="orange"
    return alert("Cor Errada!")
}
  
  }
  
  back2(n1)


function insert(num)
{
   let numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('resultado').innerHTML = ''
}

function back()
{
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular ()

{   let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) 
{
    
    document.getElementById('resultado').innerHTML = eval(resultado);
}
else{
    document.getElementById('resultado').innerHTML = "";
}
}