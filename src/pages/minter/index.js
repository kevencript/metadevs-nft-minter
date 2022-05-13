import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Fox from "../../components/fox";
import "./style.css";

// Import das funções utilitárias e de interação com o piñata

const FormData = require("form-data");

const Minter = () => {
  // Variáveis de Estado da aplicação, erros
  // e informações da carteira do usuário
  const [isConnected, setConnectedStatus] = useState(false);
  const [walletAddress, setWallet] = useState("");
  // Variáveis do Formulário
  const [releaseName, setReleaseName] = useState("");
  const [artwork, setArtwork] = useState("");
  const [artist, setArtist] = useState("");
  // Tipos aceitáveis de Arte do Projeto
  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

  // Variável na qual iremos concentrar as informações do formulário
  let data = new FormData();

  // Função que é executada assim que o código é executado (ex: quando a página
  // é aberta no navegador)
  useEffect(async () => {}, []);

  // Função executada quando o usuário clica no botão "conectar carteira"
  // Essa função irá chamar outra função utilitária (connectWallet) e irá
  // definir o status e/ou endereço da carteira retornado (caso tudo ocorra bem)
  const connectWalletPressed = async () => {};

  // Função para quando o usuário for realizar o Mint
  const onMintPressed = async () => {};

  // Função executada quando o usuário seleciona uma imagem no formulários
  const artworkHandleChange = async (e) => {};

  return (
    <div id="minter">
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid">
        {/* TÍTULO  E SUBTITULO */}
        <div className="row mt-4">
          <div className="col-md-2 col-sm-0" />
          <div className="col-md-4 col-sm-12 text-md-start text-sm-center  mt-2">
            <span className="fw-bolder title">NFT</span>
            <span className="title"> Minter</span>
            <br />
            <span className="text-muted subtitle fw-light text-md-start text-sm-center">
              Realize o Mint do seu NFT!
            </span>
          </div>

          {/* METAMASK FACE INTERATIVA */}
          <div className="col-md-2 col-sm-12 text-center mt-3 mt-md-0">
            <div id="metamask-face">
              {/* <Fox followMouse width={100} height={100} /> */}
            </div>
          </div>

          {/* BOTÃO CONECTAR CARTEIRA */}
          <div className="col-md-4 col-sm-12 text-md-start tex-sm-center connect-wallet-div mt-4 mt-md-auto mb-md-auto mb-4">
            <span onClick={connectWalletPressed}>
              {/* Botão de Conectar carteira
              obs: caso o usuário estiver conectado iremos mostrar o endereço da carteira
              caso contrário, a opção conectar carteira
              */}
              {isConnected ? (
                <span className="wallet-button-connected">
                  {"✅ Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)}
                </span>
              ) : (
                <span className="wallet-button">Conectar Carteira 👛</span>
              )}
            </span>
          </div>
          <div className="col-2" />
        </div>

        {/* ALERTAS */}
        {/* Alertas de Status */}

        {/* {status ? (
          <div className="row mb-4 mt-5 mt-md-4">
            <div className="col-12">
              <div className="alert alert-secondary" role="alert">
                <span className="status">{status}</span>
              </div>
            </div>
          </div>
        ) : null} */}
        <div className="row mb-4 mt-5 mt-md-4">
          <div className="col-12">
            <div className="alert alert-secondary" role="alert">
              <span className="status">
                Olá! Eu sou um exemplo de um alerta.
              </span>
            </div>
          </div>
        </div>

        {/* Alertas de Erros */}

        {/* {error ? (
          <div className="row mb-4 mt-5 mt-md-4">
            <div className="col-12">
              <div className="alert alert-danger" role="alert">
                <span className="status">{error}</span>
              </div>
            </div>
          </div>
        ) : null} */}
        <div className="row mb-4 mt-5 mt-md-4">
          <div className="col-12">
            <div className="alert alert-danger" role="alert">
              <span className="status">Olá! Eu sou um exemplo de um erro</span>
            </div>
          </div>
        </div>

        {/* CARD PRINCIPAL E FORMULÁRIO*/}
        <div className="row">
          <div className="col-1 col-md-2" />
          <div className="col-10 col-md-8 form-card">
            <div className="row text-center">
              <div className="col-12 text-center">
                <span className="text-muted card-title fw-light ">
                  Simplesmente adicione a imagem do seu NFT, título e artista e
                  depois aperte em "Mint"
                </span>
              </div>
            </div>

            {/* Formulário */}
            <div className="row mt-5">
              <form className="text-start">
                {/* Upload Arte do Projeto */}
                <div className="row">
                  <div className="col-md-2 col-sm-1" />

                  <div className="col-md-8 col-sm-10">
                    <div className="mb-3">
                      <label htmlFor="artwork" className="form-title">
                        Arte do Projeto {artwork ? <span>✅</span> : null}
                      </label>

                      {/* Caso o upload da Arte do Projeto 
                      já tenha sido concluída, iremos renderizar 
                      um preview da imagem no card */}
                      {artwork ? (
                        <span>
                          <br />
                          <img className="image-preview" src={artwork} />
                        </span>
                      ) : null}

                      <br />
                      <span className="text-muted form-subtitle fw-light">
                        Suporta JPG, PNG e GIF. Tamanho máximo de arquivo: 10MB.
                      </span>
                      <br />

                      {/* Link do IPFS Hash gerado */}
                      {artwork ? (
                        <span className="text-muted form-url-subtitle fw-light">
                          {artwork}
                        </span>
                      ) : null}

                      {/* Input da Imagem
                      obs: ela é desativada quando o link do 
                      IPFS Hash é gerado */}
                      <input
                        required
                        className="form-control mt-1"
                        id="artwork"
                        onChange={artworkHandleChange}
                        type="file"
                        disabled={artwork ? true : false}
                      />
                    </div>
                  </div>

                  <div className="col-md-2 col-sm-1" />
                </div>

                {/* Nome do Projeto */}
                <div className="row">
                  <div className="col-md-2 col-sm-1" />

                  <div className="col-md-8  col-sm-10">
                    <div className=" mb-3">
                      <label htmlFor="release-name" className="form-title">
                        Nome do Lançamento{" "}
                        {releaseName ? <span>✅</span> : null}
                      </label>
                      <input
                        type="text"
                        required
                        onChange={(event) => setReleaseName(event.target.value)}
                        className="form-control form-control-lg"
                        id="release-name"
                        placeholder="e.g. My first Audio NFT!"
                      />
                    </div>
                  </div>

                  <div className="col-md-2 col-sm-1" />
                </div>

                {/* Nome do Artista */}
                <div className="row">
                  <div className="col-md-2 col-sm-1" />

                  <div className="col-md-8 col-sm-10">
                    <div className=" mb-3">
                      <label htmlFor="artist-name" className="form-title">
                        Nome do Artista {artist ? <span>✅</span> : null}
                      </label>
                      <input
                        type="text"
                        required
                        onChange={(event) => setArtist(event.target.value)}
                        className="form-control form-control-lg"
                        id="artist-name"
                        placeholder="e.g. My first Audio NFT!"
                      />
                    </div>
                  </div>

                  <div className="col-md-2 col-sm-1" />
                </div>

                {/* BOTÃO DE MINT */}
                <div className="row">
                  <div className="col-md-2 col-sm-1" />

                  <div className="col-md-8 col-sm-10">
                    {/* Caso todos os campos do formulário estiverem concluídos
                    (link do IPFS gerado e carteira conectada) o botão
                    será habilitado, caso contrário continua deshabilitado
                    por padrão */}
                    {isConnected && artwork && artist && releaseName ? (
                      <span onClick={onMintPressed} className="btn btn-sm">
                        Mint NFT
                      </span>
                    ) : (
                      <button className="btn btn-sm" disabled>
                        Mint (carteira MetaMask não conectada)
                      </button>
                    )}
                  </div>

                  <div className="col-md-2 col-sm-1" />
                </div>
              </form>
            </div>
          </div>
          <div className="col-1 col-md-2" />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Minter;
