// Importar as bibliotecas necessárias
import mongoose from 'mongoose';

// URL de conexão com o banco de dados MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/griots';

// Configuração e conexão com o MongoDB usando o Mongoose
export async function connectToDatabase() {
  try {
    // Verificar se já estamos conectados ao banco de dados
    if (mongoose.connection.readyState !== 1) {
      // Conectar ao MongoDB
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    // Retorna o objeto de conexão para ser utilizado em outras partes do aplicativo
    return { db: mongoose.connection.db };
  } catch (error) {
    // Em caso de erro, logamos o erro e lançamos uma exceção para ser tratada em outro lugar
    console.error('Erro ao conectar ao banco de dados:', error.message);
    throw new Error('Erro ao conectar ao banco de dados');
  }
}
