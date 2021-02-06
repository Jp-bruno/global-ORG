import Header_Component from '../Header';
import Footer_Component from '../Footer'; 
import Search from '../Search';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    background-color: rgb(222,222,255);
    color: var(--white);
    flex: 1;
    height: 100vh;
    width: 100vw;
`;

function PageDefault() {
    return (
        <>
            <Header_Component />
                <Main>
                    {/* <Banner /> */}
                    <Search />

                    {/* <Cards_section /> */}
                </Main>
            <Footer_Component />
        </>
    );
};

export default PageDefault;