import styled from 'styled-components';
import logo from './global-logo.png'

const Card_holder = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: #edf2fb;
    margin: 35px;
    border-radius: 10px;
    min-width: 240px;
    max-width: 20%;
    min-height: 280px;
    
    & img {
        width: 20%;
        place-self: center;
    }

    & div {
    box-sizing: border-box;
    border-top: solid 1px black;
    padding: 5px 35px 35px;
    }
`;

function Card_Component() {
    return(
        <>
            <Card_holder>
                <img src={logo}></img>
                <div>
                    <h3>Título</h3>
                    <p>Texto do card</p>
                </div>
            </Card_holder>
        </>
    );
}

export default Card_Component;