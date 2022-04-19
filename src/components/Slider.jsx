import React from 'react'
import styled from '@emotion/styled'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    background-color: #0cf393;
    position: relative;
`

const Arrow= styled.div`
    width:50;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin : auto;
    left: ${props => props.direction==="left" && "10px"};
    right: ${props => props.direction==="right" && "10px"};
`
const Wrapper = styled.div`
    height: 100%;
    align-items: center;
`

const Slide= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    height: 80%;
    flex:1;
`
const Image= styled.img`
    height: 80%;
`


const InfoContainer=styled.div`
    flex:1;
    height: 100%;
    padding: 10px 0px;
    align-items: center;
`
const Title=styled.h1`
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 80px;
`
const Description=styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: italic;
    font-size: 25px;
    margin:50px 0px;
`
const Button=styled.button`
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border-radius: 4px;
`


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackIosOutlined></ArrowBackIosOutlined>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src="./logo192.png" alt='Goco'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>New Season</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Description>
                    <Button>Buy now</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
        </Arrow>
    </Container>
  )
}

export default Slider