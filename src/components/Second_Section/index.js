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
    margin: 50px 140px;

    h2 {
        color: #11709E;
    }

    @media(min-width: 1400px) {    
        margin: 50px 294px;
    }
`;

const Cards_holder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 20px;
    max-width: 1350px;
    min-width: 1350px;

    @media(min-width: 1400px) {
        margin: 0 174px;
    }
`;

const ConteudoCards = [{
    titulo: 'Psicologo Voluntário',
    ong: 'ONG ESTRELA MILINHA',
    local: 'Santos - SP',
    texto: 'Buscamos psicólogos(as) voluntários(as) para atingir o desenvolvimento afetivo e emocional dos nossos atendidos, moradores da Vila Aliança.'
    },
    {
        titulo: 'Designer Gráfico',
        ong: 'ONG AVRA',
        local: 'Rio de Janeiro - RJ',
        texto: 'Você possui habilidades para utilizar os softwares de criação de imagem e manja de redes sociais? Faça parte da nossa equipe, se inscreva na vaga!',
    },
    {
        titulo: 'Designer de UI',
        ong: 'ONG Favela Inc',
        local: 'Manaus - AM',
        texto: 'Estamos desenvolvendo uma plataforma que conecta moradores de favelas a campanhas como doações, capacitações e oportunidades de trabalho.',
    },
    {
        titulo: 'Analista de Mídias Sociais',
        ong: 'ONG AVRA',
        local: 'Brasil',
        texto: 'É antenado(as) nos assuntos que rolam nas redes sociais? Então venha nos apoiar a cuidar dessas belezuras: as redes sociais da AVRA!',
    },
    {
        titulo: 'Ajude os animais',
        ong: 'Animal Equality',
        local: 'Maceió - AL',
        texto: 'Procuramos voluntários que queiram acabar com as práticas cruéis que acontecem com os animais na indústria de alimentícia por meio de ações on-line',
    },
    {
        titulo: 'Médico voluntário',
        ong: 'IAIDAM',
        local: 'Manaus - AM',
        texto: 'Precisamos de voluntários(as) médicos para trabalhar conosco pelo menos 1 vez por semana por 4 horas. Será incrível ter você conosco!',
    }

];

const Cards = () => {
    let valores = ConteudoCards.map(({titulo, ong, local, texto}) => (
        <Card titulo={titulo} ong={ong} local={local} texto={texto} />
    ));

    return (
        <Cards_holder>
            {valores}
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