import MetadevsContract from "../abis/MetadevsContract.json";
import { pinJSONToIPFS } from "./pinata.js";

require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

// Função para iniciar o contrato de acordo com a ABI
export const loadContract = async () => {};

// Função para abrir a opção de conectar carteira na Metamask
export const connectWallet = async () => {};

// Função para realizar o Mint de um NFTT a partir dos parâmetros
export const mintNFT = async (artist, artwork, name) => {};
