import styled from 'styled-components';

const Form = styled.form`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 400px;
    max-width: 400px;
    width: 40vw;
    height: 43px;
    padding: 0 0 0 5px;
    place-self: center;
    border-radius: 25px;
    background-color: white;

    & button {
        padding: 5px 15px 0 10px;
        border: none;
        background-color: rgba(0,0,0,0);
        cursor: pointer;
    }
`;

const Search = styled.input`
        display: inline-block;
        position: relative;
        left: -5.5px;
        font-size: 1.3rem;
        min-width: 300px;
        max-width: 385px;
        width: 37vw;
        padding: 7px 15px;
        border-radius: 25px;
        background-color: white;  
        box-sizing: padding-box;
        border: none;
        outline: none;
        min-height: 27px;
        max-height: 27px;

        ::placeholder {
            color: rgba(55,55,55,0.3)
        }
    }
`;

function Search_Component() {
    return (
        <Form>
            <Search placeholder='Pesquisar vagas'></Search>
            <button>
                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15.9749" cy="11.525" r="7" transform="rotate(45 15.9749 11.525)" fill="nonw" stroke="black"/>
                <line x1="10.6715" y1="16.8283" x2="5.7218" y2="21.7781" stroke="black"/>
                </svg>
            </button>
        </Form>
    );
}

export default Search_Component;