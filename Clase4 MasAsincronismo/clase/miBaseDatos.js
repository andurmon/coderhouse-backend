const autores = [
    {
        id: 1,
        nombre: "Julio Verne"
    },
    {
        id:2,
        nombre: "Carl Sagan"
    }

]

const libros = [
    {
        id: 1,
        authorId: 1,
        titulo: "Capitan de quince años"
    },
    {
        id: 2,
        authorId: 2,
        titulo: "El Jardin del Eden"
    },
    {
        id: 3,
        authorId: 1,
        titulo: "De la tierra a la Luna"
    }
]

module.exports = {
    autores: autores,
    libros: libros
}