import styled from 'styled-components'

const Container = styled.div`




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
justify-content: flex-end;


`



const right = styled.div``




const Lang = styled.span`
padding:40px 20px;
align-items: center;
display: flex;`

const MenuItem = styled.div`
font:size: 14px;
cursor: pointer;
margin-left: 40px;


`



const pagee = () => {
    return (
        <><Container><Wrapper>
            <right><Lang><svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9339 0L41.805 36L0.0628662 36L20.9339 0Z" fill="#EAEBED" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.3593 39.9292H51.613L30.0628 2.97345L27.9359 6.62067L47.3593 39.9292Z" fill="#43C5E5" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.3593 39.9292L26.4302 3.823L5.61719 39.9292H47.3593ZM41.8626 38.9734L26.4303 5.52211L7.02382 38.9734H41.8626Z" fill="#F26522" />
            </svg>CD Shoppe</Lang></right>
            <left><Language>
                <MenuItem>Home</MenuItem><MenuItem>Explore</MenuItem>
                <MenuItem>My Account</MenuItem></Language>



            </left>


        </Wrapper>
        </Container></>
       
            
            
    )
}

export default pagee