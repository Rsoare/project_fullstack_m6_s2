# Projeto Back-End

## Introdução
- O projeto foi construído principalmente utilizando [Nest.js](https://docs.nestjs.com/) e [Prisma](https://www.prisma.io/docs/getting-started), e caso você tenha dúvidas sobre essas tecnologias, pode consultar suas documentações oficiais para obter informações detalhadas e orientações específicas
  - Ducumentação - [Nest.js](https://docs.nestjs.com/)
  - Ducumentação - [Prisma](https://www.prisma.io/docs/getting-started)

- Por padrão, a aplicação está configurada com o banco de dados [SQLite](https://www.sqlite.org/index.html) e contém alguns scripts do Prisma e migrações iniciais para a criação das primeiras tabelas
  - Essa configuração inicial não é recomendada para ambientes de produção, somente para testes e desenvolvimento. Ao longo desta documentação haverá mais informações sobre o assunto.  

- Para iniciar a aplicação, basta seguir a sequência de comandos abaixo na raiz do projeto.
  - Instalar as dependências
  - Inicializar as migrações ( para realizar a criação das tabelas no banco de dados ) 
  - Inicializar a aplicação
    
## Intalando Dependencias 
```bash
$ npm install
```

## Inicializando as migrações
```bash
$ npx prisma migrate dev
```

## Inicializando a aplicação
```bash
$ npm run dev
```

## Rotas e Endpoints
- Com a aplicação inicializada, você terá acesso à documentação Swagger da aplicação, onde encontrará informações mais detalhadas sobre o funcionamento dos Endpoints da aplicação.
  - O Swagger funcinara localmente utilizando a porta 3000 ( http://localhost:3000/api/docs#/ )
  - Ducumentação da aplicação  - [Swagger](http://localhost:3000/api/docs#/)
  
## Aviso 
  - Abaixo, apresentarei uma documentação simplificada das rotas e endpoints disponíveis na aplicação. No entanto, como mencionado anteriormente, é altamente recomendado que você leia a documentação completa no Swagger para obter informações       mais detalhadas e interativas sobre cada endpoint.
    
## **Rotas - /client/login**

## Endpoints

| Método | Endpoint              | Responsabilidade                                    |
| ------ | --------------------- | --------------------------------------------------- |
| POST   | /client/login         | Realiza o login com o cliente                       |

#

## **Rotas - /clients**

## Endpoints

| Método | Endpoint                         | Responsabilidade                         |
| ------ | -------------------------------- | ---------------------------------------- |
| POST   | /clients                         | Cadastrar um novo cliente                |
| GET    | /clients                         | Listar todos os cliente                  |
| GET    | /clients/:id                     | Listar um cliente pelo id                |
| PATCH  | /clients/:id                     | Atualizar um cliente pelo id             |
| Delete | /clients/:id                     | Excluir cliente pelo id                  |

#

## **Rotas - /contacts**

## Endpoints

| Método | Endpoint                         | Responsabilidade                         |
| ------ | -------------------------------- | ---------------------------------------- |
| POST   | /contacts                        | Cadastrar um novo contato                |
| GET    | /contacts                        | Listar todos os contatos                 |
| GET    | /contacts/:id                    | Listar um contato pelo id                |
| PATCH  | /contacts/:id                    | Atualizar um contato pelo id             |
| Delete | /contacts/:id                    | Excluir contato pelo id                  |

## Configurar um novo banco de dados
- A configuração do [SQLite](https://www.sqlite.org/index.html) foi feita seguindo as recomendações da documentação do [Nest.js](https://docs.nestjs.com/) e [Prisma](https://www.prisma.io/docs/getting-started).
  - para obter informações detalhadas e orientações específicas recomento cunsultar essa seção da documentação [Defina a conexão do banco de dados Nest.js](https://docs.nestjs.com/recipes/prisma)
  - para verificar compatibilidade com bancos de dados recomendo acessar o link acima.

### Defina a conexão do banco de dados
  - Sua conexão com o banco de dados está configurada no datasource do seu schema.prisma, Arquivo que foi definido como [SQLite](https://www.sqlite.org/index.html)
    ```
      datasource db {
        provider = "sqlite"
        url      = env("DATABASE_URL")
      }
      
      generator client {
        provider = "prisma-client-js"
      }
    ```
    
- Basta alterar as informações para o banco de dados desejado, neste exemplo usarei o [PostgreSql](https://www.postgresql.org/)
  ```
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }
      
      generator client {
        provider = "prisma-client-js"
      }
  ```
- Agora, abra o arquivo .env e ajuste a DATABASE_URL variável de ambiente com as imformações do seu banco de dados, segue o exemplo abaixo:
  ```
      DATABASE_URL="postgres://Micro:123456@localhost:5432/lista_contato" //( DATABASE_URL="postgres://<Usuario>:<Senha>@localhost:<Porta>/<Nome do db>") 
  ```

