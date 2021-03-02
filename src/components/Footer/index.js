import styled from 'styled-components';
import { Logo_img } from '../Logo/imagens';
import Social_media from './footer_social_media/Social_media';

const Footer = styled.footer`
    box-sizing: border-box;
    position: relative;
    width: 100vw;
    max-width: 100vw;
    height: 70vh;
    background: #F0F5F7; 
    color: black;
    padding: 50px 135px;

    hr {
        margin: 50px 0 20px 0;
    }
`;

const Main_footer_content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 50px;
    
    h1 {
        font-size: 24px;
        margin-bottom: 30px !important;
    }

    p, a {
        margin: 0;
        font-size: 14px;
    }

    a {
        margin: 0 0 10px 0;
    }

    div {
        display: flex;
        flex-direction: column;
    }
`;

const Description = styled.div`
    h1 {
        margin: 10px 0 0 0;
        img {
            width: 30px;
            margin: 0 8px 0 0;
            display: inline-block;
        }
    }
`;

const Contact = styled.div`

`;

const Navigation = styled.div`

`;


const Newsletter = styled.div`
    input {
        border-radius: 5px;
        border: solid 1px black;
        width: 170px;
        font-size: 14px;
        padding: 5px;
        margin: 8px 0;
    }

    input:first-of-type {
        margin: 20px 0 8px 0;
    }

    input:last-of-type {
        margin: 8px 0 20px 0;
    }

    button {
        padding: 12px 7px;
        width: 182px;
        box-sizing: border-box;
        border: none;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        font-size: 16px;
        color: white;
        background: #C73583;
    }
`;

const Direitos_autorais = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: arial;
    font-size: 16px;
`;

function Footer_Component() {
    return (
        <Footer>
            <Main_footer_content>
                <Description>
                    <h1><img src={Logo_img}></img>Global ORG</h1>
                    <p>
                    Plataforma de soluções para conectar ONGs e Projetos Sociais com Empresas, Voluntários e Pessoas que precisam de ajuda pelo mundo.
                    </p>
                    <Social_media />
                </Description>

                <Contact>
                    <h1>Contato</h1>
                    <a>Chat Online</a>
                    <a>Contato@ongcpb.org</a>
                    <a>WhatsApp +55 11 95849-4693</a>
                </Contact>

                <Navigation>
                    <h1>Navegação</h1>
                    <a>Nossas Plataformas</a>
                    <a>Quem somo</a>
                    <a>Cadastro</a>
                    <a>Sou uma ONG</a>
                    <a>FAQ</a>
                    <a>Ajuda</a>
                    <a>Quero ser voluntário</a>
                    <a>Para empresas</a>
                </Navigation>

                <Newsletter>
                    <h1>Newsletter</h1>
                    <p>Fique por dentro das vagas e ONGS que você poderá participar futuramente!</p>
                    <form>
                        <input placeholder='Nome' required></input>
                        <input placeholder='E-mail' required></input>
                        <input placeholder='Cidade' required></input>
                        <button type='submit'>Inscrever-se</button>
                    </form>
                </Newsletter>
            </Main_footer_content>
            <hr />
            <Direitos_autorais>
                <span>© 2021 Global ORG | Todos os direitos reservados</span>  
                <span><a>Política de Privacidade</a> | <a>Termos de serviço</a></span>
            </Direitos_autorais>
        </Footer>
    )
}

export default Footer_Component; 