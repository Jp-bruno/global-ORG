import styled from 'styled-components';

const Categoria = styled.div`
    background-color: #F0F5F7;
    position: relative;
    top: 83vh;
    width: 100%;
    color: #11709E;
    display: grid;

    div {
        margin: 0 auto;
        text-align: center;

        ul {
            display: flex;
            justify-content: space-around;
            list-style-type: none;
            padding: 0;

            li {
                
            }
        }
    }
`;

function Div_categoria() {
    return (

        <Categoria>
            <div>
                <h2>BUSQUE POR CATEGORIA DE INTERESSE</h2>
                <ul>
                    <li>VAGAS</li>
                    <li>ONGS</li>
                    <li>Causas</li>
                    <li>Habilidades</li>
                    <li>Estado</li>
                </ul>
            </div>
        </Categoria>
    );
}

export default Div_categoria;