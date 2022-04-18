import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
    margin: auto;
    background-color: #0cf393;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;

`


const Announcment = () => {
  return (
    <Container>
        %50 Discount!
    </Container>
  )
}

export default Announcment