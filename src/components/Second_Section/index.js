import styled from 'styled-components';
import Card from '../Card';
import Botao from '../Botao_mais_vagas/index';

const Second = styled.section`
    position: relative;
    min-height: 1060px;
    background-color: #F0F5F7;
    font-family: 'Merriweather Sans', sans-serif;
    width: 100vw;
`;

const Title = styled.div`
    margin: 30px 132px 0;

    h2 {
        color: #11709E;
    }

    @media(min-width: 1400px) {    
        margin: -10px 286px -30px;
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
        titulo: 'Psicologo Voluntário',
        ong: 'ONG ESTRELA MILINHA',
        local: 'Santos - SP',
        texto: 'Buscamos psicólogos(as) voluntários(as) para atingir o desenvolvimento afetivo e emocional dos nossos atendidos, moradores da Vila Aliança.',
        candidatos: '0/4'
    },
    {
        titulo: 'Designer Gráfico',
        ong: 'ONG AVRA',
        local: 'Rio de Janeiro - RJ',
        texto: 'Você possui habilidades para utilizar os softwares de criação de imagem e manja de redes sociais? Faça parte da nossa equipe, se inscreva na vaga!',
        candidatos: '1/4'
    },
    {
        titulo: 'Designer de UI',
        ong: 'ONG Favela Inc',
        local: 'Manaus - AM',
        texto: 'Estamos desenvolvendo uma plataforma que conecta moradores de favelas a campanhas como doações, capacitações e oportunidades de trabalho.',
        candidatos: '2/6'
    },
    {
        titulo: 'Analista de Mídias Sociais',
        ong: 'ONG AVRA',
        local: 'Brasil',
        texto: 'É antenado(as) nos assuntos que rolam nas redes sociais? Então venha nos apoiar a cuidar dessas belezuras: as redes sociais da AVRA!',
        candidatos: '1/2'
    },
    {
        titulo: 'Ajude os animais',
        ong: 'Animal Equality',
        local: 'Maceió - AL',
        texto: 'Procuramos voluntários que queiram acabar com as práticas cruéis que acontecem com os animais na indústria de alimentícia por meio de ações on-line',
        candidatos: '2/8'
    },
    {
        titulo: 'Médico voluntário',
        ong: 'IAIDAM',
        local: 'Manaus - AM',
        texto: 'Precisamos de voluntários(as) médicos para trabalhar conosco pelo menos 1 vez por semana por 4 horas. Será incrível ter você conosco!',
        candidatos: '2/3'
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
    );
}

function Second_Section() {
    return(
        <Second>
            <Title>
                <h2>VAGAS MAIS RECENTES</h2>
                <p>Tem um montão de vagas novas esperando por você!</p>
            </Title>

            <Cards />

            <Botao>VER MAIS VAGAS</Botao>
        </Second>
    )
}

export default Second_Section;