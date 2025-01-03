// src/components/Header/Header.jsx
import React, { useState } from 'react';
import './assets/styles/header.css';
import './assets/styles/content.css';
import './assets/styles/subheader.css';
import './assets/styles//footer.css';
import demoMp4 from './assets/images/teste.mp4'; 
import demoGif from './assets/images/teste.gif'; 
import sorteioMp4 from './assets/images/sorteio.mp4'; 
import sorteioGif from './assets/images/sorteio.gif'; 
import importacoesMp4 from './assets/images/importacoes.mp4'; 
import importacoesGif from './assets/images/importacoes.gif'; 
import { ReactComponent as TABLETORADORES } from './assets/images/TABLETORADORES.svg'; 
import { ReactComponent as TABLETVOTO } from './assets/images/TABLETVOTO.svg'; 
import { ReactComponent as TVLEDPAINEL } from './assets/images/TVLEDPAINEL.svg';
import { ReactComponent as TVLED1 } from './assets/images/TVLED1.svg';
import { ReactComponent as TVLED2 } from './assets/images/TVLED2.svg';
import { ReactComponent as TVLED3 } from './assets/images/TVLED3.svg';
import { ReactComponent as TVLEDEMFALA } from './assets/images/TVLEDEMFALA.svg';
import { ReactComponent as OPERADOR } from './assets/images/OPERADOR.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Logo }from './assets/images/LOGO_NERIUM.svg'; 
import { faTablet,faTv,faLaptop, faTableCells, faMobileAlt, faMobilePhone, faMobileAndroid, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import useIsMobile from './hooks/useIsMobile'; 



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';



const Home = () => {
  const isMobile = useIsMobile();

  const [activeCard, setActiveCard] = useState("painel");

  const handleCardClick = (card) => {
    setActiveCard(card === activeCard ? null : card);
  };


  const statistics = [
    {
      id: 1,
      end: 125,
      prefix: '+ de ',
      description: 'Sessões Concluídas com sucesso',
      color: '#F8D66A'
    },
    {
      id: 2,
      end: 345,
      prefix: '+ de ',
      description: 'Pautas Votadas',
      color: '#F87B6A'
    },
    {
      id: 3,
      end: 100,
      prefix: 'Melhora de ',
      suffix: '%',
      description: 'No processamento de dados',
      color: '#00D287'
    }
  ];
  

  const [ref, inView] = useInView({
    triggerOnce: true, // A contagem ocorrerá apenas uma vez
    threshold: 0.3 // A porcentagem de visibilidade necessária para acionar
  });
  return (
    <>
    <header className="header">
      <div className="logo-container">
        <Logo className="logo" preserveAspectRatio="xMidYMid meet" />
      </div>
      <nav className="nav">
        <a href="#contato" className="nav-link">Contato</a>
      </nav>
    </header>


    {/* Subheader com Imagem de Fundo e Texto Centralizado */}
    <div className="subheader">
        <div className="subheader-content">
          <h2 className="subheader-title">A Revolução em Sistemas Legislativos</h2>
          <p className="subheader-description">
          Suas Decisões, Nosso Compromisso: Votando com Confiabilidade.
          </p>
        </div>
      </div>


    <div
        style={{
          width: '75%', // Largura da linha
          height: '2px', // Espessura da linha
          background: 'linear-gradient(to right, transparent 0%, #D9D9D9 0%, transparent 50%),linear-gradient(to left, transparent 0%, #D9D9D9 0%, transparent 50%)', // Gradiente definido
          backgroundColor:'#271f09',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Sombreamento suave
          borderRadius: '1px', // Bordas arredondadas
          margin: '20px auto', // Espaçamento e centralização
        }}
      />



      {/* Seção de Introdução do Sistema */}
            <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15px 20px', // Espaçamento interno (topo/fundo e lados)
          margin: '40px auto', // Espaçamento externo e centralização
          maxWidth: '800px', // Limita a largura máxima para melhor legibilidade
          textAlign: 'center', // Centraliza o texto
        }}
      >
        <h2
          style={{
            fontFamily: 'Montserrat, sans-serif', // Fonte Montserrat para o título
            fontSize: '2em',
            marginBottom: '20px',
            color: '#333', // Cor do título
          }}
        >
          A Revolução em Sistemas de Votação
        </h2>
        <p
          style={{
            fontFamily: 'Roboto, Arial, sans-serif', // Fonte Roboto ou Arial para o texto
            fontSize: '1em',
            lineHeight: '1.6',
            color: '#555', // Cor do texto
          }}
        >
           As principais casas legislativas que adotam o SisLegis beneficiam-se de uma solução completa que confere agilidade, segurança e eficiência aos trabalhos legislativos. Com um compromisso contínuo com a inovação e a satisfação do usuário, o SisLegis está preparado para se tornar a referência em sistemas de votação no Brasil, atendendo às necessidades modernas das Assembleias, Câmaras e Senado Federal com excelência e confiabilidade.
        </p>
      </div>

      <div
        style={{
          width: '75%', // Largura da linha
          height: '2px', // Espessura da linha
          background: 'linear-gradient(to right, transparent 0%, #D9D9D9 0%, transparent 50%),linear-gradient(to left, transparent 0%, #D9D9D9 0%, transparent 50%)', // Gradiente definido
          backgroundColor:'#271f09',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Sombreamento suave
          borderRadius: '1px', // Bordas arredondadas
          margin: '20px auto', // Espaçamento e centralização
        }}
      />



      <div className="content">
                <div className="content-left">
                  <h1 className="content-title">SISLEGIS</h1>
                  <p className="content-subtitle">Sistema de Votação Eletrônico</p>
                </div>
                <div className="content-right">
                {isMobile ? (
                      <img 
                        src={demoGif} 
                        alt="Demonstração do Sistema de Votação" 
                        className="content-gif" 
                      />
                    ) : (
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        preload="auto"
                        className="content-gif" 
                        aria-label="Demonstração do Sistema de Votação"
                      >
                        <source src={demoMp4} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    )}
                </div>

        </div>


        <div className="content-cards">

        <div className='icones-home'>

          <div
            className={`icon ${activeCard === 'votacoes' ? 'active' : ''}`}
            onClick={() => handleCardClick('votacoes')}
          >
            <FontAwesomeIcon icon={faMobileAlt} />
            <h2>Votações</h2>
            {!isMobile && (
              <>
                      <p className="icon-description">
                        Participe das decisões importantes com facilidade e segurança.
                      </p>
                      <span className="saiba-mais">Saiba mais </span>

                      </>
                    )}
            
          </div>

          <div
            className={`icon ${activeCard === 'painel' ? 'active' : ''}`}
            onClick={() => handleCardClick('painel')}
          >
            <FontAwesomeIcon icon={faTv} />
            <h2>Painel Multimidia</h2>
            {!isMobile && (
              <>
                      <p className="icon-description">
                        Acesse conteúdos multimídia atualizados em tempo real.
                      </p>
                      <span className="saiba-mais">Saiba mais</span>

                      </>
                    )}
            
          </div>

          <div
            className={`icon ${activeCard === 'operador' ? 'active' : ''}`}
            onClick={() => handleCardClick('operador')}
          >
            <FontAwesomeIcon icon={faLaptop} />
            <h2>Operador</h2>
            {!isMobile && (
                <>
                  <p className="icon-description">
                    Gerencie suas operações de forma eficiente e intuitiva.
                  </p>
                  <span className="saiba-mais">Saiba mais</span>
                </>
              )}

          </div>

        </div>

        {/* Frame que muda de acordo com o card ativo */}
        <div className="active-frame">
          {activeCard === 'votacoes' && (
            <div className="frame-content">
              <div className="frame-text">
              <h3 className="frame-title">Detalhes sobre Votações</h3>
              <p className="frame-description">
                Com um layout intuitivo e inovador, a tela de votações agora oferece mais praticidades para a tomada de decisões dos parlamentares.<br />

                Tenha acesso a todas as informações das pautas do dia durante toda a reunião, como documentos de referência, autores e ementa.<br />

                Já a parte de oradores, por sua vez, traz ainda a funcionalidade de sorteio digital, na qual cada parlamentar tem acesso em tempo real à sua ordem e tempo de fala. Além disso, é possível solicitar a troca de ordem com outros parlamentares ou até mesmo a junção na ordem de fala.<br />
              </p>
              </div>
              <div className="frame-images">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >

                  <SwiperSlide>
                  <TABLETVOTO className="frame-images-image" preserveAspectRatio="xMidYMid meet" />
                  </SwiperSlide>
                  <SwiperSlide>
                  {isMobile ? (
                              <img 
                                src={sorteioGif} 
                                alt="Demonstração do Sistema de Votação" 
                                className="content-video" 
                              />
                            ) : (
                              <video 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                preload="auto"
                                className="content-video" 
                                aria-label="Demonstração do Sistema de Votação"
                              >
                                <source src={sorteioMp4} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                              </video>
                            )}
                  </SwiperSlide>
                  <SwiperSlide>
                  <TABLETORADORES className="frame-images-image" preserveAspectRatio="xMidYMid meet" />
                  </SwiperSlide>
                  {/* Adicione mais SwiperSlide conforme necessário */}
                </Swiper>
              </div>
            </div>
          )}
          {activeCard === 'painel' && (
            <div className="frame-content">
              <div className="frame-text">
                <h3 className="frame-title" >Detalhes sobre Painel Multimidia</h3>
                <p className="frame-description">
                Tenha acesso ao painel mais completo e com melhor taxa de resposta do mercado! Além de seu design moderno, ele oferece dinamismo em tempo real em sua ordem de exibição.<br />
                Ao acompanhar o sorteio de ordem, o painel se autoajusta às novas posições determinadas, permitindo também novas trocas.<br />
                Conta ainda com um destaque na tela para o parlamentar que está falando no momento, exibindo sua foto, nome, partido e o tempo de fala em andamento.
              </p>

              </div>
              <div className="frame-images">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                  <SwiperSlide>
                  <TVLEDPAINEL className="frame-images-image" preserveAspectRatio="xMidYMid meet" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <TVLED1 className="frame-images-image" preserveAspectRatio="xMidYMid meet" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <TVLED2 className="frame-images-image" preserveAspectRatio="xMidYMid meet" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <TVLED3 className="frame-images-image" preserveAspectRatio="xMidYMid meet" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <TVLEDEMFALA className="frame-images-image" preserveAspectRatio="xMidYMid meet" />
                  </SwiperSlide>
                  {/* Adicione mais SwiperSlide conforme necessário */}
                </Swiper>
              </div>
            </div>
          )}
          {activeCard === 'operador' && (
            <div className="frame-content">
              <div className="frame-text">
                <h3 className="frame-title">Detalhes sobre Operador</h3>
                <p className="frame-description">
                  Tenha total controle a todos dispositivos conectados ao sistema o acesso do operador permite a melhor coordenação de reunião possível! <br />

                  Com a integração ao Sistema de Apoio ao Processo Legislativo (SAPL) agora ficou fácil importar as pautas do dia, evitando a criação manual de uma a uma.<br />

                  Acompanhe também todas os registros de votos e presenças, além de controles ao Painel, exibição da Tela dos Parlamentares e Cronometros.<br />




                </p>
              </div>
              <div className="frame-images">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                  <SwiperSlide>
                  <OPERADOR className="frame-images-image" style={{marginTop:'5%'}} preserveAspectRatio="xMidYMid meet" />
                  </SwiperSlide>

                  <SwiperSlide>
                  {isMobile ? (
                              <img 
                                src={importacoesGif} 
                                alt="Demonstração do Sistema de Votação" 
                                className="content-video" 
                              />
                            ) : (
                              <video 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                preload="auto"
                                className="content-video" 
                                aria-label="Demonstração do Sistema de Votação"
                              >
                                <source src={importacoesMp4} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                              </video>
                            )}
                  </SwiperSlide>

                  {/* Adicione mais SwiperSlide conforme necessário */}
                </Swiper>
              </div>
            </div>
          )}
        </div>

        </div>


        <section className="statistics-section" ref={ref}>
              <div className="statistics-container">
                {statistics.map(stat => (
                  <div key={stat.id} className="statistic-item">
                    <div className="statistic-number" style={{ color: stat.color }}>
                      {inView ? (
                        <CountUp 
                          start={0} 
                          end={stat.end} 
                          duration={2.5} 
                          prefix={stat.prefix || ''} 
                          suffix={stat.suffix || ''} 
                        />
                      ) : (
                        `${stat.prefix || ''}0${stat.suffix || ''}`
                      )}
                    </div>
                    <div className="statistic-description">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>


        <footer className="footer">
          <div className="footer-section about">
            <h3>Sobre Nós</h3>
            <p>
              O SisLegis é uma solução inovadora para sistemas legislativos, proporcionando eficiência e confiabilidade nas votações eletrônicas.
            </p>
          </div>
          <div className="footer-section services">
            <h3>Serviços</h3>
            <ul>
              <li>Votações Eletrônicas</li>
              <li>Painel Multimídia</li>
              <li>Gerenciamento de Operações</li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato:</h3>
            Email: <a style={{color:'#fff'}} href="mailto:contato@sislegis.com.br">contato@sislegis.com.br</a>

          </div>
        </footer>






    </>
  );
};





export default Home;
