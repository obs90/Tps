const express = require("express");
const app = express();
 const mongoose = require("mongoose");

 
 const uri ="mongodb+srv://gntmkun:obaid123@cluster0.3p0hn.mongodb.net/cinema?retryWrites=true&w=majority&appName=Cluster0";
 
 mongoose
 .connect(uri)
 .then(() => console.log("Connected to MongoDB !!!"))
 .catch((err) => console.error("Could not connect to MongoDB", err));
 
 
 app.get("/", (req, res) => {
   res.send("Welcome to books service !!!");
 });
 app.listen(3000, () =>
   console.log("Up and running! -- This is our Books service")
 );

 mongoose.model("Film",{
    id: {
        type: Number,
        require: true
    },
    titre: {
        type: String,
        require: true
    },
    pays: {
        type: String,
        require: true
    },
    annee: {
        type: Date,
        require: true
    },
    annee: {
        type: Date,
        require: true
    },
    duree: {
        type: Number,
        require: true
    },
    genre: {
        type: String,
        require: true
    },

 });

 const bodyParser = require("body-parser");

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 const Film = mongoose.model("Film");

 app.post("/film", (req, res) => {
    var newFilm = {
    id: req.body.title,
    titre: req.body.titre,
    pays: req.body.pays,
    annee: req.body.annee,
    duree: req.body.duree,
    genre: req.body.genre
    }

    let film=new Film(newFilm)

    film.save().then(() => {
    
    console. log("New Film created!")
    res.json({ message: "a new film added !!!" });
    }).catch((err) => {
    
    if(err){
    
    throw err
    }

})
});

app.get("/films", (req, res) => {
  Book.find().then((films) => {
    console.log(films);
    res.json({ books: films });
  });
});

app.get("/films/:id", (req, res) => {
  Film.findById(req.params.id).then((film) => {
    if (film) {
      res.json({ book: film });
    } else {
      res.sendStatus(404);
    }
  });
});

app.delete("/films/:id", (req, res) => {
  Film.findByIdAndRemove(req.params.id).then(() => {
    res.json({ msg: "film deleted" });
  });
});
