import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HistoryPage(params) {
    return (
        <>
        <Header/>
        <StyledTopo>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </StyledTopo>
        <Footer/>
        </>
    )
};


const StyledTopo = styled.div`

width: 100%;

margin-top: 80px;

display: flex;
flex-direction: column;

h1{
margin-top: 28px;
margin-bottom: 0px;
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;

color: #126BA5;
}

p{
margin-top: 18px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;   
}
`