import mongoose from "mongoose";


// Pra realizar a conexão com o banco de dados sem expor a senha usei o DOTENV.

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection;
}

export default conectaNaDatabase;


