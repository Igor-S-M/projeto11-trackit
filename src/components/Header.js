import styled from "styled-components"

export default function Header(params) {
    return (
        <StyledHeader>
            <p>Trackit</p>
            <img src="https://cdn-icons-png.flaticon.com/512/627/627857.png" alt="profile" />
        </StyledHeader>
    )
};


const StyledHeader = styled.header`   
    position: absolute;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    
    p{
    width: 97px;
    height: 49px;

    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;

    color: #FFFFFF;
    }

    img{
    width: 51px;
    height: 51px;

    background: url(image.png);
    border-radius: 98.5px;  
    }
`