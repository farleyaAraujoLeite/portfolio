
import React, {useState, useEffect} from 'react';
//imports components
import Header from './components/Header';
//import css
import './App.css'

const [certificates, setCertificates] = useState();

const App = () => {

  return(
    <>
      {/*cabecalho */}
      <Header />
      {/*corpo da aplicação */}
      <div id='main-section'>
        <div className="first-info">
          <div id='cabecalho'>
            <div id='avatar'>
              <img id='profile' src="../perfil.jpg" alt="perfil-img"/>
            </div> 
            <div id="about">
              <h3>Quem sou eu ?</h3>
              <div id='text-about'>
                  <p>Sou  <span>desenvolvedor web full-stack</span>  apaixonado por tecnologia e constantemente
                  buscado  formas de aprender e me aperfeiçoar cada dia mais.
                  Nas horas vagas gosto de ouvir música, <strong>Rock and roll </strong>
                  e curtir minha familia.
                </p>
              </div>

            </div>
        </div>
            {/*habilidades */}
            <div id='skils'>
              <p>Veja abaixo as ferramentas que tenho habilidade:</p>
              <img width={50} src="../git-brands.svg" alt="git" />              
              <img width={50} src="../react-brands.svg" alt="github" />
              <img width={50} src="../js-square-brands.svg" alt="javascript" />
              <img width={50} src="../bootstrap-fill.svg" alt="bootstrap" />
              <img width={50} src="../html5-brands.svg" alt="html" />
              <img width={50} src="../css3-alt-brands.svg" alt="css" />
            </div>
        </div>

        {/*card de imagens */}
        <h3 id='subtitles'>Cursos e qualificações</h3>
          <div className='certificates'>
            <div id="certificados">
              <img src="../take-blip.png"/>
              <img src="../html-web-developer.png"/>
              <img src="../coder.png"/>
              <img src="../node.jpg"/>
            </div>
            <div id="botoes">
              <a id='btn' href="https://www.dio.me/certificate/22A5763B/share" target="_blank"> Take Blip</a>
              <a id='btn' href="https://www.dio.me/certificate/5308CBB6/share" target="_blank"> Html web developer</a>
              <a id='btn' href="https://www.cod3r.com.br/certificates/ozzcyqo7ne" target="_blank"> Next e React</a>
              <a id='btn' href="https://cursa.com.br/certificate/99fe6562d0" target="_blank"> NodeJS</a>
            </div>
          </div>
      </div>
      {/* projetos pessoais */}
      <div className="container">
        <h1 id='titulo'>Projeto Pessoal</h1>
          <h3 id='subtitulo'>Dynamics Notepad</h3>
        <div>
          <p>Esse é um projeto simples que desenvolvi com um colega
            que consiste em uma aplicação web desenvolvida com React
            e com integração no Firebase para o cadastro de usuário e
            armazenar as notas criadas. 
          </p>
        </div>
        <div id='container-projeto' className='container'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="../tela-login.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="../tela-notas.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="../tela-cadastrar-nota.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <a id='btn-aplicacao' href="https://todo-d47c7.web.app/login" target="_blank">Link da Aplicação</a>
        </div>
      </div>
      <footer id='rodape'>
        <p>Desenvolvido por Farley Leite</p>
      </footer>
    </>

  )
}

export default App;
