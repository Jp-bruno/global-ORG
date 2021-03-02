import styled from 'styled-components';
import { fb, insta, wpp, yt, tt, linkd } from './imagens';

const Social = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        padding: 0;
        margin-left: -7px;

        li {
            margin: 0 5px; 
        }
    }
`;

const redes = [fb, insta, wpp, yt, tt, linkd];

function Redes_Sociais() {
    let dados = redes.map(url => {
        return(
            <>
                <li>
                    <a><img src={url}></img></a>
                </li>
            </>
        )
    })

    return (
        <>
            <ul>
                {dados}
            </ul>
        </>
    )
}

function Social_media() {
    return(
        <Social>
            <Redes_Sociais />
        </Social>
    );
}

export default Social_media;