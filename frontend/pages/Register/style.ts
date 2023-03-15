import styled from "styled-components/native"


export const Screen = styled.View`
display: flex;
flex:1;
align-items: center;
`
export const Arrow = styled.Image`
width: 34px;
height: 34px;
margin-left: 8px;
margin-top: 39px;
position: absolute;
align-self: flex-start;
`

export const Logo = styled.Image`
height:195px;
width: 195px;
margin-top: 48px;
`

export const Container = styled.View`
display:flex;
width: 341px;
top: -36px;
background-color: #8EC3B0;
border-radius: 5px;
margin-bottom: -28px;
align-items: center;
`

export const AddPhtView = styled.View`
width: 100%;
align-self: flex-start;
`

export const Title = styled.Text`
font-size: 24;
color:white;
margin:12px 0 10px 18px; 
`

export const ConfirmOpacity = styled.TouchableOpacity`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
background-color: white;
margin:19px 0px 21px;
border-radius: 5;
width:203px;
height:73px;
display: flex;
align-items: center;
justify-content: center;
font-size: 24;
font-family: 'Arial';
`
