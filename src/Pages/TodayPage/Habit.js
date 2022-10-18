import styled from "styled-components";

export default function Habit(params) {
    return (
        <StyledHabit>
            <div className="infos">
                <h1>Titulo do habito</h1>
                <p>Sequencia atual: X dias</p>
                <p>Seu recorde: Y dias</p>
            </div>
            <div className="check-box"></div>
        </StyledHabit>
    )
};



const StyledHabit = styled.div`
    width: 340px;
    height: 94px;

    margin: 28px;
    
    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;


    .infos{
        display: flex;
        flex-direction: column;

    
        h1{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
       
        color: #666666;

        margin: 6px 0px;
        }

        p{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
        
        margin: 0px;
        }
    }

    .check-box{
        width: 70px;
        height: 70px;

        margin: 14px;

        background-color: lightgreen;
    }
`