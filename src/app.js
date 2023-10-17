import express from "express";

const app = express();
app.use(express.json())


const livros = [
    {
        id: 1,
        titulo: "Senhor dos anéis",
    },
    {
        id: 2,
        titulo: "O Hobbit",
    },
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Home")
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201)
    res.send("Cadastrado com sucesso")
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo;
    res.status(201).json(livros)
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!")
})

export default app;