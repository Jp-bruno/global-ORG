import styled from 'styled-components';
import Search from '../Search';
import Menu_Component from '../Menu';
import Logo_Component from '../Logo';

const Header = styled.div`
    width: 100vw;
    min-height: 60px;
    max-height: 60px;
    background: #F0F5F7;
    position: absolute;
    transform: translateX(-16px);

    
    display: grid;
    grid-template-columns: 9.3% minmax(300px, 300px) 1fr;
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