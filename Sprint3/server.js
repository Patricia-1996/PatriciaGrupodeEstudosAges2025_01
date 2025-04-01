const express = require("express");
const { PrismaClient } = require('./generated/prisma');

const prisma  = new PrismaClient();
const app = express();
app.use(express.json());

//Criar um filme

app.post("/movies", async (req, res) => {
    const{title, description , director ,releaseYear, genre } = req.body;
    try{
    const movie = await prisma.movie.create({
            data: {title, description, director, releaseYear, genre },

        });
        res.status(201).json(movie);}
        catch(error){
            res.status(400).json({ error: "Erro ao criar o filme."});
        }
});




//Listar filmes

app.get("/movies", async(req, res) => {
    const movies = await prisma.movie.findMany({ include: {
        reviews: true }});
        res.json(movies);
});


//Criar uma nova review para filme

app.post("/movies/:movieId/reviews", async(req, res) => {
        const { movieId } = req. params;
        const { rating, comment } = req.body;
        const review = await prisma.review.create({
            data: {movieId: parseInt(movieId), rating, comment},
        });

        res.status(201).json(review);


});

const PORT = 3000;
app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`));