var tabelaPacientes = document.getElementById("tabela-pacientes");

tabelaPacientes.addEventListener("dblclick",function(event){
  event.target.parentNode.classList.add("fade-out-effect");

  setTimeout(function(){
    event.target.parentNode.remove();
  }, 200);

});
