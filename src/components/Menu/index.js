import Menu_item from '../Menu_item';
import styled from 'styled-components';

const Menu = styled.nav`
    margin-right: 20px;
`;

const List = styled.ul` 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-itens: baseline;
    height: 100%;
    margin: 0;
`;

function Menu_Component() {
    return (
        <Menu>
            <List>
                <Menu_item texto='Quem somos'/>
                <Menu_item texto='Quero ser voluntário'/>
                <Menu_item texto='Para empresas'/>
                <Menu_item texto='Sou uma ONG'/>
                <Menu_item texto='Entrar' />
            </List>
        </Menu>
    );
}

export default Menu_Component;