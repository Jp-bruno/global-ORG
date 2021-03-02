import styled from 'styled-components';
import { Feminismo, Educacao, Ambiente, PCDs, Arrow } from './imagens'; 


const Terceira = styled.div`
    position: relative;
    height: 500px;
    width: 100%;
    background-color: #3D98C4;
    padding: 5px 0px;

    @media(min-width: 1400px) {
        height: 540px;
    }

    p {
        margin-top: 5px;

        @media(min-width: 1400px) {
            margin: 35px 280px;
        }
    }

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
`;

const Categoria = styled.div`
    ul {
        display: flex;
        margin: 0 80px;
        width: 1140px;

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
    width: 50%;
    margin: 20px 135px;
    display: flex;
    flex-direction: column;

    p {
        margin: 10px 0 20px 0;
    }

    @media(min-width: 1400px) {
        margin: 35px 280px;
    }

    div {
        display: flex;
        align-items: center;

        select {
            position: relative;
            font-size: 18px;
            padding: 10px 25px 10px 10px;
            margin: 0 15px 0 0;
            border-radius: 20px;
            color: white;
            background-color: #C75491;
            
            option {
                margin: 50px 20px;
            }
        
        }    

        span {
            position: relative;
            right: 55px;
            width: 34px;
            height: 30px;
            border-none;
            border-radius: 20px;
            background-color: #C75491;
            background-image: url(${Arrow});
            background-repeat: no-repeat;
            background-position: center;
            pointer-events: none;
        }

        select:focus-within + span {
            transform: rotate(0.5turn);
        }
    
    }



`;

const CategoriasConteudo = [
    {src: Feminismo, txt: 'Feminismo', key: 1}, 
    {src: Ambiente, txt: 'Meio Ambiente', key: 2}, 
    {src: Educacao, txt: 'Educação', key: 3}, 
    {src: PCDs, txt: 'PDCs', key: 4}
]

const Categorias = () => {
    let valores = CategoriasConteudo.map(({src, txt, key}) => {
        return (
            <>
                <li key={key}>
                    <img src={src} />
                    <a href={'#' + txt}>{txt}</a>
                </li>
            </>
        );
    });

    return ( 
        <ul>
            {valores}
        </ul>
    );
}

function Third_Section() {
    return(
        <Terceira>
            <h2>FILTRE POR VAGAS, ONGS E CAUSAS QUE MAIS COMBINAM COM VOCÊ!</h2>
            <p>Confira as categorias mais acessadas abaixo</p>
            <Categoria>
                <Categorias />
            </Categoria>

            <Filtro>
                <p>Ou descubra outras causas e habilidades para se engajar:</p>
                <div>
                    <div>
                    <select name='causas'>
                            <option value=''>Escolha uma causa</option>
                            <option value='causa1'>Causa 1</option>
                            <option value='causa2'>Causa 2</option>
                            <option value='causa3'>Causa 3</option>
                        </select>
                        <span></span>
                    </div>

                    <div>
                        <select name='habilidades'>
                            <option value=''>Escolha uma habilidade</option>
                            <option value=''>Habilidade 1</option>
                            <option value=''>Habilidade 2</option>
                            <option value=''>Habilidade 3</option>
                        </select>
                        <span></span>
                    </div>
                </div>
            </Filtro>
        </Terceira>
    )
}

export default Third_Section;