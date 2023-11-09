import express from 'express'; //serve para escutar as requisisções
import { config } from 'dotenv'; //serve para ler o arquivo .env

config(); //configura o dotenv

const port = process.env.PORT || 5000; //pega a porta do .env ou usa a 3000

const app = express(); //cria o servidor
app.use(express.json()); //faz o express entender json

app.get('/', (req, res) => {
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const idade = req.query.idade;
    const animeFav = req.query.anime;
    const altura = req.query.altura;
    // Rota inicial
    res.status(200).json({ 
    nome: nome, 
    sobrenome: sobrenome,
    idade: idade,
    animeFav: animeFav,
    altura: altura
});
    //consumir dados
});

app.get('/:nome/:sobrenome/:idade/:anime/:altura', (req, res) => {
    const nome = req.params.nome;
    const sobrenome = req.params.sobrenome;
    const idade = req.params.idade;
    const animeFav = req.params.anime;
    const altura = req.params.altura;

    // Rota inicial
    res.status(200).json({ message:`Meu nome é ${nome}, meu sobrenome é ${sobrenome}, minha idade é ${idade}, meu anime favorito é ${animeFav} e minha altura é ${altura}` });
    //consumir dados
});

app.post('/', (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    // Rota inicial
    res.status(200).json({ nomeUsuario: nome, 
    sobrenomeUsuario: sobrenome, 
    idadeUsuario: idade });
    //criar dados
});

app.put('/', (req, res) => {
    // Rota inicial
    res.status(200).json({ message: 'Hello, PUT!' });
    //atualizar dados
});

app.delete('/', (req, res) => {
    // Rota inicial
    res.status(200).json({ message: 'Hello, DELETE!' });
});

app.listen(port, () => {
    // Inicia o servidor
    console.log(`Server is running on port http://localhost:${port}`);
});