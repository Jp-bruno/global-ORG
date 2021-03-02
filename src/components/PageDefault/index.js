import Header_Component from '../Header';
import Footer_Component from '../Footer'; 
import First_Section from '../First_Section';
import Second_Section from '../Second_Section';
import Third_Section from '../Third_Section';
import Fourth_Section from '../Fourth_Section';
import Fifth_Section from '../Fifth_Section';
import Social_Media from '../Social_Media'; 
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: -1;
    background-color: #F0F5F7;
    color: var(--white);
    width: 100vw;
    flex: 1;
`;

function PageDefault() {
    return (
        <>  
            <Social_Media />
            
            <Header_Component />

            <Main>
                <First_Section />
                <Second_Section />
                <Third_Section />
                <Fourth_Section />
                <Fifth_Section />
            </Main>
            
            <Footer_Component />
        </>
    );
};

export default PageDefault;