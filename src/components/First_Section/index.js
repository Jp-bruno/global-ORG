import styled from 'styled-components';

const First = styled.section`
    box-sizing: border-box;
    background-color: #3D98C4;
    min-height: 200vh;
    
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

    p {
        font-family: 'Merriweather', serif;
        font-weight: 600;
        font-size: 16px;
        color: white;
    }
`;

const Img = styled.img`

`;

const Categoria = styled.div`
    position: absolute;
    bottom: -150px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    color: white;

    ul {
        margin-top: 40px;
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;

        li {
            width: 255px;
            height: 255px;
            margin: 0 15px;
            background-color:white;
            border-radius: 16px;

            a {
                text-decoration: none;
                color: #11709E;
                font-size: 20px;
                font-weight: 900;
                position: relative;
                top: 200px;
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
                        <img></img>
                        <a href="#">Vagas</a>
                    </li>

                    <li>
                        <img></img>
                        <a href="#">ONGS</a>
                    </li>

                    <li>
                        <img></img>
                        <a href="#">Causas</a>
                    </li>

                    <li>
                        <img></img>
                        <a href="#">Habilidades</a>
                    </li>
                </ul>
            </Categoria>
        </First>
    );
}

export default First_Section;