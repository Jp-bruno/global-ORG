import Menu_item from '../Menu_item';
import styled from 'styled-components';

const Menu = styled.nav`
    justify-self: flex-end;
`;

const List = styled.ul` 
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    padding: 0;
    font-size: 14px;
    
`;

function Menu_Component() {
    return (
        <Menu>
            <List>
                <Menu_item texto='Nossas plataformas'/>
                <Menu_item texto='Quem somos'/>
                <Menu_item texto='Quero ser voluntário'/>
                <Menu_item texto='Para empresas'/>
                <Menu_item texto='Sou uma ONG' />
                <Menu_item texto='Entrar' />
                <Menu_item texto='Ajuda' />
            </List>
        </Menu>
    );
}

export default Menu_Component;