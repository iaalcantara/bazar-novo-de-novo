const app = require('./src/app'); //importando o arquivo app
const PORT = 7050

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`) // verifcando se a porta está respondendo
});