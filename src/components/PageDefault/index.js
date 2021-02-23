import Header_Component from '../Header';
import Footer_Component from '../Footer'; 
import First_Section from '../First_Section';
import Second_Section from '../Second_Section';
import Social_Media from '../Social_Media'; 
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
    min-width: 98.79vw;
    max-width: 98.79vw;
`;

function PageDefault() {
    return (
        <>  
            <Social_Media />
            
            <Header_Component />

            <Main>
                <First_Section />
                <Second_Section />
            </Main>
            
            {/* <Footer_Component /> */}
        </>
    );
};

export default PageDefault;