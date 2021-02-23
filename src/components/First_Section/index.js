import styled from 'styled-components';
import banner_image from './imagens/banner_image.png';
import causas from './imagens/Friends.png';
import vagas from './imagens/Searching.png';
import ongs from './imagens/Service.png';
import habilidades from './imagens/Writing.png';

const First = styled.section`
    box-sizing: border-box;
    background-color: #3D98C4;
    min-height: 1000px;
    max-height: 1000px;
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

const Botao = styled.button`
    background-color: #C75491;
    border-radius: 8px;
    border: none;
    height: 48px;
    width: 160px;
    cursor: pointer;
    box-shadow: 5px 5px rgba(0,0,0,0.6);
    transition-property: box-shadow, transform;
    transition-duration: 0.3s;

    :hover {
        transform: translate(5px, 5px);
        box-shadow: none;
    }

    p {
        font-family: 'Merriweather Sans', sans-serif;
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
        font-family: 'Merriweather Sans', sans-serif;
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
            background-color:white;
            border-radius: 16px;
            display: grid;
            grid-template-rows: 70% 30%;
            background-color: #F0F5F7;
            cursor: pointer;

            img {
                margin: 15px auto;
            }
            
            a {
                place-self: center;
                text-decoration: none;
                color: #11709E;
                font-size: 20px;
                font-weight: 900;
            }
        }
    }
`;

function First_Section() {
    return(
        <First>
            <Texto>
                <h1>Comece um trabalho voluntário</h1>
                <h2>Encontre formas de se engajar ativamente!</h2>
                <p>A plataforma da Global.org existe para conectar organizações sem fins lucrativos e pessoas que desejam apoiar suas causas.</p>
                <Botao><p>Quero Engajar!</p></Botao>
            </Texto>

            <Img />

            <Categoria>
                <h2>BUSQUE POR CATEGORIA DE INTERESSE</h2>
                <ul>
                    <li>
                        <img src={vagas} alt='nao'></img>
                        <a href="#">Vagas</a>
                    </li>

                    <li>
                        <img src={ongs} alt='nao'></img>
                        <a href="#">ONGS</a>
                    </li>

                    <li>
                        <img src={causas} alt='nao'></img>
                        <a href="#">Causas</a>
                    </li>

                    <li>
                        <img src={habilidades} alt='nao'></img>
                        <a href="#">Habilidades</a>
                    </li>
                </ul>
            </Categoria>
        </First>
    );
}

export default First_Section;