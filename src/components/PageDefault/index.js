import Header_Component from '../Header';
import Footer_Component from '../Footer'; 
import Banner_Component from '../Banner';
import Div_categoria from '../div-categoria';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: -1;
    background-color: #F0F5F7;
    color: var(--white);
    flex: 1;
    min-height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    min-width: 100vw;
`;

function PageDefault() {
    return (
        <>
            <Header_Component />

            <Main>
                <Banner_Component />

                <Div_categoria />

                {/* <Vagas_destaque /> */}
            </Main>
            
            {/* <Footer_Component /> */}
        </>
    );
};

export default PageDefault;