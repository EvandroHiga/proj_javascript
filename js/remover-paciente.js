//
// Remove a linha da tabela com double-click
//
var tabelaPacientes = document.getElementById("tabela-pacientes");
tabelaPacientes.addEventListener("dblclick",function(event){
  event.target.parentNode.classList.add("fade-out-effect");
  
  // Remove a linha da tabela
  setTimeout(function(){
    event.target.parentNode.remove();
  }, 200);
});
