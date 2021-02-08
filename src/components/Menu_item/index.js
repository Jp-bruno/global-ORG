import styled from 'styled-components';

const Menu_item = styled.li`
    display: flex;
    align-items: center;

    & a {
        color: #1F8EC4;
        text-decoration: none;
    }
`;

function Menu_item_Component(props) {
    return (
        <>
            <Menu_item>
                <a href='#'>
                    {props.texto}
                </a>
            </Menu_item>
        </>
    )
}

export default Menu_item_Component;