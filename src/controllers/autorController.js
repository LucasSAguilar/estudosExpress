import { autor } from "../models/Autores.js";


class AutorController {

    // ---

    static async listarAutores(req, res) {

        try {
            const autores = await autor.find({})
            res.status(200).json(autores);
        } catch (error) {
            res.status(500).json({ message: `Ocorreu um erro: ${error.message}` });
        }
    }

    // ---

    static async procurarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `Falha na requisição: ${error}` })
        }
    }
    // ---

    static async cadastrarAutor(req, res) {
        try {
            const autorCadastrado = autor.create(req.body);
            res.status(200).json({ message: "Autor cadastrado com sucesso!", autor: autorCadastrado })
        } catch (error) {
            res.status(500).json({ message: `Ocorreu um erro: ${error.message}` })
        }
    }

    // ---

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `Autor atualizado com sucesso!` })
        } catch (error) {
            res.status(500).json({ message: `Ocorreu um erro na atualização: ${error}` })
        }
    }

    // ---

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: `Autor removido com sucesso!` })
        } catch (error) {
            res.status(500).json({ message: `Ocorreu um erro ao deletar: ${error}` })
        }
    }

    // ---


}
export default AutorController;