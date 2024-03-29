import styled from "styled-components"
import { mobile } from "../Responsive";
import { BrowserRouter, Link} from 'react-router-dom';
import ProductList from "../Pages/ProductList";

const Container=styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height:"30vh"})}
`;
const Info=styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title=styled.h1`
color: white;
margin-bottom: 20px;
`;
const Button=styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`;
const CatagoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            
            <Link to="/productlist"><Button >Shop Now</Button></Link>
            
            
        </Info>
    </Container>
  )
}

export default CatagoryItem