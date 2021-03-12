import styled from 'styled-components';

const Estilos = {
    cores: {
        azulClaro: "#3D98C4",
        rosaClaro: "#C75491",
        rosa: "#C73583",
        azul: "#1F8EC4",
        azulEscuro: "#11709E",
        brancoAzul: "#F0F5F7"
    },
    fontes: {
        serif: "'Merriweather', serif",
        sans: "'Merriweather Sans', sans-serif"
    }
};

const CardComponent = styled.div`
    max-width: 320px;
    padding: 10px 12px 0 12px;
    border-radius: 16px;
    min-height: 320px;
    height: 350px; 
    background: ${Estilos.cores.azulEscuro};
    box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.2);
    color: #F7F0F4;
    display: grid;
    margin: 25px 0 0 0;

    @media(min-width: 1400px) {
        :nth-of-type(1), :nth-of-type(2), :nth-of-type(3) {
            margin-bottom: 75px;
        }
    }

    span:first-of-type {
        position: absolute;
        transform: translate(247px, 121px);
        border-radius: 16px 0 0 0;
        background-color: ${Estilos.cores.azulEscuro};
        padding: 3px 17px 3px 7px;
        font-weight: bold;
        font-size: 18px;
        font-family: ${Estilos.fontes.sans};
    }

    span:last-of-type {
        place-self: end;
        padding: 0 5px 10px 5px;
    }

    img {
        width: 100%;
        max-height: 170px;
        border-radius: 16px 16px 0 0;
    }

    p {
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;
    }

    h3 {
        font-weight: 600;
        font-size: 1.3rem;
        letter-spacing: 0.2px;
    }

    h4 {
        font-weight: 520;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.5px;
    }

`;

function Card(props) {
    return(
        <>
            <CardComponent>
                <img src={props.src} alt=""></img>
                <span>{props.candidatos}</span>
                <h3>{props.titulo}</h3>
                <h4>{props.ong}</h4>
                <p>{props.texto}</p>
                <span>{props.local}</span>
            </CardComponent>
        </>
    );
}

export default Card;