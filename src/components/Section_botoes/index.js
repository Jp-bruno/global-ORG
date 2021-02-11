import styled from 'styled-components';
import imagem from './imagens/pattern.png';


const Sec = styled.section`
    margin-top: 20vh;
    min-height: 100vh;
    max-height: 100vh;
    background-image: url(${imagem});
    background-size: 50px;
    background-repeat: repeat;
`;

const Content = styled.div`
    border: none;
    min-width: 700px;
    max-width: 70%;
    min-height: 500px;
    max-height: 70vh;
    
    margin: 100px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;

    div {
        
        h3 {
            text-align: center;
        }

        p {
            text-align: justify;
        }

        button {
            padding: 15px;
            margin-top: 50px;
            border-radius: 5px;
            cursor: pointer;
            border: none;
            min-width: 150px;
            max-width: 150px;
            min-height: 50px;
            max-height: 60px;
            transition-property: transform, box-shadow;
            transition-duration: 0.3s;
        }

        padding: 15px 35px;
        margin: 0 15px;
        border-radius: 5px;
    }

    & div:nth-of-type(1) {
        background-color: rgba(199,84,145,0.9);
    }

    & div:nth-of-type(2) {
        background-color: rgba(61,152,196,0.9);
    }
`;

const Botao_voluntario = styled.button`
    box-shadow: -4px 4px rgba(61,152,196,0.9); 

    :hover {
        transform: translate(-4px, 4px);
        box-shadow: none;
    }
`;

const Botao_ONG = styled.button`
    box-shadow: 4px 4px rgba(199,84,145,0.9); 

    :hover {
        transform: translate(4px, 4px);
        box-shadow: none;
    }
`;

function Section_botoes() {
    return (
        <Sec>
            <Content>
                <div>
                    <h3>Título</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Botao_voluntario>Quero ser voluntário</Botao_voluntario>
                </div>
                <div>
                    <h3>Título</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Botao_ONG>Sou uma ONG</Botao_ONG>
                </div>
            </Content>
        </Sec>
    );
}

export default Section_botoes;