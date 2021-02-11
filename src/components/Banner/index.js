import styled from 'styled-components';
import Search from '../Search';
import imagem from './maos2.jpg';

const Banner = styled.div`
    margin: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${imagem});
    background-position: 100% 97%;
    background-size: cover;
`;

function Banner_Component() {
    return(
        <Banner>
            <Search />
        </Banner>
    );
}

export default Banner_Component;