
# Descrição

A motivação do projeto se deu pela recente tragédia da enchente no Recife. Estado que morei por 21 anos, e que por rezidir lá a muitos anos, pessoas próximas entraram em contado com meus país no intuito de alugar a nossa antiga casa, pois estavam desabrigados e não gostariam de retornar para locais com grandes focos de alagamentos, ou que a rua não fosse asfaltada. Isso me fez pensar em desenvolver uma API REST de moradias específicas para a capital do Nordeste, onde as famílias pudessem entrar no site e buscar por casas e apartamentos que fossem mais adeguados para a sua situação financeira.



# Sobre o Projeto

API desenvolvida como projeto final do curso de backend da {Reprograma}, tem como objetivo ajudar pessoas desabrigadas na capital do Nordeste que ficaram em situação de vunerabilidade após a tragédia da enchente. E que de acordo com o Portal Folha de Pernambuco Recife tem 3.828 família desalojadas atualmente, segundo o balanço da prefeitura.

# Instalações

* [Cors](#https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
* [Nodemon](#https://www.npmjs.com/package/nodemon)
* [Mongoose](#https://mongoosejs.com/)
* [Express](#https://expressjs.com/pt-br/)
* [Dotenv](#https://www.npmjs.com/package/dotenv)

# Como Usar

- Entre no terminal do Git Bash e faça o clone da APIaluguel:
   * [`git clone https://github.com/llinesobral/APIaluguel`](#https://github.com/llinesobral/APIaluguel)

- Faça o `fork`: 

- Faça o `clone`: git clone

- Instale `as dependências`: npm i ou yarn

- Crie o seu `.env` e inclua as variáveis e valores:

- Utilize `Postam` para chamar e testar os endpoinst da API: 


# Arquitetura MVC
verificar isso depois


# Rotas 

- `GET`
    - Retorna todas as moradias --> `localhost:7070/pe/all`
    - Retorna os bairros --> `localhost:7070/pe/district`
    - Retorna locais com focos de alagamentos --> `localhost:7070/pe/flooding`

- `POST`
    - Cadastra novas moradias --> `localhost:7070/pe/register`

- `PUT`
    - Atualizando os dados --> `localhost:7070/pe/update/:id`

- `DELETE`
    - Deleta moradias específicas --> `localhost:7070/pe/remove/:id`

# Tecnologias Utilizadas

* [JavaScript](#https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node.js](#https://nodejs.org/en/)
* [Vscode](#https://code.visualstudio.com/)
* [Git/Github](#https://github.com/)
* [MongoDb](#https://www.mongodb.com/pt-br)
* [Postman](#https://www.postman.com/)
* [Heroku](#https://id.heroku.com/login)
