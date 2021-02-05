const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();

const ApiClass = require("./ApiModule");

let api = new ApiClass();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/api/products", api.get);
app.get("/api/products/:id", api.getById);
app.post("/api/products", api.post);

app.listen(PORT, ()=>{
    console.log(`Escuchando en el Puerto: ${PORT}`);
});