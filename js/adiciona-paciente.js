var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", adicionaPacienteForm);

function adicionaPacienteForm(){
  event.preventDefault();

  // Pegando os dados do form
  var form = document.getElementById("formAdicionaPaciente");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  adicionaPacienteTabela(nome, peso, altura, gordura);

  formAdicionaPaciente.reset();
}

function adicionaPacientesJsonObj(paciente){
  adicionaPacienteTabela(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);
}

function adicionaPacienteTabela(nome, peso, altura, gordura){
  // Criando novos <td> com os dados do form
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

  if(!validaPeso(peso)){
    imcNovoPaciente.textContent = "Peso inválido";
  } else if(!validaAltura(altura)){
    imcNovoPaciente.textContent = "Altura inválida";
  } else {
    imcNovoPaciente.textContent = calcularImc(peso, altura);
  }

  // Inserindo os <td> dentro do <tr>
  var novoPaciente = document.createElement("tr");
  novoPaciente.classList.add("paciente");

  if(!validaPeso(peso) || !validaAltura(altura)){
    novoPaciente.classList.add("paciente-invalido");
  }

  novoPaciente.appendChild(nomeNovoPaciente);
  novoPaciente.appendChild(pesoNovoPaciente);
  novoPaciente.appendChild(alturaNovoPaciente);
  novoPaciente.appendChild(gorduraNovoPaciente);
  novoPaciente.appendChild(imcNovoPaciente);

  // Inserindo o <tr> dentro do <tbody>
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(novoPaciente);
}
