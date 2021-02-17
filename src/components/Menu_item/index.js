import styled from 'styled-components';

const Menu_item = styled.li`
    display: grid;
    align-items: center;
    height: 100%;
    margin: 0 15px;
    display: grid;
    place-items: center;

    a {
        overflow: hidden;
        position: relative;
        color: #11709E;
        font-weight: 600;
        text-decoration: none;

    //     ::after {
    //         position: absolute;
    //         content: '';
    //         width: 100%;
    //         height: 85%;
    //         border-bottom: solid 2px #11709E;
    //         transform: translateX(-200%);
    //         transition: transform 0.9s ease-out;
    //     }

    //     :hover {
    //         :after {
    //             transform: translateX(-100%);
    //         }
    //     }
    // }

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