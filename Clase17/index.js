 
 const {options} = require("./DB/mySQL.db")

 const knex = require('knex')(options);

//  knex('items')
//   .then(rows => console.log(rows))
//   .catch(e => console.log("errorcito\n", e))


 knex.schema.createTable('gatitos', table =>{
     table.increments('id');
     table.string('name', 20)
     table.integer('age');
 })
 .then(()=>console.log("Table created"))
 .catch( err => console.log(err))
 .finally(()=>knex.destroy())

 const gatitos = [
     {
         name: "Cristo",
         color: "blanquito"
     },
     {
         name: "Simon",
         color: "negrito"
     }
 ]

//  knex('gatitos').insert(gatitos)
//     .then(()=>console.log("Se insertaron gatititos"))
//     .catch( e => console.log(e))
//     .finally(()=>knex.destroy())