import styled from 'styled-components';
import { Feminismo, Educacao, Ambiente, PCDs } from './imagens'; 


const Terceira = styled.div`
    max-height: 512px;
    min-height: 512px;
    width: 100%;
    background-color: #3D98C4;
`;

const Categoria = styled.div`
    h2, p {
        font-family: 'Merriweather Sans', sans-serif;
        margin: 15px 140px;
        color: white;
    }

    h2 {
        font-weight: 500;

        @media(min-width: 1400px) {
            margin: 50px 290px 15px;
        }
    }

    p {
        font-weight: 100;
        margin-bottom: 20px;

        @media(min-width: 1400px) {
            margin: 15px 290px;
        }
    }

    ul {
        display: flex;
        margin: 0 80px;
        max-width: 1148px;

        @media(min-width: 1400px) {
            margin: 15px 230px;
        }

        li {
            margin: 0 15px;
            width: 290px;
            height: 255px;
            background-color: #C75491;
            border-radius: 16px;
            display: grid;
            grid-template-rows: 80% 20%;
            place-items: center;
            box-shadow: 0px 8px 14px rgba(0,0,0,0.3);


            img {
                width: 205px;
                height: 205px;
            }
        
            a {
                place-self: center;
                text-decoration: none;
                color: white;
                font-size: 20px;
                font-weight: 900;
            }
        }
    }
`;

const Filtro = styled.div`
    max-width: 1120px;
    min-width: 1120px;
    margin: 25px 135px;

    @media(min-width: 1400px) {
        margin: 35px 280px;
    }

    p {
        color: white;
    }

    select {
        padding: 10px 25px;
        margin: 0 15px 0 0;
        border-radius: 20px;
        color: white;
        background-color: #C75491;
    }
`;

const categorias = [
    {src: Feminismo, txt: 'Feminismo'}, 
    {src: Ambiente, txt: 'Meio Ambiente'}, 
    {src: Educacao, txt: 'Educação'}, 
    {src: PCDs, txt: 'PDCs'}
]

const Categorias = () => {
    let valores = categorias.map(({src, txt}) => {
        return(
            <>
                <li>
                    <img src={src}></img>
                    <a href='#'>{txt}</a>
                </li>
            </>
        )
    });

    return ( 
        <ul>
            {valores}
        </ul>
    )
}

function Third_Section() {
    return(
        <Terceira>
            <Categoria>
                <h2>FILTRE POR VAGAS, ONGS E CAUSAS QUE MAIS COMBINAM COM VOCÊ!</h2>
                <p>Confira as categorias mais acessadas abaixo</p>
                <Categorias />
            </Categoria>
            
            <Filtro>
                <p>Ou descubra outras causas e habilidades para se engajar:</p>
                <div>
                    <select name='causas'>
                        <option value=''>Escolha uma causa</option>
                        <option value='causa1'>Causa 1</option>
                        <option value='causa2'>Causa 2</option>
                        <option value='causa3'>Causa 3</option>
                    </select>
                </div>

                <div>
                    <select name='habilidades'>
                        <option value=''>Escolha uma habilidade</option>
                        <option value=''>Habilidade 1</option>
                        <option value=''>Habilidade 2</option>
                        <option value=''>Habilidade 3</option>
                    </select>
                </div>
            </Filtro>
        </Terceira>
    )
}

export default Third_Section;