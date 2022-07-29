
# Descrição

A motivação do projeto se deu pela recente tragédia da enchente no Recife, estado que morei por 21 anos. Com isso, pessoas próximas entraram em contado com meus país no intuito de alugar a nossa antiga casa, pois estavam desabrigados e não gostariam de retornar para locais com grandes focos de alagamentos, ou que a rua não fosse asfaltada. Isso me fez pensar em desenvolver uma API REST de moradia específica para a capital do Nordeste, onde as famílias pudessem entrar no site e buscar por casas e apartamentos que fossem mais adeguados para a sua situação financeira e com risco mínimo de alagamento.




# Sobre o Projeto

API desenvolvida como projeto final do curso de backend da {Reprograma}. Tem como objetivo ajudar pessoas desabrigadas na capital do Nordeste que ficaram em situação de vunerabilidade após a tragédia da enchente, e que de acordo com o 'Portal Folha de Pernambuco', Recife tem 3.828 família desalojadas atualmente, segundo o balanço da prefeitura.

# Instalações

* [Cors](#https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
* [Nodemon](#https://www.npmjs.com/package/nodemon)
* [Mongoose](#https://mongoosejs.com/)
* [Express](#https://expressjs.com/pt-br/)
* [Dotenv](#https://www.npmjs.com/package/dotenv)

# Como Usar

1. Entre no terminal do Git Bash e faça o clone da APIaluguel:
  
  - `git clone https://github.com/llinesobral/APIaluguel`

2. Faça o `fork`: 

  ![clique no fork](https://user-images.githubusercontent.com/101001076/181839372-6305a217-d5cf-4682-aea1-28acc8c712db.PNG)

3. Faça o `clone`:

   ![git clone forcado](https://user-images.githubusercontent.com/101001076/181839751-d8aa2b90-b406-4c01-b0b8-6eba30b3d9be.PNG)

4. Instale `as dependências`: npm i ou yarn

   ![instalando dependencias](https://user-images.githubusercontent.com/101001076/181840191-26064644-c6f6-4d0b-8fc6-319a7b2943e2.PNG)

5. Crie o seu `.env` e inclua as variáveis e valores:

   ![criando o  env](https://user-images.githubusercontent.com/101001076/181840424-fb58b769-ea8c-4eb6-9f54-377435161816.PNG)

6. Utilize `Postam` para chamar e testar os endpoinst da API: 




# Arquitetura MVC
verificar isso depois

# Rotas 

- `GET`
    - Retorna todas as moradias: `localhost:7070/pe/all`
    - Retorna os bairros: `localhost:7070/pe/district`
    - Retorna locais com focos de alagamentos: `localhost:7070/pe/flooding`

- `POST`
    - Cadastra novas moradias: `localhost:7070/pe/register`

- `PUT`
    - Atualizando os dados: `localhost:7070/pe/update/:id`

- `DELETE`
    - Deleta moradias específicas: `localhost:7070/pe/remove/:id`


# Funcionalidades/Objetivos

- Listar todas as moradias cadastradas no sistema;
- Listar todas as localidades com foco de alagamento;
- Listar por valores de aluguel de casas e apartamentos;
- Listar por bairro;
- Cadastrar novas moradias;
- Atualizar os dados das moradias;
- Deletar moradia já ocupada.


# Tecnologias Utilizadas

* [JavaScript](#https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node.js](#https://nodejs.org/en/)
* [Vscode](#https://code.visualstudio.com/)
* [Git/Github](#https://github.com/)
* [MongoDb](#https://www.mongodb.com/pt-br)
* [Postman](#https://www.postman.com/)
* [Heroku](#https://id.heroku.com/login)


# Aprendizados 

O projeto final consiste em uma API fundamentada no CRUD, que são: CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DELETAR).


# Autora

Aline Alves de Lima Sobral

* [Linkedin](#https://www.linkedin.com/in/aline-alves-5b7660235/)

* [Instagram](#https://www.instagram.com/lline.22/)