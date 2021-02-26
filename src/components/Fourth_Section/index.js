import styled from 'styled-components';
import Card from '../Card';
import Botao from '../Botao_mais_vagas/index';

const Second = styled.section`
    min-height: 1100px;
    max-height: 1100px;
    background-color: #F0F5F7;
    font-family: 'Merriweather Sans', sans-serif;
`;

const Title = styled.div`
    margin: 50px 140px -20px;

    h2 {
        color: #11709E;
    }

    @media(min-width: 1400px) {    
        margin: 50px 287px -20px;
    }
`;

const Cards_holder = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 25px;
    width: 91.5%;
    max-width: 1300px;
    margin: 0 39.8px;

    @media(min-width: 1400px) {
        margin: 0 164px;
    }
`;

const ConteudoCards = [
    {
        titulo: "Designer",
        ong: "Associação Semeando Amor",
        texto: "É da área de designer e quer transformar o mundo através da sua arte? Essa vaga é para você!",
        local: "Curitiba - PR",
        candidatos: "5/6"
    },
    {
        titulo: "Voluntário(a) para Financeiro",
        ong: "Projeto Ruas",
        texto: "Buscamos voluntário(a) com para apoiar nos fluxos financeiros semanais. Vem com a gente!",
        local: "Rio de Janeiro - RJ",
        candidatos: "3/4"
    },
    {
        titulo: "Mídias Sociais",
        ong: "Biosaneamento",
        texto: "Sabe produzir boas imagens e textos para redes sociais? Vem com a gente aumentar nossa visibilidade e impacto!",
        local: "Manaus - AM",
        candidatos: "3/5"
    },
    {
        titulo: "Professor(a) de Informática",
        ong: "Projeto Cerzinho",
        texto: "Buscamos professor(a) de informática para apoiar nossos atendidos a se familiarizarem com técnologias básicas.",
        local: "Brasil",
        candidatos: "3/4"
    },
    {
        titulo: "Professor(a) de Música",
        ong: "Núcleo Sócio Cultural",
        texto: "Buscamos voluntários para planejar e ministrar aulas de música para nossas crianças e adolescentes. Vamos juntos!",
        local: "Maceió - AL",
        candidatos: "2/3"
    },
    {
        titulo: "Apoio Adm Financeiro",
        ong: "Centro Cultural CB",
        texto: "Fomos contemplados pela Lei Aldir Blanc e precisamos de apoio para a prestação de contas e de como dar a contra partida. Vamos juntos!",
        local: "São Paulo - SP",
        candidatos: "1/3"
    }
];

const Cards = () => {
    let Conteudo = ConteudoCards.map(({titulo, ong, texto, local, candidatos}, i) => {
        i++
        return <Card titulo={titulo} ong={ong} texto={texto} local={local} candidatos={candidatos} key={i} />
    })

    return (
        <Cards_holder>
            {Conteudo}
        </Cards_holder>
    )
}

function Second_Section() {
    return(
        <Second>
            <Title>
                <h2>VAGAS DE VOLUNTARIOS EM DESTAQUE</h2>
                <p>Dê uma olhada em nossas vagas em destaque!!</p>
            </Title>

            <Cards />

            <Botao>VER MAIS VAGAS</Botao>
        </Second>
    )
}

export default Second_Section;