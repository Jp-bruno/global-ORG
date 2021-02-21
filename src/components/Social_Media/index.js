import styled from 'styled-components';
import { fb, insta, wpp, Linkedin, Twitter, YouTube } from './Images'

const ListaDeRedesSociais = [
  { image: fb, link: "Facebook" },
  { image: insta, link: "Instagram" },
  { image: wpp, link: "Whatsapp" },
  { image: Linkedin, link: "LinkedIn" },
  { image: Twitter, link: "Twitter" },
  { image: YouTube, link: "Youtube" }
];
    
const ConsultarRedesSociais = () => {
  let values = ListaDeRedesSociais.map(({ image, link }) => (
    <li>
      <a href={"#"+link}> <img src={image} /> {link} </a>
    </li>
  ));
  return (
    <>
      <ul> {values} </ul>
    </>
  );
};

const Social = styled.div`
    display: flex;
    justify-items: space-around;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(17,112,158,1);
    min-width: 98.79vw;
    max-width: 98.79vw;

    a {
        padding: 10px 15px;
        width: 24px;
        height: 24px;
        display: grid;
        place-items: center;
        img {
            width: 24px;
            height: 24px;
        }
    }

    a:hover {
        background-color: #1F8EC4;
    }
`;

const Social_Media =()=> {
    return(
        <Social>
            <ConsultarRedesSociais/>
        </Social>
    );
}

export default Social_Media;
