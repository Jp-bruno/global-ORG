import styled from 'styled-components';
import imagem from './voluntarios.jpg';

const Banner = styled.div`
    margin: 0;
    width: 100%;
    height: 85vh;
    background-image: url(${imagem});
    background-position: 100% 0%;
    background-size: cover;
    position: absolute;


    div:first-child {
        position: absolute;
        left: 17%;
        top: 20%;
        font-size: 1.45rem;
        color: white;

        h1 {
            margin-bottom: -15px;
            
        }

        button {
            font-size: 1.2rem;
            padding: 14px 25px;
            background-color: #11709E;
            color: white;
            border-radius: 10px;
            transition-property: transform, box-shadow;
            transition-duration: 0.3s;
            box-shadow: -4px 4px rgba(0,0,0,0.7); 
            border: none;
            cursor: pointer;

            :hover {
                transform: translate(-4px, 4px);
                box-shadow: none;
            }
        }
    }
`;

const Wave = styled.div`
    position: relative;
    top: calc(80vh - 190px);
    pointer-events: none;
    
    svg {
        width: 100vw;
    }
`;


function Banner_Component() {
    return(
        <Banner>
            <div>
                <h1>
                    Comece um <br></br> trabalho voluntário
                </h1>
                <h2>
                    Encontre formas de se engajar ativamente
                </h2>
                <button>Quero Engajar!</button>
            </div>
            
            <Wave>
            <svg width="1601" height="391" viewBox="0 0 1601 391" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M872 88.4274C769.934 135.397 298 278.427 0 126.427V197.927V390.5H1600.5V196.927V139.927C1442.5 26.9274 1242.5 -82.0726 872 88.4274Z" fill="#F0F5F7"/>
            </svg>
            </Wave>
        </Banner>
    );
}

export default Banner_Component;