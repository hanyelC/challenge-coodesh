# Como rodar em produção

**Clone o projeto e acesse a pasta**

```bash
git clone git@lab.coodesh.com:hanyelchamon/challenge-20220626.git && cd challenge-20220626
```
<br>

**Configure o horário para o CRON rodar**

no arquivo [cron.config.json](./cron.config.json)

<br>

**Configure as variáveis de ambiente**

- Crie um arquivo `.env` na raiz do projeto com todas as variáveis descritas no arquivo [.env.example](./.env.example)

<br>

**Inicialize o banco de dados**
```bash
# Rode o banco de dados no docker
$ npm run docker:prod

# Rode a migration do banco
$ npm run migrate
```

<br>

**Inicie a aplicação**
```bash
$ npm start
```

<br>

Para visualizar os logs da aplicação execute:
```bash
$ pm2 logs
```
<br>

>  This is a challenge by [Coodesh](https://coodesh.com/)