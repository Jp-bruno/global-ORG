import styled from 'styled-components';
import logo from './global-logo.png'

const Logo = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${logo});
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