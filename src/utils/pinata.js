require("dotenv").config();
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;
const bearer = process.env.REACT_APP_BEARER_KEY;

const axios = require("axios");

// Função para converter JSON em IPFS
export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  // Realizando uma requisição para a API do piñata para
  // transformar um objeto JSON em um IPFS
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};

// Função para transformar a imagem da Arte do Projeto em IPFS
export const pinIMAGEtoIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  // Realizando uma requisição para a API do piñata para
  // transformar uma imagem em um IPFS
  return (
    axios
      .post(url, JSONBody, {
        maxBodyLength: "Infinity",
        headers: {
          // Obtendo variáveis de ambiente da nossa conta do piñata
          pinata_api_key: key,
          pinata_secret_api_key: secret,
        },
      })
      // Depois de subir a imagem e obter uma resposta, iremos definir
      // algumas variáveis de stado da aplicação definindo o link/hash do
      // IPFS gerado
      .then(function (response) {
        console.log(response);
        return {
          success: true,
          pinataUrl:
            "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
        };
      })
      .catch(function (error) {
        // Caso algo dê errado, iremos tratar o erro aqui
        return {
          success: false,
          error: "Erro ao realizar upload da Arte do Trabalho",
        };
      })
  );
};
