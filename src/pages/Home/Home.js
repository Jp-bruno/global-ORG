import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { yt, linkdn, insta, wpp, tt, fb, logo, friends, searching, service, writing, banner_image, Feminismo, Educacao, Meio_Ambiente, PCDs, arrow, arrow_down, mundo } from './Home_imagens';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 } from './Home_imagens';
import SearchBar from '../../components/SearchBar/SearchBar';
import Select from '../../components/Select/Select';
import Card from '../../components/Card/Card';
import Botao from '../../components/BotaoVerVagas/Botao';

const Estilos = {
  cores: {
    azulClaro: "#3D98C4",
    rosaClaro: "#C75491",
    rosa: "#C73583",
    azul: "#1F8EC4",
    azulEscuro: "#11709E",
    brancoAzul: "#F0F5F7",
    pretoLeve: "#393E40"
  },
  fontes: {
    serif: "'Merriweather', serif",
    sans: "'Merriweather Sans', sans-serif"
  }
};

const SocialMedia = styled.div`
  background-color: ${Estilos.cores.azulEscuro};
  display: flex;
  justify-content: flex-end;
  justify-items: space-between;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0 1% 0 0;

    li {
      display: flex;
      align-content: center;
      margin: 0 10px;
      padding: 5px 0;
    }
  }
`;


const Primeira = styled.section`
  background-color: ${Estilos.cores.azulClaro};
  height: auto;
  width: auto;
  color: white;
  padding: 5% 12% 2% 12%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  img:first-of-type {
    width: 40vw;
    position: absolute;
    right: 0;
    top: 50px;

    @media(max-width: 1200px) {
      display: none;
    }
  }

  @media(max-width: 939px) {
    padding: 5% 1%;
    text-align: center;
  }

  @media(max-width: 500px) {
    display: flex;
    padding: 0;
  }

  h2 {
    display: block;
    margin: 60px auto;
    text-align: center;
    flex-grow: 4;
    width: 100%;
    font: bold 24px ${Estilos.fontes.sans};
  }
`;

const Texto = styled.div`
  color: ${Estilos.cores.brancoAzul};
  height: auto !important;
  width: 40vw;
  display: inline;

  @media(max-width: 1200px) {
    width: 90vw;
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-family: ${Estilos.fontes.serif};
    font-size: 54px;
    font-weight: 400;

    @media(max-width: 939px) {
      font-size: 64px;
    }
  }

  p {
    font-size: 21px;
    font-weight: 200;
    margin: 20px 0;

    @media(max-width: 939px) {
      font-size: 30px;
    }
  }

  button {
    background-color: ${Estilos.cores.rosaClaro};
    padding: 10px 25px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    border: none;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.2);
    transition: transform 300ms;

    @media(max-width: 1260px) {
      width: 90%;
      margin: 20px 0 0 0;
    }

    :hover {
      transform: translate(5px, 5px);
    }
  }
`;

const Categorias = styled.div`
  display: block;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media(max-width: 1050px) {
      justify-content: center;
      width: 90%;
      margin: 0 auto;
    }
  }

    li {
      background-color: ${Estilos.cores.brancoAzul};
      display: grid;
      grid-template-rows: 80% 20%;
      place-items: center;
      height: 220px;
      width: 234px;
      border-radius: 16px;
      box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.2);
      
      @media(max-width: 1050px) {
        margin: 10px;
      }

      @media(max-width: 500px) {
        width: 180px;
      }

      img {
        width: 150px !important;
        position: static !important;
        display: block !important;

        @media(max-width: 900px) {
          display: block !important;
        }
      }

      a {
        place-self: start center;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        color: ${Estilos.cores.azulEscuro};
      }
    }
  }
  
`;

