function func_adicionarPaciente(){
  event.preventDefault(); // Previne o reload da pagina

  var form = document.getElementById("formAdicionaPaciente");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var return_validaPaciente = validarPaciente(peso, altura, gordura);

  if(return_validaPaciente.length > 0){
    document.getElementById("alertErrorInsert").innerHTML = return_validaPaciente;
    document.getElementById("alertErrorInsert").classList.remove("no-show-filter");
  } else {
    document.getElementById("alertErrorInsert").classList.add("no-show-filter");
    adicionaPacienteTabela(nome, peso, altura, gordura);
    formAdicionaPaciente.reset();
  }
}

//
// "append" o novo paciente na tabela
//
function adicionaPacienteTabela(nome, peso, altura, gordura){
  // Criando os <td> com os dados do form
  var nomeNovoPaciente = document.createElement("td");
  nomeNovoPaciente.classList.add("info-nome");
  nomeNovoPaciente.textContent = nome;

  var pesoNovoPaciente = document.createElement("td");
  pesoNovoPaciente.classList.add("info-peso")
  pesoNovoPaciente.textContent = peso;

  var alturaNovoPaciente = document.createElement("td");
  alturaNovoPaciente.classList.add("info-altura");
  alturaNovoPaciente.textContent = altura;

  var gorduraNovoPaciente = document.createElement("td");
  gorduraNovoPaciente.classList.add("info-gordura");
  gorduraNovoPaciente.textContent = gordura;

  var imcNovoPaciente = document.createElement("td");
  imcNovoPaciente.classList.add("info-imc");
  imcNovoPaciente.textContent = calcularImc(peso, altura);

  // Inserindo os <td> dentro do <tr>
  var novoPaciente = document.createElement("tr");
  novoPaciente.classList.add("paciente");

  novoPaciente.appendChild(nomeNovoPaciente);
  novoPaciente.appendChild(pesoNovoPaciente);
  novoPaciente.appendChild(alturaNovoPaciente);
  novoPaciente.appendChild(gorduraNovoPaciente);
  novoPaciente.appendChild(imcNovoPaciente);

  // Inserindo o <tr> dentro do <tbody>
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(novoPaciente);
}

//
// valida os dados do paciente
//
function validarPaciente(peso, altura, gordura){
  var return_msg = "";

  if(!(peso > 0 && peso < 1000)){
    return_msg = "Peso invalido";
  }

  if(!(altura > 0 && altura < 3.00)){
    if(return_msg.length > 0){
      return_msg += " / ";
    }
    return_msg += "Altura invalida";
  }

  if(!(gordura > 0 && gordura <= 100 )){
    if(return_msg.length > 0){
      return_msg += " / ";
    }
    return_msg += "Gord. Corporal invalida"
  }

  return return_msg;
}

//
// calcula o IMC do paciente
//
function calcularImc(peso, altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
