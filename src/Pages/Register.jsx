import styled from "styled-components"


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
    width: 40%;
    padding: 20px;
    background-color: white;

`

const Title= styled.h1`
    font-size: 24px;
    font-weight: 300;

`

const Form= styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input= styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Aggrement= styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button= styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="UserName"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Aggrement>
                    By creatint account , I aggree all the tearms
                    and policy and aggrement <b>Privacy Policy</b>
                </Aggrement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register