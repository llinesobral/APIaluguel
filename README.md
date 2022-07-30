
# ✍️ Descrição

A motivação do projeto se deu pela recente tragédia da enchente no Recife, estado que morei por 21 anos. Com isso, pessoas próximas entraram em contado com meus pais no intuito de alugar a nossa antiga casa, pois estavam desabrigados e não gostariam de retornar para locais com grandes focos de alagamentos, ou que a rua não fosse asfaltada. Isso me fez pensar em desenvolver uma API REST de moradia específica para a capital do Nordeste, onde as famílias pudessem entrar no site e buscar por casas e apartamentos que fossem mais adequados para a sua situação financeira e sem risco de alagamento.


# 📚 Sobre o Projeto

API desenvolvida como projeto final do curso de backend da {Reprograma}. Tem como objetivo ajudar pessoas desabrigadas na capital do Nordeste que ficaram em situação de vunerabilidade após a tragédia da enchente, e que de acordo com o 'Portal Folha de Pernambuco', Recife tem 3.828 famílias desalojadas, segundo o balanço da prefeitura.

# ⚠️ Instalações

* [Cors](#https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
* [Nodemon](#https://www.npmjs.com/package/nodemon)
* [Mongoose](#https://mongoosejs.com/)
* [Express](#https://expressjs.com/pt-br/)
* [Dotenv](#https://www.npmjs.com/package/dotenv)

# 💻 Como Usar

1. Entre no terminal do Git Bash e faça o clone da APIaluguel:
  
  - `git clone https://github.com/llinesobral/APIaluguel`

2. Faça o `fork`: 

  ![clique no fork](https://user-images.githubusercontent.com/101001076/181839372-6305a217-d5cf-4682-aea1-28acc8c712db.PNG)

3. Faça o `clone`:

   ![git clone forcado](https://user-images.githubusercontent.com/101001076/181839751-d8aa2b90-b406-4c01-b0b8-6eba30b3d9be.PNG)

4. Instale `as dependências`:

   ![instalando dependencias](https://user-images.githubusercontent.com/101001076/181840191-26064644-c6f6-4d0b-8fc6-319a7b2943e2.PNG)

5. Crie o seu `.env` e inclua as variáveis e valores:

   ![criando o  env](https://user-images.githubusercontent.com/101001076/181840424-fb58b769-ea8c-4eb6-9f54-377435161816.PNG)

6. Utilize `Postam` para chamar e testar os endpoinst da API: 
   
   ![postman  2](https://user-images.githubusercontent.com/101001076/181841448-644066ac-26f9-45c7-891b-970504708522.png)


#  Rotas 

- `GET`
    - Lista das moradias: `localhost:7070/pe/all`

    ![Animação 1](https://user-images.githubusercontent.com/101001076/181862356-945bc271-5117-478d-8c26-aa2c93e1c222.gif)


    -  Lista dos bairros: `localhost:7070/pe/district`
    
    ![Animação 2](https://user-images.githubusercontent.com/101001076/181862845-c86d8b68-916c-4c31-b0a4-f38848224b49.gif)


    - Lista de locais com focos de alagamentos: `localhost:7070/pe/flooding`
    
    ![Animação 3](https://user-images.githubusercontent.com/101001076/181863353-9b595a1f-6ce2-48cd-84d7-64f19ecb0ff5.gif)


- `POST`
    - Cadastro de novas moradias:  `localhost:7070/pe/register`

    ![Animação 4](https://user-images.githubusercontent.com/101001076/181908864-d22fb5d6-cbb8-4323-adad-2c821e82fd69.gif)


- `PUT`
    - Atualizando os dados:  `localhost:7070/pe/update/:id`

    ![Animação 5](https://user-images.githubusercontent.com/101001076/181908917-525dd82e-6653-4ab1-bea5-b0e91916ca76.gif)


- `DELETE`
    - Exclue moradias já ocupadas:  `localhost:7070/pe/remove/:id`

    ![Animação 6](https://user-images.githubusercontent.com/101001076/181908974-8e7397c0-113e-4e42-bef5-6f2b5881256f.gif)



# ✨ Funcionalidades/Objetivos

- Listar todas as moradias cadastradas no sistema;
- Listar todas as localidades com foco de alagamento;
- Listar por valores de aluguel casas e apartamentos;
- Listar por bairro;
- Cadastrar novas moradias;
- Atualizar os dados das moradias;
- Deletar moradias já ocupadas.


# 📱 Tecnologias Utilizadas

* [JavaScript](#https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node.js](#https://nodejs.org/en/)
* [Vscode](#https://code.visualstudio.com/)
* [Git/Github](#https://github.com/)
* [MongoDb](#https://www.mongodb.com/pt-br)
* [Postman](#https://www.postman.com/)
* [Heroku](#https://id.heroku.com/login)


# 📖 Aprendizados 

- O projeto final consiste em uma API fundamentada no `CRUD`:
  - CREATE (CRIAR), 
  - READ(LER-CONSULTA), 
  - UPDATE(ATUALIZAR), 
  - DELETE(DELETAR).

- E também na `Arquitetura MVC`:
  - 📑 .env
  - 📑 .env.example
  - 📑 .gitignore
  - 📑 package-lock.json
  - 📑 package.json
  - 📑 Procfile
  - 📑 README.md
  - 📑 server.js
  


# 🎓 Autora

Aline Alves de Lima Sobral

* [Linkedin](#https://www.linkedin.com/in/aline-alves-5b7660235/)

* [Instagram](#https://www.instagram.com/lline.22/)