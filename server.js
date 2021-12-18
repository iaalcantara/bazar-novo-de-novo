const app = require('./src/app'); //importando o arquivo app
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`) // verifcando se a porta está respondendo
});