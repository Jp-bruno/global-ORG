import styled from 'styled-components';
import Menu_Component from '../Menu';
import Logo_Component from '../Logo';

const Header = styled.div`
    width: 100vw;
    height: 20vh;
    background: rgba(0,0,0,0.0);
    color: white; 
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 10% 90%;
`;

function Header_Component() {
    return (
        <Header>
            <Logo_Component />
            <Menu_Component />
        </Header>
    );
};

export default Header_Component; 