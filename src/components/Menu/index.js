/* eslint-disable react/jsx-pascal-case */
import Menu_item from '../Menu_item';
import styled from 'styled-components';

const ItensMenu = [
    { texto: "Nossas plataformas" },
    { texto: "Quem somos" },
    { texto: "Quero ser voluntário" },
    { texto: "Para empresas" },
    { texto: "Sou uma ONG" },
    { texto: "Entrar" }
];
  
  const VisualizarItensMenu= () => {
    let values = ItensMenu.map(({texto}) => (
      <List>
        <Menu_item texto={texto}/>
      </List>
    ));
    return (
      <>
        <Menu> {values} </Menu>
      </>
    );
  };

  
const Menu = styled.nav`

`;

const List = styled.ul` 
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    padding: 0;
`;

const Menu_Component =()=> {
    return (
      <VisualizarItensMenu/>
    );
}

export default Menu_Component;
