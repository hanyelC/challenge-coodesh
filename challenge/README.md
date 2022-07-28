# Backend Challenge 20220626


## Introdução

Nesse desafio trabalharemos no desenvolvimento de uma REST API que utilizará os dados do projeto Open Food Facts, um banco de dados aberto com informação nutricional de diversos produtos alimentícios.

O projeto tem como objetivo dar suporte a equipe de nutricionistas da empresa Fitness Foods LC para que possam comparar de maneira rápida a informação nutricional dos alimentos da base do Open Food Facts.

### Obrigatório

- Trabalhar em um FORK deste repositório em seu usuário;
- O projeto back-end deverá ser desenvolvido usando a Linguagem de preferência da Vaga;
- Documentação para configuração do projeto em ambientes de produção (como instalar, rodar e referências a libs usadas);


## O projeto

- Criar um banco de dados MongoDB usando Atlas: https://www.mongodb.com/cloud/atlas ou algum Banco de Dados SQL se não sentir confortável com NoSQL;
- Criar uma REST API com as melhores práticas de desenvolvimento.
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

## Extras

- **Diferencial 1** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;
- **Diferencial 2** Configurar um sistema de alerta se tem algum falho durante o Sync dos produtos;
- **Diferencial 3** Descrever a documentação da API utilizando o conceito de Open API 3.0;
- **Diferencial 4** Escrever Unit Tests para os endpoints da API;


## Readme do Repositório

- Deve conter o título de cada projeto
- Uma descrição de uma frase
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

Avisar sobre a finalização e enviar para correção.

1. Confira se você respondeu o Scorecard anexado na Vaga que se candidatou;
2. Confira se você respondeu o Mapeamento anexado na Vaga que se candidatou;
3. Acesse [https://coodesh.com/challenges/review](https://coodesh.com/challenges/review);
4. Adicione o repositório com a sua solução;
5. Grave um vídeo, utilizando o botão na tela de solicitar revisão da Coodesh, com no máximo 5 minutos, com a apresentação do seu projeto. Utilize o tempo para:
- Explicar o objetivo do desafio
- Quais tecnologias foram utilizadas
- Mostrar a aplicação em funcionamento
- Foque em pontos obrigatórios e diferenciais quando for apresentar.
6. Adicione o link da apresentação do seu projeto no README.md.
7. Verifique se o Readme está bom e faça o commit final em seu repositório;
8. Confira a vaga desejada;
9. Envie e aguarde as instruções para seguir no processo. Sucesso e boa sorte. =)

## Suporte

Use a [nossa comunidade](https://coodesh.com/desenvolvedores#community) para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.
