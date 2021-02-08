import styled from 'styled-components';
import Search from '../Search';

const Banner = styled.div`
    margin: 0;
    width: 100%;
    height: 90vh;
    background-color: #f8f9fa;
`;

function Banner_Component() {
    return(
        <Banner>
            <Search />
        </Banner>
    );
}

export default Banner_Component;