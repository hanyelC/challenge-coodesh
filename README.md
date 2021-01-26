# Fullstack Challenge 20201026


## Introdução

Nesse desafio trabalharemos no desenvolvimento de uma REST API que utilizará os dados do projeto Open Food Facts, um banco de dados aberto com informação nutricional de diversos produtos alimentícios.

O projeto tem como objetivo dar suporte a equipe de nutricionistas da empresa Fitness Foods LC para que possam comparar de maneira rápida a informação nutricional dos alimentos da base do Open Food Facts.

### Obrigatório

- Trabalhar em um FORK deste repositório em seu usuário;
- O projeto back-end deverá ser desenvolvido usando em NodeJs ou Linguagem de preferência;
- O projeto front-end deverá ser desenvolvido usando em ReactJs ou Framework de preferência;
- Documentação para configuração do projeto em ambientes de produção (como instalar, rodar e referências a libs usadas);


## O projeto

- Criar um banco de dados MongoDB usando Atlas: https://www.mongodb.com/cloud/atlas ou algum Banco de Dados SQL se não sentir confortável com NoSQL;
- Criar uma REST API com as melhores práticas de desenvolvimento.
- Criar uma versão Web para listar os produtos
- Recomendável usar Drivers oficiais para integração com o DB

### Modelo de Dados:

Para a definição do modelo, consultar o arquivo [products.json](./products.json) que foi exportado do Open Food Facts, um detalhe importante é que temos dois campos personalizados para controlar a importação de produtos:

- `imported_t`: campo do tipo `Date` com a dia e hora que foi importado;
- `status`: campo do tipo `Enum` com os possíveis valores `draft` e `imported`;

### Sistema do CRON

Para prosseguir com o desafio, precisaremos criar na API um sistema de atualização que vai realizar o scraping da página do [Open Food Facts](https://world.openfoodfacts.org/) uma vez ao día. Adicionar aos arquivos de configuração o melhor horário para executar a importação.

Ao realizar o scraping do HTML, recomendamos utilizar estruturas recursivas para navegar entre a lista de produtos e acessar a página do produto com as informações adicionais necessárias como:

- Código de Barras
- Quantidade
- Marcas
- Embalagem
- Categorias


Ter em conta que:

- Todos os produtos deverão ter os campos personalizados `imported_t` e `status`.
- Limitar a importação a somente 100 produtos;
- Para gerar a URL das imagens, revisar o How to do projeto em: https://wiki.openfoodfacts.org/Developer-How_To

### A REST API

Na REST API teremos os seguintes endpoints:

- `GET /`: Retornar um Status: 200 e uma Mensagem "Fullstack Challenge 20201026"
- `GET /products/:code`: Obter a informação somente de um produto;
- `GET /products`: Listar todos os produtos da base de dados, utilizar o sistema de paginação para não sobrecarregar a `REQUEST`.

### Front End

Desenvolver um projeto em ReactJs ou técnologia de preferência para listar os produtos com a seguinte informação:

- Imagem
- Nome

Ao clicar nos produtos, expandiremos a informação utilizando um modal com os dados:

- Barcode
- Status
- Packaging
- Brands
- Store


## Extras

- **Diferencial 1** Adicionar um sistema de comparação entre os produtos;
- **Diferencial 2** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;
- **Diferencial 3** Configurar um sistema de alerta se tem algum falho durante o Sync dos produtos;
- **Diferencial 4** Descrever a documentação da API utilizando o conceito de Open API 3.0;
- **Diferencial 5** Escrever Unit Tests para os endpoints da API;


## Readme do Repositório

- Deve conter o título de cada projeto
- Uma descrição de uma frase
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)

## Finalização

Avisar sobre a finalização e enviar para correção em: [https://coodesh.com/review-challenge](https://bit.ly/3e7MjcK)
Após essa etapa será marcado a apresentação/correção do projeto.

## Instruções para a Apresentação:

1. Será necessário compartilhar a tela durante a vídeo chamada;
2. Deixe todos os projetos de solução previamente abertos em seu computador antes de iniciar a chamada;
3. Deixe os ambientes configurados e prontos para rodar;
4. Prepara-se pois você será questionado sobre cada etapa e decisão do Challenge;
5. Prepare uma lista de perguntas, dúvidas, sugestões de melhorias e feedbacks (caso tenha).


## Suporte

Use o nosso canal no slack: http://bit.ly/32CuOMy para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.