const Segunda = styled.section`
  background: ${Estilos.cores.brancoAzul};
  padding: 5% 12% 0% 12%;
  color: white;

  @media(max-width: 939px) {
    padding: 8% 1%;
  }

  h1 {
    color: ${Estilos.cores.azulEscuro};
    font-weight: 700;
    font-size: 24px;
    margin: -15px 0 35px 0;
  }

  h1 + p {
    font-weight: 600;
    font-size: 18px;
    margin: 20px 0;
    color: rgba(57, 62, 64, 1);
  }

  h1, h1 + p {
    font-family: ${Estilos.fontes.sans};
    
    @media(max-width: 1275px) {
      text-align: center;
    }
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width: 1275px) {
    justify-content: space-evenly;
  }
`;

const Terceira = styled.section`
  padding: 2% 12%;
  background: ${Estilos.cores.azulClaro};
  color: ${Estilos.cores.brancoAzul};

  @media(max-width: 939px) {
    padding: 8% 1.5%;
    text-align: center;
  }

  h1 {
    @media(max-width: 939px) {
      font-size: 30px;
    }
  }

  h1 + p, h1  {
    font-family: ${Estilos.fontes.sans};
  }

  h1 + p {
    margin: 25px 0 25px 0;
    font-weight: 500;

    @media(max-width: 939px) {
      font-size: 24px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    
    @media(max-width: 1050px) {
      justify-content: center;
      width: 90%;
      margin: 0 auto;
    }

    li {
      background-color: ${Estilos.cores.rosa};
      display: grid;
      grid-template-rows: 80% 20%;
      place-items: center;
      height: 220px;
      width: 234px;
      border-radius: 16px;
      box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.2);

      @media(max-width: 1050px) {
        margin: 15px
      }

      @media(max-width: 500px) {
        width: 180px;
      }

      img {
        width: 150px !important;
        position: static !important;
        display: block !important;

        @media(max-width: 900px) {
          display: block !important;
      }
    }

    a {
      place-self: start center;
      text-decoration: none;
      font-weight: bold;
      font-size: 20px;
      color: ${Estilos.cores.brancoAzul};
    }
  }


  }

  div:last-of-type {
    p {
      display: block;
      margin: 25px 0 15px;
      width: 100%;
      flex-grow: 1;
    }

    div {
      box-sizing: border-box;
      background: #C73583;
      border-radius: 26px;
      padding: 5px 10px;
      margin-right: 45px;
      position: relative;

      @media(max-width: 900px) {
        margin: 0 0 10px 0;
      }

      button:first-of-type {
        height: auto;
        border-radius: 26px;
        margin-right: 45px;
        position: relative;
        background: #C73583;
        transform: scale(0.8);
        border: none;
        z-index: 99;
      }

      button:nth-of-type(2) {
        position: relative;
        left: -10px;
        border-radius: 26px;
        margin: 0;
        background: #C73583;
        border: none;
      }

      div {
        background: white;
        width: 100%;
        border-radius: 0;
      }
    }
  }
`;

const Quarta = styled(Segunda)`

`;

const Quinta = styled.section`
  padding: 5% 12%;
  display: flex;
  color: ${Estilos.cores.brancoAzul};
  background: ${Estilos.cores.azulClaro};
  
  @media(max-width: 1250px) {
    padding: 25px 50px;
  }

  img {
    @media(max-width: 1250px) {
      display: none;
    }
  }

  h1, p {
    margin: 0 0 20px 0;
  }

  h1 {
    font-size: 54px;
    font-weight: 400;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }

  button {
    padding: 10px 45px 10px 20px;
    margin: 45px 0;
    font-size: 19px;
    font-weight: 500;
    background-color: #C75491;
    border-radius: 6px;
    outline: none;
    border: none;
    place-items: center;
    color: white;
    box-shadow: 0px 8px 14px rgba(0,0,0,0.3);
    cursor: pointer;

    :after {
        content: "";
        background-image: url(${arrow});
        background-size: contain;
        background-position: center;
        margin-left: 10px;
        min-width: 30px;
        min-height: 40px;
        transform: translate(-20%, -20%);
        position: absolute;
    }
  }
`;

