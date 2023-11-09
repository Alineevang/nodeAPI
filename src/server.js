import express from 'express'; //serve para escutar as requisisções
import { config } from 'dotenv'; //serve para ler o arquivo .env

config(); //configura o dotenv

const port = process.env.PORT || 5000; //pega a porta do .env ou usa a 3000

const app = express(); //cria o servidor
app.use(express.json()); //faz o express entender json

app.get('/', (req, res) => {
    // Rota inicial
    res.status(200).json({ message: 'Hello World!' });
    });

app.listen(port, () => {
    // Inicia o servidor
    console.log(`Server is running on port http://localhost:${port}`);
    });