import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HabitsPage(params) {
    return (
        <>
            <Header />

            <StyledTopo>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </StyledTopo>

            <StyledContainer>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </StyledContainer>

            <Footer />
        </>
    )
};

const StyledTopo = styled.div`
width: 100%;

margin-top: 86px;

display: flex;
justify-content: space-between;
align-items: center;

h1{
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;

color: #126BA5;   
}

button{
width: 40px;
height: 35px;

display: flex;
align-items: center;
justify-content: center;

background: #52B6FF;
border-radius: 4.63636px; 

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 26.976px;
line-height: 34px;

text-align: center;

color: #ffffff;   

}

`

const StyledContainer = styled.div`
width: 100%;

display: flex;

p{
margin: 0px;
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;


}

`