import styled from 'styled-components';
import imagem from './maos2.jpg';

const Banner = styled.div`
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: gray;
    // background-image: url(${imagem});
    // background-position: 100% 97%;
    // background-size: cover;

    div {
        position: absolute;
        left: 17%;
        top: 20%;
        font-size: 1.45rem;

        h1 {
            margin-bottom: -15px;
        }

        button {
            font-size: 1.2rem;
            padding: 14px 25px;
            background-color: #11709E;
            color: white;
            border-radius: 10px;
            transition-property: transform, box-shadow;
            transition-duration: 0.3s;
            box-shadow: -4px 4px rgba(0,0,0,0.5); 
            border: none;

            :hover {
                transform: translate(-4px, 4px);
                box-shadow: none;
            }
        }
    }
`;

const Botao = styled.button`

`;


function Banner_Component() {
    return(
        <Banner>
            <div>
                <h1>
                    Comece um <br></br> trabalho voluntário
                </h1>
                <h2>
                    Encontre formas de se engajar ativamente
                </h2>
                <Botao>Quero Engajar!</Botao>
            </div>
        </Banner>
    );
}

export default Banner_Component;