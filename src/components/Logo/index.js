import styled from 'styled-components';
import { Logo_img } from './imagens';

const Logo = styled.div`
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    background-image: url(${Logo_img});
    background-size: contain;
    place-self: center;
`;

function Logo_Component() {
    return(
        <>
            <Logo />
        </>
    );
}

export default Logo_Component;