import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    max-width: 350px;
    min-width: 350px;    
    max-height: 360px;
    min-height: 360px;
    background-color: #11709E;
    border-radius: 16px;
    font-family: 'Merriweather', serif;
    box-shadow: 0px 8px 14px rgba(0,0,0,0.3);
    margin: 15px;

    img {
        margin: 18px auto -10px;
        max-width: 310px;
        min-width: 310px;
        max-height: 145px;
        min-height: 145px;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }

    div {
        position: relative;
        margin: 0 !important;
        color: white;
        width: 100%; 
        transform: translateY(-24px);


        h3, p {
            margin: 5px 15px;
        }
        
        h3:nth-of-type(1) {
            font-size: 20px;
            font-weight: 550;
        }

        h3:nth-of-type(2) {
            font-size: 16px;
            font-weight: 150;
        }

        p {
            font-size: 14px;
            font-weight: 50;
        }

    }

    span:nth-of-type(2) {
        text-align: right;
        color: white;
        margin: 0 5%;
        transform: translateY(-10px);
    }
`;

const Canditatos = styled.span`
    position: relative;
    padding: 2px 3px;
    color: white;
    margin: 0 5%;
    width: 50px;
    background-color: #11709E;
    border-top-left-radius: 16px;
    transform: translate(256px, -27px); 
`;

function Card(props) {
    return(
        <>
            <Wrapper>
                <img url={props.imagem}></img>
                <Canditatos>
                    0/4
                </Canditatos>
                <div>
                    <h3>{props.titulo}</h3>
                    <h3>{props.ong}</h3>
                    <p>{props.texto}</p>
                </div>
                <span>{props.local}</span>
            </Wrapper>
        </>
    );
}

export default Card;