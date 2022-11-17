const express = require('express');

const app = express();
app.use(express.json());

const movies = [];
let id = 1;

app.post('/movie', (req, res)=>{
    const {title, year, director, genre} = req.body;
    if(req.body){
        const movie = {
            id: id++,
            title,
            year,
            director,
            genre
        }
        movies.push(movie)
        res.status(201).json(movie);
    }
})

app.get("/movies", (req, res)=>{
    res.status(200).json(movies);
})

app.get("/movie/:id", (req, res)=>{
    const id = req.params.id;
    const movie = movies.find(movie => movie.id == id)
    if(movie){
        res.status(200).json(movie);
    }else{
        res.status(404).json({"message":"movie not found"});
    }
})
const port = 3002
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})