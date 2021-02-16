const PORT = process.env.PORT || 8080;

const express = require("express");
const ApiClass = require("./ApiModule");
const app = express();
const handlebars = require('express-handlebars');

const productos = require("./routes/productos")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/products", productos);

app.set("views", "./views");
app.engine("hbs",
    handlebars({
        extname:".hbs",
        defaultLayout:"index.hbs",
        layoutsDir:__dirname+"/views/layouts/",
        partialsDir:__dirname +"/views/partials/"
    })
)
app.set("view engine", "hbs");

products = [{ 
    title: "Daredevil Mask", 
    price: 6584, 
    thumbnail: "https://i.etsystatic.com/17752492/r/il/a36cf3/2561602381/il_570xN.2561602381_3jwd.jpg"
}, { 
    title: "Daredevil Mask", 
    price: 6584, 
    thumbnail: "https://i.etsystatic.com/17752492/r/il/a36cf3/2561602381/il_570xN.2561602381_3jwd.jpg"
}]

app.get('/engine', (req, res)=>{
    res.render('partials/fila', {products: products})
})

app.listen(PORT, ()=>{
    console.log(`Escuchando en el Puerto: ${PORT}`);
});