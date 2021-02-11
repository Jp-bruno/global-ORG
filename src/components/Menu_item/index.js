import styled from 'styled-components';

const Menu_item = styled.li`
    display: flex;
    align-items: center;

    a { 
        position: relative;
        max-height: 35px;
        min-height: 35px;
        color: white;
        text-decoration: none;
        overflow-X: hidden;

        :hover {
            :after {
                transform: translateX(-100%);
            }
        }
    }

    a::after {
        position: relative;
        content: '';
        width: 100%;
        height: 25px;
        border-bottom: solid 1px white;
        position: absolute;
        transform: translateX(-200%);
        transition: transform 0.3s ease;
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