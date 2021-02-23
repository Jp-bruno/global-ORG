import styled from 'styled-components';
import Search from '../Search';
import Menu_Component from '../Menu';
import Logo_Component from '../Logo';

const Header = styled.div`
    margin: 0;
    min-width: 98.79vw;
    max-width: 98.79vw;
    min-height: 60px;
    max-height: 60px;
    background: #F0F5F7;
    position: absolute;
    left: 0;
    display: grid;
    grid-template-columns: 5% minmax(300px, 300px) 1fr;
`;

function Header_Component() {
    return (
        <Header>
            <Logo_Component />
            <Search />
            <Menu_Component />
        </Header>
    );
};

export default Header_Component; 