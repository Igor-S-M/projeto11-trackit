import { Link } from "react-router-dom"
import styled from "styled-components"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"



export default function Footer() {
    return (
        <StyledFooter>
            <Link data-identifier="habit-page-action" to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
                <div className="container-hoje">

                    <CircularProgressbar value={33}
                        text={`${"97"}%`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",

                        })} />
                </div>

            </Link>
            <Link data-identifier="historic-page-action" to="/historico">
                <p>Historico</p>
            </Link>
        </StyledFooter>
    )
};

const StyledFooter = styled.footer`
position: fixed;
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

.container-hoje{

width: 91px;
display: flex;
align-items: center;
justify-content: center;


margin-bottom: 30px;
 
}
`