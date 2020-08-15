// Web service para busca de CEPs
// https://viacep.com.br/ws/01001000/json/

function buscarNovosPacientes(){
  document.getElementById("mensagemErroJson").classList.add("no-show-filter");

  var jsonObj = new XMLHttpRequest();
  jsonObj.open("get", "https://api-pacientes.herokuapp.com/paciente");

  jsonObj.addEventListener("load", function(){
    if(this.status == 200){
      // Transforma uma string (JSON de resposta) em um objeto
      var obj = JSON.parse(this.responseText);
      for(var i=0; i < obj.length; i++){
        adicionaPacientesJsonObj(obj[i]);
      }
    } else {
      console.log("Error status: " + this.status);
      console.log("Error msg: " + this.responseText);

      document.getElementById("mensagemErroJson").classList.remove("no-show-filter");
    }
  });

  jsonObj.send();
}
