import styled from 'styled-components';
import seta from './arrow.png';

const Button = styled.button`
    margin: 50px 137px;
    padding: 0px 17px;
    font-size: 19px;
    font-weight: 500;
    background-color: #C75491;
    border-radius: 16px;
    outline: none;
    border: none;
    display: grid;
    grid-template-columns: 90% 10%;
    place-items: center;
    color: white;
    box-shadow: 0px 8px 14px rgba(0,0,0,0.3);
    cursor: pointer;

    @media(min-width: 1400px) {
        {
            margin: 50px 290px;
        }
    }

    :after {
        height: 37px;
        margin-left: 5px;
        margin-top: 5px;
        content: url(${seta});
    }
`;

function Botao() {
    return(
        <Button>VER MAIS VAGAS</Button>
    )    
}

export default Botao;