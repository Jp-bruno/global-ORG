import styled from 'styled-components';

const Logo = styled.div`
    width: 50px;
    height: 50px;
    background-color: blue;
    place-self: center;
    content: "LOGO";
`;

function Logo_Component() {
    return(
        <>
            <Logo />
        </>
    );
}

export default Logo_Component;