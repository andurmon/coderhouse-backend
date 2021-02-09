const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();

const productos = require("./routes/productos")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/products", productos);

app.listen(PORT, ()=>{
    console.log(`Escuchando en el Puerto: ${PORT}`);
});