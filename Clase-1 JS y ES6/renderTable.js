function renderTable(usuario){
  document.getElementById("nombre").innerText = usuario.nombre
  document.getElementById("apellido").innerText = usuario.apellido
  document.getElementById("mascotas").innerText = usuario.mascotas
  document.getElementById("libros").innerText = JSON.stringify(usuario.libros)
}
