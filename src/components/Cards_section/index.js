import styled from 'styled-components';
import Card from '../Card';

const Cards_section = styled.section`
    display: block;
    min-height: 55vh;
    max-height: 55vh;
    margin-top: 15vh;
    
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: inherit;
    justify-content: space-evenly;
`;

function Cards_section_component() {
    return(
        <Cards_section>
            <Wrapper className='wrapper'>
                <Card />
                <Card />
                <Card />
                
            </Wrapper>
        </Cards_section>
    );
}

export default Cards_section_component;
