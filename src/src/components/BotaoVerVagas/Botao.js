import styled from 'styled-components';
import arrow from '../../Home_imagens/arrow.png';

const Button = styled.button`
    padding: 10px 45px 10px 20px;
    margin: 45px 0;
    font-size: 19px;
    font-weight: 500;
    background-color: #C75491;
    border-radius: 16px;
    outline: none;
    border: none;
    place-items: center;
    color: white;
    box-shadow: 0px 8px 14px rgba(0,0,0,0.3);
    cursor: pointer;

    @media(max-width: 1240px) {
        display: block;
        margin: 45px auto;
        width: 65%;
    }

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
`;

function Botao() {
    return(
        <Button>
            VER MAIS VAGAS
        </Button>
    );
};

export default Botao;