const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Criar um filme com avaliações associadas
app.post("/movies-with-reviews", async (req, res) => {
    const { title, description, director, year, genre, reviews } = req.body;
    try {
        const movie = await prisma.movie.create({
            data: {
                title,
                description,
                director,
                year,
                genre,
                reviews: {
                    create: reviews,
                },
            },
            include: {
                reviews: true,
            },
        });
        res.status(201).json(movie);
    } catch (error) {
        console.error("Erro ao criar o filme com as avaliações:", error);
        res.status(400).json({ error: "Erro ao criar o filme com as avaliações." });
    }
});

// Listar filmes com suas avaliações
app.get("/movies", async (req, res) => {
    try {
        const movies = await prisma.movie.findMany({
            include: {
                reviews: true,
            },
        });
        res.json(movies);
    } catch (error) {
        console.error("Erro ao listar os filmes:", error);
        res.status(500).json({ error: "Erro ao listar os filmes." });
    }
});

// Criar uma nova avaliação para um filme existente
app.post("/movies/:movieId/reviews", async (req, res) => {
    const { movieId } = req.params;
    const { rating, comment } = req.body;
    try {
        const review = await prisma.review.create({
            data: {
                rating,
                comment,
                movie: {
                    connect: { id: parseInt(movieId) },
                },
            },
        });
        res.status(201).json(review);
    } catch (error) {
        console.error("Erro ao criar a avaliação:", error);
        res.status(400).json({ error: "Erro ao criar a avaliação." });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
