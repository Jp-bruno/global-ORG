import styled from 'styled-components';
import Search from '../Search';
import Menu_Component from '../Menu';
import Logo_Component from '../Logo';
import fb from './imagens/facebook.png'
import insta from './imagens/instagram.png'
import wpp from './imagens/whatsapp.png'

const Header = styled.div`
    margin: 0;
    width: 100vw;
    height: 20vh;
    background: rgba(0,0,0,0.0);
    color: white; 
    position: absolute;
    top: 25px;
    left: 0;
    display: grid;
    grid-template-columns: 10% 30% 10% 50%;
`;

const Social = styled.span`
    display: flex;
    flex-direction: row;
    justify-items: space-around;
    background-color: rgba(17,112,158,1);
    align-items: center;
    position: absolute;
    width: 100%;
    top: -25px;

    a {
        padding: 10px 15px;
        width: 15px;
        display: grid;
        place-items: center;
        img {width: 15px;}
    }

    a:hover {
        background-color: #1F8EC4;
    }
`;

function Header_Component() {
    return (
        <Header>
            <Social>
                <a href='#'><img src={fb}></img></a>
                <a href='#'><img src={insta}></img></a>
                <a href='#'><img src={wpp}></img></a>
            </Social>
            <Logo_Component />
            <Search />
            <span></span>
            <Menu_Component />
        </Header>
    );
};

export default Header_Component; 