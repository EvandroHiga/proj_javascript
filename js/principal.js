var tabelaPacientes = document.getElementById("tabela-pacientes");
var pacientes = tabelaPacientes.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){
  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  var pesoValido = true;
  var alturaValida = true;

  var tdImc = paciente.querySelector(".info-imc");

  if(!validaPeso(peso)){
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
  }

  if(!validaAltura(altura)){
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
  }

  if (pesoValido && alturaValida) {
      tdImc.textContent = calcularImc(peso,altura);
  } else {
      paciente.classList.add("paciente-invalido");
  }
}

function validaPeso(peso){
  if(peso > 0 && peso < 1000){
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura < 3.00){
    return true;
  } else {
    return false;
  }
}

function calcularImc(peso, altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
