import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import Footer from '../../Components/Footer'
import { Anounchments } from '../../core/Anounchments'
import { Navbar } from '../../core/Navbar'
import * as styled from './Cart.styled';
import { BrowserRouter, Link} from 'react-router-dom';
import ProductList from '../ProductList'






export const Cart = () => {
  return (
    <styled.Container>
        <styled.Wrapper>
            <styled.Title>Your Bag</styled.Title>
            <styled.Top>
                <BrowserRouter>
                <Link to="productlist"><styled.TopButton onClick={<ProductList/>}>Continue Shopping</styled.TopButton></Link>
                </BrowserRouter>
                <styled.TopTexts>
                    <styled.Toptext>Shopping Bag(2)</styled.Toptext>
                    <styled.Toptext>Wish List(0)</styled.Toptext>
                </styled.TopTexts>
                <styled.TopButton type='filled'>CheckOut</styled.TopButton>
            </styled.Top>
            <styled.Bottom>
                <styled.Info>
                    <styled.Product>
                        <styled.Productdetail>
                            <styled.Image src="https://d2wfvd7ei865en.cloudfront.net/product-media/814/800/1130/W170DHACANBack.jpg"/>
                            <styled.Details>
                                <styled.ProductName><b>Product:</b>Denim Jeans</styled.ProductName>
                                <styled.ProductId><b>ID:</b>276376235</styled.ProductId>
                                <styled.ProductColor color="black"/>
                                <styled.ProductSize><b>Size:</b>37</styled.ProductSize>
                            </styled.Details>
                        </styled.Productdetail>
                        <styled.Pricedetail>
                            <styled.ProductAmountConatiner>
                                <Add/>
                                <styled.ProductAmount>2</styled.ProductAmount>
                                <Remove/>
                            </styled.ProductAmountConatiner>
                            <styled.ProductPrice>$10</styled.ProductPrice>
                        </styled.Pricedetail>
                    </styled.Product>
                    <styled.Hr/>
                    <styled.Product>
                        <styled.Productdetail>
                            <styled.Image src="https://www.repertoirefashion.co.uk/images/ami-mens-large-heart-oversized-t-shirt-grey-tee-p37662-194802_image.jpg"/>
                            <styled.Details>
                                <styled.ProductName><b>Product:</b>T-Shirt</styled.ProductName>
                                <styled.ProductId><b>ID:</b>276376235</styled.ProductId>
                                <styled.ProductColor color="black"/>
                                <styled.ProductSize><b>Size:</b>L</styled.ProductSize>
                            </styled.Details>
                        </styled.Productdetail>
                        <styled.Pricedetail>
                            <styled.ProductAmountConatiner>
                                <Add/>
                                <styled.ProductAmount>1</styled.ProductAmount>
                                <Remove/>
                            </styled.ProductAmountConatiner>
                            <styled.ProductPrice>$20</styled.ProductPrice>
                        </styled.Pricedetail>
                    </styled.Product>
                </styled.Info>
                <styled.Summary>
                    <styled.SummaryTitle><b>Order Summary</b></styled.SummaryTitle>
                    <styled.SummaryItem>
                        <styled.SummaryItemText>Subtotal</styled.SummaryItemText>
                        <styled.SummaryItemPrice>$ 80</styled.SummaryItemPrice>
                    </styled.SummaryItem>
                    <styled.SummaryItem>
                        <styled.SummaryItemText>Estimated Shipping</styled.SummaryItemText>
                        <styled.SummaryItemPrice>$ 6.7</styled.SummaryItemPrice>
                    </styled.SummaryItem>
                    <styled.SummaryItem>
                        <styled.SummaryItemText>Discount</styled.SummaryItemText>
                        <styled.SummaryItemPrice>$ 6.7</styled.SummaryItemPrice>
                    </styled.SummaryItem>
                    <styled.SummaryItem type="total">
                        <styled.SummaryItemText >Total</styled.SummaryItemText>
                        <styled.SummaryItemPrice>$ 80</styled.SummaryItemPrice>
                    </styled.SummaryItem>
                    
                    <styled.SummaryBottom>CheckOut Now</styled.SummaryBottom>
                </styled.Summary>
            </styled.Bottom>
        </styled.Wrapper>
        <Footer/>
    </styled.Container>
  )
}
