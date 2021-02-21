/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import styled from "styled-components";
import { banner_image, vagas, ongs, habilidades, causas } from "./Images";


const ListaDeInteresses = [
  { image: vagas, link: "Vagas" },
  { image: ongs, link: "ONGs" },
  { image: habilidades, link: "Habilidades" },
  { image: causas, link: "Causas" },
];

const ConsultarListaDeInteresses = () => {
  let values = ListaDeInteresses.map(({ image, link }) => (
    <li>
      <img src={image} /> <a href={"#" + link}> {link} </a>
    </li>
  ));
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
  box-sizing: border-box;
  background-color: #3d98c4;
  min-height: 125vh;
`;

const Texto = styled.div`
  position: absolute;
  top: 13%;
  left: 10%;
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  color: white;

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
  background-color: #c75491;
  border-radius: 8px;
  border: none;
  height: 48px;
  width: 160px;
  cursor: pointer;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
  transition-property: box-shadow, transform;
  transition-duration: 0.3s;

  :hover {
    transform: translate(5px, 5px);
    box-shadow: none;
  }

  p {
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: white;
  }
`;


const Img = styled.div`
  width: 421px;
  height: 421px;
  background-image: url(${banner_image});
  background-size: contain;
  position: relative;
  left: 55%;
  top: 10vh;
`;

const Categoria = styled.div`
  position: relative;
  bottom: -150px;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translateX(-50%);
  color: white;

  h2 {
    font-family: "Merriweather Sans", sans-serif;
    margin-bottom: 37px;
  }

  ul {
    list-style-type: none;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: end;

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
        <h1>Comece um trabalho voluntário</h1>
        <h2>Encontre formas de se engajar ativamente!</h2>
        <p>
          A plataforma da Global.org existe para conectar organizações sem fins
          lucrativos e pessoas que desejam apoiar suas causas.
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
