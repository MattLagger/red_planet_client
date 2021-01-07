# Client Red Planet

Projeto criado com react

## Scripts

Scripts disponíveis

### `yarn start` ou `npm run start`

Executa o app em modo dev
Abra [http://localhost:3001](http://localhost:3001) e visualize no browser.\

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build` ou `npm run build`

Gera o aplicativo para produção na pasta `build`.\
Também otimiza o projeto.

Minificando e gerando hashes.\

## Porta 3001
A porta 3001 pode ser alterada no script start do `package.json`
## Autenticação

A autenticação é realizada via github-oauth e jwt pela api em ruby on rails.

## Bibliotecas Utilizadas

No projeto foram utilizadas algumas bibliotecas de terceiros.\

1. momentjs: para manipulação de datas e formatação.
2. material-ui/core: framework frontend com base no google material.
3. material-ui/icons: pacote de icones do google material.
4. material-ui/lab: conteudos beta do google material.
5. axios: biblioteca para chamadas http.

## Arquivos

`App.js` Arquivo principal da aplicação.\
`routes.js` Responsável pelo controle de todas as rotas do projeto.\
`./pages` Onde se localiza todas as páginas usadas nas rotas.\
`./components` Componentes menores e reutilizavéis.\
`./services` Serviços que requerem utilização da api.\
`./assets` Imagens e outros tipos de arquivos utilizados.\

## Páginas

`/login` Tela principal do projeto com login via github .\
`/home` Lista todas as sondas em marte e seus status atualmente.\
`/favorites` Exibe todos as imagens de sondas favoritadas, assim como permite excluir as salvas.\
`/rovers/:nome_do_rover` Lista todas as fotos daquele rover no periodo selecionado, mas permite também favoritas algumas.\