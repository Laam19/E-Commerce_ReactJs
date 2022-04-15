import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../Responsive"

const Container=styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`

const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`
const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`
const Center=styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right=styled.div`
    flex: 1;
    padding: 20px;
`
const ContactAdd=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment=styled.img`
    
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>KAPPA</Logo>
            <Desc>
                hsdgfhsgd sdfgsghsg shg weettetwtew wrw
                shsjdhh sttstewtettewtew weerwer
                weuweyue weyuye wekle.

            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Makeup</ListItem>
                <ListItem>News</ListItem>
                <ListItem>Profile</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>WishList</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactAdd>
                <Room style={{marginRight:"10px"}}/> Banassree,Dhaka
            </ContactAdd>
            <ContactAdd>

               <Phone style={{marginRight:"10px"}}/> 01797071207
            </ContactAdd>
            <ContactAdd>
              <MailOutline style={{marginRight:"10px"}}/> kappa@gmail.com
             </ContactAdd>
             <Payment src="https://thinkingparadox.com/wp-content/uploads/2020/01/payment-method-png-transparent-images-175362-6659871.png"/>
        </Right>
    </Container>
  )
}

export default Footer