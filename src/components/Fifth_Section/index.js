import styled from 'styled-components';
import Mundo from './imagens/mundo.png';
import Seta from '../Botao_mais_vagas/arrow.png'

const Quinta = styled.section`
    min-height: 497px;
    width: 100vw;
    background-color: #3D98C4;

    @media(min-width: 1400px) {
        height: 540px;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1140px;
    margin: 80px 136px;
    color: #F0F5F7;
    
    h1 {
        font-size: 58px;
        font-weight: 300;
        margin: 0;

        @media(min-width: 1400px) {
            margin: 0 0 0 140px;
        }
    }

    p {
        font-size: 24px;

        @media(min-width: 1400px) {
            margin: 15px 0 0 140px;
        }
    }

    @media(min-width: 1400px) {
        width: 85%;
    }
`;

const Botao = styled.button`
    margin-left: -2px;
    font-size: 19px;
    font-weight: 500;
    padding: 3px 15px;
    background-color: #C75491;
    border-radius: 8px;
    outline: none;
    border: none;
    display: flex;
    place-items: center;
    color: white;
    box-shadow: 0px 8px 14px rgba(0,0,0,0.3);
    cursor: pointer;

    @media(min-width: 1400px) {
        margin: 30px 0 0 140px;
        display: flex;
    }

    :after {
        height: 37px;
        margin-left: 5px;
        margin-top: 5px;
        content: url(${Seta});
    }
`;

const Fifth_Section = () => {
    return (
        <Quinta>
            <Wrapper>
                <div>
                    <h1>Global ORG para <br /> empresas</h1>
                    <p>
                        Estratégia e implementação de voluntariado <br /> empresarial e responsabilidade social. 
                        Essas <br /> sã nossas paixões e especialidades.
                    </p>
                    <Botao>Conheça nossas plataformas <span></span></Botao>
                </div>

                <div>
                    <img src={Mundo}></img>
                </div>
            </Wrapper>
        </Quinta>
    )
} 

export default Fifth_Section;