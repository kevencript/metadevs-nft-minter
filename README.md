# NFT Minter 
<img src="https://metadevs.com.br/static/media/logo-w-text.6bc5968eaf1e5ddc1c26.png" alt="Metadevs www.metadevs.com.br" style="width:400px;"/>

Acesse a comunidade Metadevs: https://wwww.metadevs.com.br/

Esse projeto é uma aplicação web utilizando ReactJs, Alchemy Web3.0, Piñata, SmartContracts com Solidity & OpenZeppelin além do Truffle & Ganache para realizar os testes em uma Blockchain Ethereum de teste.

<p align="center">
  <img src="https://gateway.pinata.cloud/ipfs/QmTc7pUi9Barfkqbx9zgcgGkaqSJQnpsDG4ZQKrTFyqQt8" alt="Metadevs www.metadevs.com.br" style="width:750px;"/>
</p>

## ATENÇÃO: `Código Inicial do Curso`vs Código completo 

Se você comprou o curso e vai iniciar o projeto desde o início, você deve fazer um clone da branch `codigo-inicial`. Lá estará presente toda a parte estrutural, mas as funções/contratos ainda não estão implementados, e você pode ir construindo de acordo com o curso.

A versão completa do código encontra-se na branch `main`

## Como iniciar o projeto

Dentro do diretório principal, você pode executar:

### `npm install`

Instala todas as dependências do projeto dentro da pasta "node_modules"

#
### `npm start`

Inicia a aplicação no modo de desenvolvimento.\
Acesse [http://localhost:3000](http://localhost:3000) para visualizar a página no seu browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#
### `Criar um aquivo .env para as variáveis de ambiente`

Esse arquivo deve conter as seguintes inforações advindas do Piñata & Alchemy

---
REACT_APP_PINATA_KEY = "xxxxxxx"

REACT_APP_PINATA_SECRET = "xxxxxxxxxxxxxxx"

REACT_APP_BEARER_KEY = "xxxxxxxxxx"

REACT_APP_ALCHEMY_KEY = "xxxxxxxxxx"
---

#
### `truffle migrate`

Cria as ABI's do projeto dentro da pasta `src/abis`.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Lembrando que para a aplicação rodar corretamente, é necessário ter uma Blockchain local rodando com Ganache

Tenha mais informações sobre o [Ganache](https://trufflesuite.com/ganache/).

### `truffle console`

**Atenção: para acessar os métodos do nosso SmartContract e realizar testes no console do Truffle é necessário rodar um `truffle migrate`.**

Modo interativo para testar métodos do nosso contrato
