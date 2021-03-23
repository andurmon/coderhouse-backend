const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Se conewcto"))
    .catch((e) => console.log(e))

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });

// kitty.save().then(() => console.log('meow'));