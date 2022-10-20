import styled from "styled-components"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TodayGoal from "./TodayGoal"



export default function TodayPage() {
    

    return (
        <StyledScreen>
            <Header />

            <main>
                <div className="container-info-gerais">
                    <h1>Segunda, 17/05</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </div>

                <div className="container-habitos">
                    <TodayGoal />
                    <TodayGoal />
                    <TodayGoal />

                </div>
            </main>

            <Footer />
        </StyledScreen>
    )
};


const StyledScreen = styled.div`

background-color: lightcyan;

main{
    margin: 70px 0px;
    min-height: 570px;

    .container-info-gerais{
        display: flex;
        flex-direction: column;

        
        margin-left: 16px;
        
        h1{
            margin: 0px;
            margin-top: 28px;
            height: 29px;

                    
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
                    
            color: #126BA5;
        }

        p{
            margin: 0px;
            height: 22px;

            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;

            color: #BABABA;
        }
    }

    .container-habitos{
        display: flex;
        flex-direction: column;
        align-items: center;

        }

}

`