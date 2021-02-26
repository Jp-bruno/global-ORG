import styled from 'styled-components';
import fb from './imagens/FB.png';
import insta from './imagens/IG.png';
import wpp from './imagens/WPP.png';
import Linkedin from './imagens/LinkedIn.png';
import Twitter from './imagens/Twitter.png';
import YouTube from './imagens/YouTube.png'

const Social = styled.div`
    display: flex;
    justify-items: space-around;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(17,112,158,1);
    width: 100vw;
    transform: translateX(-16px);
    
    a {
        padding: 10px 15px;
        width: 24px;
        height: 24px;
        display: grid;
        place-items: center;
        img {
            width: 24px;
            height: 24px;
        }
    }

    a:hover {
        background-color: #1F8EC4;
    }
`;

function Social_Media() {
    return(
        <Social>
            <a href='#'><img src={YouTube}></img></a>
            <a href='#'><img src={Linkedin}></img></a>
            <a href='#'><img src={insta}></img></a>
            <a href='#'><img src={wpp}></img></a>
            <a href='#'><img src={Twitter}></img></a>
            <a href='#'><img src={fb}></img></a>
        </Social>
    );
}

export default Social_Media;
