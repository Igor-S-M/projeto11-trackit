import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Footer(params) {
    return (
        <StyledFooter>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
                <button>
                    <p>hoje</p>
                </button>
            </Link>
            <Link to="/historico">
                <p>Historico</p>
            </Link>
        </StyledFooter>
    )
};

const StyledFooter = styled.footer`
position: absolute;
width: 100%;
height: 70px;
left: 0px;
bottom: 0px;

background: #FFFFFF;   

display: flex;
justify-content: center;
align-items: center;


p{
width: 100px;
height: 22px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: #52B6FF;
}

button{

background-color: #52B6FF;
 
p{
width: 100px;
height: 22px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: #FFFFFF;
background-color: #52B6FF;
}  
}
`