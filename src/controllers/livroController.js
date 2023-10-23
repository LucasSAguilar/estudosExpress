import { autor } from "../models/Autores.js";
import livro from "../models/Livros.js";


class LivroController {

    // ---

    static async listarLivros(req, res) {

        try {
            const livros = await livro.find({})
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ message: `Ocorreu um erro: ${error.message}` });
        }
    }

    // ---

    static async procurarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `Falha na requisição: ${error}` })
        }
    }
    // ---

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    // ---

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `Livro atualizado com sucesso!` })
        } catch (error) {
            res.status(500).json({ message: `Ocorreu um erro na atualização: ${error}` })
        }
    }

    // ---

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: `Livro removido com sucesso!` })
        } catch (error) {
            res.status(500).json({ message: `Ocorreu um erro ao deletar: ${error}` })
        }
    }

    // ---

    static async pesquisarPorEditora(req, res) {
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora)
        } catch (error) {
            res.status(500).json({ message: `Ocorreu um erro ao procurar: ${error}` })
        }
    }

}
export default LivroController;