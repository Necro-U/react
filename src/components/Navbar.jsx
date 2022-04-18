import { Badge } from '@material-ui/core'
import {  Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 80px;
    text-align : left
`
const Wrapper =styled.div`
    padding: 0px 20px;
    font-family: "Times New Roman", Times, serif;
    font-size: 30px;
    display:flex;
    justify-content: space-between;
`
//flex navbarı parçalara ayırmaya yarıyor. dikey olarak.
const Left =styled.div`
    text-align:left;
    flex:1 ;
    display:flex;
    align-items:center;
`
const Center =styled.div`
    text-align : center;
    flex:1;
`
const Right =styled.div`
    text-align:center;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `
const Searchdiv=styled.div`
    border : 0.5px solid lightgray;
    align-items: center;
    display : flex;
    margin-left : 30px;
`

const Input = styled.input`
    border : none;
`

const Logo = styled.h1`
    font-weight : bold;
    align-items : center ;
    font-size: 40px; 
`
const Img = styled.img`
    width:40px;
`


const MenuItem = styled.div`
    font-size:14;
    cursor:pointer;
    align-items: center;
    margin-left: auto;
`

const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Img src="./logo192.png" alt="penguin logo" ></Img>
                    <Searchdiv>
                        <Input></Input>
                        <Search style={{"fonst-size":14 , "color":"gray"}} />
                    </Searchdiv>
                </Left>
                <Center> <Logo>PENGUİN</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar