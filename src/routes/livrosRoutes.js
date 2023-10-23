import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.pesquisarPorEditora);
routes.get("/livros/:id", LivroController.procurarLivroPorId);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);
routes.post("/livros", LivroController.cadastrarLivro);

export default routes