const Footer = styled.footer`
  padding: 3% 12%;
  font-family: ${Estilos.fontes.serif};
  color: #393E40;
  background: ${Estilos.cores.brancoAzul};

  @media(max-width: 1250px) {
    padding: 25px 50px;
  }
  
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    
    @media(max-width: 900px) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
    }
    
    li {
      width: 25%;
      padding: 0 35px 50px 0;

      @media(max-width: 900px) {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0;
      }

      p {
        @media(max-width: 900px) {
          text-align: center;
        }
      }
  
      a {
        text-decoration: none;
        color: ${Estilos.cores.pretoLeve};
        display: flex;
        flex-direction: row;
        margin: 0 0 15px 0;
      }

      button, input {
        width: 80%;
      }

      form {
        @media(max-width: 900px) {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        input {
          padding: 5px;
          margin: 10px 0;
          border-radius: 4px;
          border: solid 1px ${Estilos.cores.pretoLeve};
          background: rgba(0,0,0,0);

          @media(max-width: 900px) {
            width: 100%;
          }
        }
      }

      

      img {
        width: 25px;
        height: 25px;
        margin: 0 10px 0 0;

        @media(max-height: 500px) {
          width: 15%;
          height: 15%;
        }
      }
    
      h1 {
        font-weight: bold;
        font-size: 24px;
        margin: 0 0 25px 0;
        display: flex;
      }
    
      p {
        line-height: 140%;
      }

      button {
        padding: 7px 35px;
        margin: 10px 0;
        font-size: 19px;
        font-weight: 400;
        background-color: #C75491;
        border-radius: 6px;
        border: none;
        color: white;
        box-shadow: 0px 8px 14px rgba(0,0,0,0.3);
        cursor: pointer;
      }
    }
  }

  div:last-of-type {
    display: flex;
    margin: 40px 0 0 0;
    justify-content: space-between;
    font-family: ${Estilos.fontes.sans};
    color: ${Estilos.cores.pretoLeve};

    @media(max-width: 600px) {
      flex-direction: column;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: ${Estilos.cores.pretoLeve};
    }
  }



`;

const dados_redes = [yt, linkdn, insta, wpp, tt, fb];

const dados_categorias = [
  {
    link: "",
    img: searching,
    legenda: "Vagas"
  },
  {
    link: "",
    img: service,
    legenda: "ONGs"
  },
  {
    link: "",
    img: friends,
    legenda: "Causas"
  },
  {
    link: "",
    img: writing,
    legenda: "Habilidades"
  }
];

const dados_cards = [
  {
    titulo: 'Psicologo Voluntário',
    ong: 'ONG ESTRELA MILINHA',
    local: 'Santos - SP',
    texto: 'Buscamos psicólogos(as) voluntários(as) para atingir o desenvolvimento afetivo e emocional dos nossos atendidos, moradores da Vila Aliança.',
    candidatos: '0/4',
    src: img1
  },
  {
    titulo: 'Designer Gráfico',
    ong: 'ONG AVRA',
    local: 'Rio de Janeiro - RJ',
    texto: 'Você possui habilidades para utilizar os softwares de criação de imagem e manja de redes sociais? Faça parte da nossa equipe, se inscreva na vaga!',
    candidatos: '1/4',
    src: img2

  },
  {
    titulo: 'Designer de UI',
    ong: 'ONG Favela Inc',
    local: 'Manaus - AM',
    texto: 'Estamos desenvolvendo uma plataforma que conecta moradores de favelas a campanhas como doações, capacitações e oportunidades de trabalho.',
    candidatos: '2/6',
    src: img3
  },
  {
    titulo: 'Analista de Mídias Sociais',
    ong: 'ONG AVRA',
    local: 'Brasil',
    texto: 'É antenado(as) nos assuntos que rolam nas redes sociais? Então venha nos apoiar a cuidar dessas belezuras: as redes sociais da AVRA!',
    candidatos: '1/2',
    src: img4
  },
  {
    titulo: 'Ajude os animais',
    ong: 'Animal Equality',
    local: 'Maceió - AL',
    texto: 'Procuramos voluntários que queiram acabar com as práticas cruéis que acontecem com os animais na indústria de alimentícia por meio de ações on-line',
    candidatos: '2/8',
    src: img5
  },
  {
    titulo: 'Médico voluntário',
    ong: 'IAIDAM',
    local: 'Manaus - AM',
    texto: 'Precisamos de voluntários(as) médicos para trabalhar conosco pelo menos 1 vez por semana por 4 horas. Será incrível ter você conosco!',
    candidatos: '2/3',
    src: img6
  }
];

