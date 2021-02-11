import Menu_item from '../Menu_item';
import styled from 'styled-components';

const Menu = styled.nav`
    
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
                <Menu_item texto='Início'/>
                <Menu_item texto='Vagas'/>
                <Menu_item texto='Quem somos'/>
                <Menu_item texto='Nossas plataformas'/>
            </List>
        </Menu>
    );
}

export default Menu_Component;