const enviar = document.querySelector(".enviar");

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  const pesoArea = document.querySelector(".peso");
  const alturaArea = document.querySelector(".altura");
  const peso = Number(pesoArea.value);
  const altura = Number(alturaArea.value);
  if (!peso) {
    mostraResultado("Peso inválido!", false);
    return;
  }
  if (!altura) {
    mostraResultado("Altura inválida!", false);
    return;
  }
  const imc = Imc(peso, altura);
  const resultado = condicaoImc(imc);
  const msg = `O seu IMC é de ${imc} (${resultado})`;  
  mostraResultado(msg, true);
});

function Imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function condicaoImc(imc) {
  const arrayResultado = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) {
    return arrayResultado[5];
  }
  if (imc >= 34.9) {
    return arrayResultado[4];
  }
  if (imc >= 29.9) {
    return arrayResultado[3];
  }
  if (imc >= 24.9) {
    return arrayResultado[2];
  }
  if (imc >= 18.5) {
    return arrayResultado[1];
  }
  if (imc < 18.5) {
    return arrayResultado[0];
  }
}

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}

function mostraResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado-imc");
  resultado.innerHTML = "";
  const p = criaParagrafo();

  if (isValid) {
    p.classList.add("valido");
  } else {
    p.classList.add("invalido");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
