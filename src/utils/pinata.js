require("dotenv").config();
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;
const bearer = process.env.REACT_APP_BEARER_KEY;

const axios = require("axios");

// Função para converter JSON em IPFS
export const pinJSONToIPFS = async (JSONBody) => {};

// Função para transformar a imagem da Arte do Projeto em IPFS
export const pinIMAGEtoIPFS = async (imageBody) => {};
