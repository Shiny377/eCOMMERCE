import styled from "styled-components"

const Container= styled.div`



`
const Title=styled.div` 
margin:10px 70px;
font-weight:bold;

font-size:17px;
`
const Button=styled.button`font-size:20px;
background-color:#FF4500;
border:1.5px solid black;cursor: pointer;
`
const Left=styled.div`border:0px
`
const Right=styled.div`
display:flex;

border:0px ;

`
const Desc=styled.p`font-weight:bold;
font-size:30px;
margin:10px 70px;`
const Des=styled.p``
const MenuItem = styled.div`

display:flex;
margin:30px 70px;
justify-content:flex-end;

`

const Wrapper = styled.div`
paddind: 40px 30px;
display: flex;
justify-content: space-between;
`;
const left = styled.div`


`
const Language = styled.span`
padding:45px 70px;
font-size:15px;
font-weight:bold;
flex:1;
display: flex;
align-items: center;
justify-content:flex-end ;


`



const right = styled.div``




const Lang = styled.span`
padding:50px 70px;
align-items: center;
display: flex;`


const Txt=styled.h1`
margin:50px 70px;
font-weight:bold;
font-size:24px;display: flex;

`
const Ext=styled.h1`margin:-400px -80px;
font-weight:bold;
font-size:24px;display: flex;`

const Image=styled.img``
const Imag=styled.img`width:10vw`
const Extra=styled.h1`margin:-40px 1030px;
`
const Ex=styled.h1`margin:-89px 850px;

`
const Exx=styled.h1`margin:-118px 675px;
`
const Exe=styled.h1`margin:70px 1040px;
font-size:25px;`




export const Announc = () => {
  return (
    <Container>      <Image src='./images/loginn1.png' />
      <right><Lang><svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9339 0L41.805 36L0.0628662 36L20.9339 0Z" fill="#EAEBED" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M47.3593 39.9292H51.613L30.0628 2.97345L27.9359 6.62067L47.3593 39.9292Z" fill="#43C5E5" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M47.3593 39.9292L26.4302 3.823L5.61719 39.9292H47.3593ZM41.8626 38.9734L26.4303 5.52211L7.02382 38.9734H41.8626Z" fill="#F26522" />
      </svg>CD Shoppe</Lang></right><left><Language>
        <MenuItem>Home</MenuItem><MenuItem>Explore</MenuItem>
        <MenuItem>My Account</MenuItem></Language>



      </left><Title>Your ultimate accessories store!</Title><Desc>Shop from a wide range of 10k plus products</Desc><Right>
        <MenuItem><Button>Shop now</Button></MenuItem><MenuItem><Button>Watch video</Button></MenuItem></Right>
      <Txt>Featured Products</Txt>
      
      <MenuItem><Ext><Image src='./images/landingAccessories.png' /></Ext></MenuItem>
      
      <MenuItem><Extra><Imag src='./images/gucci bag.jpg' /></Extra></MenuItem>
      
      <MenuItem><Ex><Imag src='./images/sunglass.jpg' /></Ex></MenuItem>
      <MenuItem><Exx><Imag src='./images/nike.jpg' /></Exx></MenuItem>
      <MenuItem><Exe>PopularBrand</Exe></MenuItem>

   
        </Container>
  )
}
