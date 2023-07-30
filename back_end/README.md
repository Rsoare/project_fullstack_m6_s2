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
    
## **Rotas - /login**

## Endpoints

| Método | Endpoint              | Responsabilidade                                    |
| ------ | --------------------- | --------------------------------------------------- |
| POST   | /login                | Realiza o login com admin                           |
| GET    | /login/:id            | Listar um admin e seus dados                        |

#




