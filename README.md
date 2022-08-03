# Backend Challenge 20220626

### Tecnologias utilizadas

- Javascript => [NodeJs](https://nodejs.org/en/)
- Banco de dados [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) utilizado para rodar o banco de dados
- CORS
- [Express](http://expressjs.com/pt-br/) para construção da api
- [Axios](https://axios-http.com/ptbr/) para fazer requisições HTTP
- [Dotenv](https://github.com/rolodato/dotenv-safe) para carregar variáveis de ambiente
- [Node-postgres](https://node-postgres.com/) para realizar a conexão com o banco de dados
- [Puppeteer](https://pptr.dev/) para realizar o scraping
- [Node-cron](https://www.npmjs.com/package/node-cron) para configurar o cron job e rodar o scrap diariamente
- [Nodemon](https://nodemon.io/) para ter hot reload da aplicação em desenvolvimento
- [PM2](https://pm2.keymetrics.io/) para rodar a api em produção
- Git hooks com [husky](https://github.com/typicode/husky) para manter o padrão de commits

### Descrição do Projeto

O projeto é composto por 3 partes, um web scraper que busca dados do [Open Food Facts](https://world.openfoodfacts.org/), um banco banco de dados PostgreSQL para armazenar os dados dos produtos, e uma API REST construída em Node + Express para disponibilizar os dados do banco

### Como instalar e usar o projeto
<br>

**Clone o projeto e acesse a pasta**

```bash
git clone git@lab.coodesh.com:hanyelchamon/challenge-20220626.git && cd challenge-20220626
```
<br>

**Configure o horário para o CRON rodar**

no arquivo [cron.config.json](./cron.config.json)

```bash
# Instale as dependências
$ npm install

# Rode o banco de dados no docker
$ npm run docker:dev
```

```bash
# Rode o CRON
$ npm run cron
```
<br>


**Em outro terminal rode a API**
```bash
$ npm run dev

# Api irá rodar na porta definida no arquivo .env.dev
```

<br>
<br>

>  This is a challenge by [Coodesh](https://coodesh.com/)