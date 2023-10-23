import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
// -----

const app = express();
routes(app)
const conexao = await conectaNaDatabase();

// -----

conexao.on("error", (erro) => {
    console.error(`Ocorreu um erro: ${erro}`);
})

conexao.once("open", () => {
    console.log(`Conexão realizada com sucesso!`);
})


export default app;