import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HabitsPage(params) {
    return (
        <>
            <Header />

            <StyledMain>
                <div className="topo">
                    <h1>Meus hábitos</h1>
                    <button>+</button>
                </div>

                <div className="container">
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </div>

            </StyledMain>
            <Footer />
        </>
    )
};


const StyledMain = styled.main`

margin-top: 86px;
margin-left: 20px;
margin-right: 20px;

.topo{
width: 100%;
margin-bottom: 28px;

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
}



.container{
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
}

`

