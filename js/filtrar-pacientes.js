var input_txt_filtro = document.getElementById("filtrar-paciente");

//
// evento "input": toda vez que um conteúdo é inserido/removido
//
input_txt_filtro.addEventListener("input", function(){
  var tabelaPacientes = document.getElementById("tabela-pacientes");
  var pacientes = tabelaPacientes.querySelectorAll(".paciente");

  var regex = new RegExp(this.value, "i"); // "i": case-insensitive

  if(this.value.length > 0){
    for(var i=0;  i < pacientes.length; i++){
      var paciente = pacientes[i];
      var nomePaciente = paciente.querySelector(".info-nome").textContent;
      
      if(!regex.test(nomePaciente)){
        paciente.classList.add("no-show-filter");
      } else {
        paciente.classList.remove("no-show-filter");
      }
    }
  } else {
    for(var i=0;  i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("no-show-filter");
    }
  }
});
