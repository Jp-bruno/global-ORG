import styled from 'styled-components';
import Menu_Component from '../Menu';
import Logo_Component from '../Logo';
import fb from './imagens/facebook.png'
import insta from './imagens/instagram.png'
import wpp from './imagens/whatsapp.png'

const Header = styled.div`
    margin: 0;
    width: 99vw;
    height: 20vh;
    background: rgba(0,0,0,0.7);
    color: white; 
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 10% 90%;
`;

const Social = styled.span`
    display: flex;
    flex-direction: row;
    justify-items: space-around;
    background-color: #C73583;
    align-items: center;
    position: absolute;
    width: 100pxpx;
    top: 100%;

    a {
        padding: 15px;
        width: 30px;
        display: grid;
        place-items: center;
        img {width: 20px;}
    }

    a:hover {
        background-color: #1F8EC4;
    }
`;

function Header_Component() {
    return (
        <Header>
            <Logo_Component />
            <Menu_Component />
            <Social>
                <a href='#'><img src={fb}></img></a>
                <a href='#'><img src={insta}></img></a>
                <a href='#'><img src={wpp}></img></a>
            </Social>
        </Header>
    );
};

export default Header_Component; 