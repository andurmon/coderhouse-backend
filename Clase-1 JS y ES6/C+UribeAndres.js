
class Usuario{
  constructor(nombre='No-Name', apellido='No-Lastname', libros=[], mascotas=[]){
    if(typeof nombre != "string"){
      throw new TypeError("Nombre no es un String!")
    }
    if(typeof apellido != "string"){
      throw new TypeError("Apellido no es un String!")
    }
    if( !Array.isArray(libros)){
      throw new TypeError("Libros no es un Array!")
    }
    if( !Array.isArray(mascotas)){
      throw new TypeError("Mascotas no es un Array!")
    }
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
  }

  getFullName(){
    return `${this.nombre} ${this.apellido}`
  }

  addMascota(mascota){
    if (typeof mascota != 'string'){
      throw new TypeError("mascota no es un string! ")
    }
    this.mascotas.push(mascota)
    renderTable(usuario)
  }

  getMascotas(){
    return this.mascotas.length
  }

  addBook(book='', author=''){
    this.libros.push({book: book, author: author})
    renderTable(usuario)
  }

  getBooks(){
    return this.libros.map(function(libro){ return libro.book })
  }

}

//Crea el usuario:
var usuario = new Usuario(nombre="Andres", apellido="Uribe");
console.log('Usuario: ', usuario);

// Muestra su nombre completo:
var fullname = usuario.getFullName();
console.log('Fullname: ', fullname);

//Agrega una mascota:
usuario.addMascota("Un Dragón")
console.log("Mascotas: ", usuario.mascotas);

//Numero de mascotas
var numMascotas = usuario.getMascotas();
console.log("Numero de Mascotas:", numMascotas);

//Agregar Libro:
usuario.addBook(book="Dracula", author="Bram Stoker");
console.log("Agregar Libro", usuario.libros);

//Libros
var libros = usuario.getBooks();
console.log("Libros: ", libros);