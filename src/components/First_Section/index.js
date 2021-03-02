  
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import styled from "styled-components";
import { banner_image, vagas, ongs, habilidades, causas } from "./imagens";


const ListaDeInteresses = [
  { image: vagas, link: "Vagas" },
  { image: ongs, link: "ONGs" },
  { image: habilidades, link: "Habilidades" },
  { image: causas, link: "Causas" },
];

const ConsultarListaDeInteresses = () => {
  let values = ListaDeInteresses.map(({ image, link }, i) => {
    i++
    return (
      <li key={i}>
        <img src={image} /> <a href={"#"+link}> {link} </a>
      </li>
    )
  });

  return (
    <>
      <ul> {values} </ul>
    </>
  );
};

const Interesse = () => {
  return <ConsultarListaDeInteresses />;
};

const BuscarPorCategoriaDeInteresse = () => {
  return (
    <Categoria>
      <h2>Busque por categoria de interesse</h2>
      <Interesse />
    </Categoria>
  );
};

const First = styled.section`
  position: relative;
  background-color: #3d98c4;
  min-height: 1000px;
`;

const Texto = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  color: white;

  @media(min-width: 1400px) {
    top: 15%;
    left: 17%;
  }

  h1 {
    margin: 10px 0;
    font-size: 54px;
    font-weight: 900;
    line-height: 67px;
  }

  h2 {
    margin: 10px 0;
    font-size: 24px;
    font-weight: 400;
  }

  p {
    font-size: 21px;
  }
`;

const Acessar = styled.button`
  position: relative;
  left: -3px;
  background-color: #c75491;
  border-radius: 8px;
  border: none;
  margin: 0;
  height: 48px;
  width: 160px;
  cursor: pointer;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
  transition-property: box-shadow, transform;
  transition-duration: 0.3s;
  display: grid;
  place-items: center;

  :hover {
    transform: translate(5px, 5px);
    box-shadow: none;
  }

  p {
    margin: 0;
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: white;
  }
`;


const Img = styled.div`
  width: 521px;
  height: 521px;
  background-image: url(${banner_image});
  background-size: contain;
  position: relative;
  left: 55%;
  top: 10vh;
`;

const Categoria = styled.div`
  position: relative;
  bottom: -70px;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translateX(-52.5%);
  color: white;

  h2 {
    font-family: "Merriweather Sans", sans-serif;
    margin: 0 -80px 37px 0;
  }

  ul {
    list-style-type: none;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: end;
    width: 100%;

    li {
      overflow: hidden;
      width: 255px;
      height: 255px;
      margin: 0 15px;
      background-color: white;
      border-radius: 16px;
      display: grid;
      grid-template-rows: 70% 30%;
      background-color: #f0f5f7;
      cursor: pointer;
      img {
        margin: 15px auto;
      }

      a {
        place-self: center;
        text-decoration: none;
        color: #11709e;
        font-size: 20px;
        font-weight: 900;
      }
    }
  }
`;

const First_Section = () => {
  return (
    <First>
      <Texto>
        <h1>Comece um <br /> trabalho voluntário</h1>
        <h2>Encontre formas de se engajar ativamente!</h2>
        <p>
          A plataforma da Global.org existe para <br /> conectar organizações sem fins
          lucrativos e <br /> pessoas que desejam apoiar suas causas.
        </p>
        <Acessar>
          <p>Quero Engajar!</p>
        </Acessar>
      </Texto>
      <Img />
      <BuscarPorCategoriaDeInteresse />
    </First>
  );
};

export default First_Section;