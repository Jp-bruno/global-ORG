import styled from 'styled-components';

const Menu_item = styled.li`
    display: flex;
    align-items: center;

    a { 
        overflow-x: hidden;
        position: relative;
        min-height: 27px;
        max-height: 27px;
        color: white;
        text-decoration: none;

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
        height: 23px;
        border-bottom: solid 2px #11709E;
        position: absolute;
        transform: translateX(-200%);
        transition: transform 0.5s ease;
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