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

    // Criar uma nova avaliação para um filme existente
app.post("/movies-with-reviews/:movieId/reviews", async (req, res) => {
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


// Ler todas as reviews de um filme específico
app.get("/movies/:movieId/reviews", async (req, res) => {
    const { movieId } = req.params;
    try {
        const reviews = await prisma.review.findMany({
            where: { movieId: parseInt(movieId) },
        });
        res.json(reviews);
    } catch (error) {
        console.error("Erro ao buscar as reviews:", error);
        res.status(500).json({ error: "Erro ao buscar as reviews." });
    }
});

// Editar um filme existente
app.put("/movies-with-reviews/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description, director, year, genre } = req.body;
    try {
        const movie = await prisma.movie.update({
            where: { id: parseInt(id) },
            data: { title, description, director, year, genre },
        });
        res.json(movie);
    } catch (error) {
        console.error("Erro ao atualizar o filme:", error);
        res.status(500).json({ error: "Erro ao atualizar o filme." });
    }
});
// Editar uma review existente
app.put("/reviews/:id", async (req, res) => {
    const { id } = req.params;
    const { rating, comment } = req.body;
    try {
        const review = await prisma.review.update({
            where: { id: parseInt(id) },
            data: { rating, comment },
        });
        res.json(review);
    } catch (error) {
        console.error("Erro ao atualizar a review:", error);
        res.status(500).json({ error: "Erro ao atualizar a review." });
    }
});

// Deletar um filme
app.delete("/movies-with-reviews/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.movie.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send(); // No Content
    } catch (error) {
        console.error("Erro ao deletar o filme:", error);
        res.status(500).json({ error: "Erro ao deletar o filme." });
    }
});

// Deletar uma review
app.delete("/reviews/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.review.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send(); // No Content
    } catch (error) {
        console.error("Erro ao deletar a review:", error);
        res.status(500).json({ error: "Erro ao deletar a review." });
    }
});





const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
