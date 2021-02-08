import Header_Component from '../Header';
import Footer_Component from '../Footer'; 
import Banner_Component from '../Banner';
import Cards_Section_Component from '../Cards_section';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    background-color: rgb(222,222,255);
    color: var(--white);
    flex: 1;
    min-height: 100vh;
    max-width: 100vw;
`;

function PageDefault() {
    return (
        <>
            <Header_Component />

            <Main>
                <Banner_Component />

                <Cards_Section_Component />
            </Main>
            
            <Footer_Component />
        </>
    );
};

export default PageDefault;