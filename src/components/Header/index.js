import styled from 'styled-components';
import Search from '../Search';
import Menu_Component from '../Menu';
import Logo_Component from '../Logo';

const Header = styled.div`
    margin: 0;
    width: 100%;
    min-height: 60px;
    max-height: 60px;
    background: #F0F5F7;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: space-evenly;
`;

function Header_Component() {
    return (
        <Header>
            <Logo_Component />
            <Search />
            <span></span>
            <Menu_Component />
        </Header>
    );
};

export default Header_Component; 