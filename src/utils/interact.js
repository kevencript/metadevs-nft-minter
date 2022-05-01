import MetadevsContract from "../abis/MetadevsContract.json";
import { pinJSONToIPFS } from "./pinata.js";

require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

// Função para iniciar o contrato de acordo com a ABI
export const loadContract = async () => {
  // Retornando os dados da rede pelo ID
  const networkData = MetadevsContract.networks["5777"]; // Para um servidor ganache

  const contractABI = MetadevsContract.abi; // Definindo dados da ABI
  const contractAddress = networkData.address; // Definindo endereço do contrato a partir das configs de rede da ABI

  if (contractABI && contractAddress) {
    // Caso tenhamos a ABI e o Endereço do contrato, instanciamos o contrato no navegador
    window.contract = new web3.eth.Contract(contractABI, contractAddress);

    return {
      success: true,
      contractAddress, // Retornando o endereço do contrato
    };
  } else {
    // Caso não tenhos as variáveis de ABI e o Endereço do contrato
    return {
      success: false,
    };
  }
};

// Função para abrir a opção de conectar carteira na Metamask
export const connectWallet = async () => {
  if (window.ethereum) {
    // Se a Metamask estiver instalada no navegador
    try {
      // Inicia o processo de habilitação de uma carteira da Metamask para a nossa aplicação
      const address = await window.ethereum.enable();
      const obj = {
        // Objeto contendo o endereço da carteira do usuário e os status da operação
        connectedStatus: true,
        status: "",
        address: address,
      };
      return obj;
    } catch (error) {
      // Caso haja algum erro
      return {
        connectedStatus: false,
        status:
          "🦊 Conecte sua carteira na Metamask no botão no topo à direita",
      };
    }
  } else {
    return {
      connectedStatus: false,
      status:
        "🦊  Por favor, instale a Metamask no seu navegador: https://metamask.io/download.html",
    };
  }
};

// Função para realizar o Mint de um NFTT a partir dos parâmetros
export const mintNFT = async (artist, artwork, name) => {};
