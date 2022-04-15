import styled from "styled-components"
import { mobile } from "../Responsive"
import {Link} from 'react-router-dom';
import Register from "./Register";
const Container= styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://image.freepik.com/free-vector/e-commerce-background_23-2147507979.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper= styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({height:"75%"})}

`

const Title= styled.h1`
    font-size: 24px;
    font-weight: 300;

`

const Form= styled.form`
    display: flex;
    flex-direction: column;
`
const Input= styled.input`
    flex: 1;
    min-width: 40%;
    margin:  10px  0;
    padding: 10px;
`

const Button= styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

`
const Info=styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
`
const Login = () => {
  const name = localStorage.getItem('Gandu');
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="username" value={name}/>
                <Input placeholder="password"/>
                <Button>LogIn</Button>
                <Info>Forgot password?</Info>
                <Link to={"/register"}><Info>Create New Account</Info></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login