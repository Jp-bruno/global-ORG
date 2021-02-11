import styled from 'styled-components';
import Card from '../Card';

const Cards_section = styled.section`
    display: block;
    min-height: 380px;
    max-height: 55vh;
    max-width: 99vw;
    min-width: 99vw;
    margin-top: 15vh;
    background-color: #3D98C4;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const Wrapper = styled.div`
    display: block;
    padding: 0 70px;

    span {
        box-sizing: content-box;
        width: 100%;
        display: flex;
        overflow-x: scroll;
    }
    
`;

function Cards_section_component() {
    return(
        <Cards_section>
            <Wrapper>
                <span>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </span>
            </Wrapper>
        </Cards_section>
    );
}

export default Cards_section_component;