const dados_categorias_2 = [
  {
    link: "",
    img: Feminismo,
    legenda: "Feminismo"
  },
  {
    link: "",
    img: Meio_Ambiente,
    legenda: "Meio Ambiente"
  },
  {
    link: "",
    img: Educacao,
    legenda: "Educação"
  },
  {
    link: "",
    img: PCDs,
    legenda: "PCDs"
  }
];

const dados_cards2 = [
  {
    titulo: 'Psicologo Voluntário',
    ong: 'ONG ESTRELA MILINHA',
    local: 'Santos - SP',
    texto: 'Buscamos psicólogos(as) voluntários(as) para atingir o desenvolvimento afetivo e emocional dos nossos atendidos, moradores da Vila Aliança.',
    candidatos: '0/4',
    src: img7
  },
  {
    titulo: 'Designer Gráfico',
    ong: 'ONG AVRA',
    local: 'Rio de Janeiro - RJ',
    texto: 'Você possui habilidades para utilizar os softwares de criação de imagem e manja de redes sociais? Faça parte da nossa equipe, se inscreva na vaga!',
    candidatos: '1/4',
    src: img8

  },
  {
    titulo: 'Designer de UI',
    ong: 'ONG Favela Inc',
    local: 'Manaus - AM',
    texto: 'Estamos desenvolvendo uma plataforma que conecta moradores de favelas a campanhas como doações, capacitações e oportunidades de trabalho.',
    candidatos: '2/6',
    src: img9
  },
  {
    titulo: 'Analista de Mídias Sociais',
    ong: 'ONG AVRA',
    local: 'Brasil',
    texto: 'É antenado(as) nos assuntos que rolam nas redes sociais? Então venha nos apoiar a cuidar dessas belezuras: as redes sociais da AVRA!',
    candidatos: '1/2',
    src: img10
  },
  {
    titulo: 'Ajude os animais',
    ong: 'Animal Equality',
    local: 'Maceió - AL',
    texto: 'Procuramos voluntários que queiram acabar com as práticas cruéis que acontecem com os animais na indústria de alimentícia por meio de ações on-line',
    candidatos: '2/8',
    src: img11
  },
  {
    titulo: 'Médico voluntário',
    ong: 'IAIDAM',
    local: 'Manaus - AM',
    texto: 'Precisamos de voluntários(as) médicos para trabalhar conosco pelo menos 1 vez por semana por 4 horas. Será incrível ter você conosco!',
    candidatos: '2/3',
    src: img12
  }
];

function GerarRedesSociais(props) {
  let dados = props.arr.map(item => {
    return (
      <>
        <li><a href="#"><img src={item} alt=""></img></a></li>
      </>
    );
  })

  return (
    <ul>
      {dados}
    </ul>
  );
}

function GerarCategorias(props) {
  let dados = props.arr.map(({ link, img, legenda }) => {
    return (
      <>
        <li>
          <img src={img} alt=""></img>
          <Link to={link}>{legenda}</Link>
        </li>
      </>
    );
  });

  return (
    <ul>
      {dados}
    </ul>
  );
}

function GerarCards(props) {
  let dados = props.arr.map(({ titulo, texto, ong, local, candidatos, src }) => {
    return (
      <>
        <Card titulo={titulo} texto={texto} ong={ong} local={local} candidatos={candidatos} src={src} />
      </>
    );
  });

  return (
    <CardsWrapper>
      {dados}
    </CardsWrapper>
  );
}

function Home() {
  return (
    <div className="App">
      <header>
        <SocialMedia>
          <GerarRedesSociais arr={dados_redes} />
        </SocialMedia>

        <SearchBar></SearchBar>
      </header>

      <main>
        <Primeira>
         
          <Texto>
            <h1>Comece um trabalho voluntário</h1>
            <p>Encontre formas de se engajar ativamente!</p>
            <p>A plataforma da Global.org existe para conectar organizações sem fins lucrativos e pessoas que desejam apoiar suas causas.</p>
            <button>Quero Engajar!</button>
          </Texto>

          <img src={banner_image} alt=""></img>
       

          <h2>BUSQUE POR CATEGORIA DE INTERESSE</h2>

          <Categorias>
            <GerarCategorias arr={dados_categorias} />
          </Categorias>
        </Primeira>

        <Segunda>
          <div>
            <h1>VAGAS MAIS RECENTES</h1>
            <p>Tem um montão de vagas novas esperando por você!</p>
          </div>

          <div>
            <GerarCards arr={dados_cards} />
            <Botao></Botao>
          </div>
        </Segunda>

        <Terceira>
          <div>
            <h1>FILTRE POR VAGAS, ONGS E CAUSAS QUE MAIS COMBINAM COM VOCÊ!</h1>
            <p>Confira as categorias mais acessadas abaixo</p>
            <GerarCategorias arr={dados_categorias_2} />
          </div>

          <div>
            <p>Ou descubra outras causas e habilidades para se engajar:</p>
            <Select />
          </div>
        </Terceira>

        <Quarta>
          <div>
            <h1>VAGAS DE VOLUNTÁRIOS EM DESTAQUE</h1>
            <p>Dê uma olhada em nossas vagas em destaque!!</p>
          </div>

          <div>
            <GerarCards arr={dados_cards2} />
            <Botao></Botao>
          </div>
        </Quarta>

        <Quinta>
          <div>
            <h1>Global ORG para empresas</h1>
            <p>Estratégia e implementação de voluntariado empresarial e responsabilidade social. Essas sã nossas paixões e especialidades.</p>
            <button>Conheça nossas plataformas</button>
          </div>

          <img src={mundo} alt=""></img>

        </Quinta>
      </main>

      <Footer>
        <ul>
          <li>
            <h1><img src={logo}></img>Global ORG</h1>
            <p>
              Plataforma de soluções para conectar ONGs e Projetos Sociais com Empresas, Voluntários e Pessoas que precisam de ajuda pelo mundo.
              </p>
            {/* <Social_media /> */}
          </li>

          <li>
            <h1>Contato</h1>
            <Link>Chat Online</Link>
            <Link>Contato@ongcpb.org</Link>
            <Link>WhatsApp +55 11 95849-4693</Link>
          </li>

          <li>
            <h1>Navegação</h1>
            <Link>Nossas Plataformas</Link>
            <Link>Quem somos</Link>
            <Link>Cadastro</Link>
            <Link>Sou uma ONG</Link>
            <Link>FAQ</Link>
            <Link>Ajuda</Link>
            <Link>Quero ser voluntário</Link>
            <Link>Para empresas</Link>
          </li>

          <li>
            <h1>Newsletter</h1>
            <p>Fique por dentro das vagas e ONGS que você poderá participar futuramente!</p>
            <form>
              <input placeholder='Nome' required></input>
              <input placeholder='E-mail' required></input>
              <input placeholder='Cidade' required></input>
              <button type='submit'>Inscrever-se</button>
            </form>
          </li>
        </ul>

        <hr />

        <div>
          <span>© 2021 Global ORG | Todos os direitos reservados</span>
          <span><Link>Política de Privacidade</Link> | <Link>Termos de serviço</Link></span>
        </div>
      </Footer>
    </div>
  );
}

export default Home;
