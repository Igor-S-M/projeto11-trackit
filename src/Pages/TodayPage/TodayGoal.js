import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai"
import { useContext, useState } from "react";
import { UserContext } from "../../provider/UserContext";
import axios from "axios";


export default function TodayGoal({ data, setHabitsConter, habitsConter }) {

    const value = useContext(UserContext)
    const [isClicked, setIsClicked] = useState(false)

    function uncheckHabit(id) {

        const config = { headers: { Authorization: `$Bearer ${value.token}` } }

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
            .then(resp => {
                setIsClicked(false)
                setHabitsConter(habitsConter - 1)
            })
            .catch(err => { console.log(err.response.data) })
    }

    function checkHabit(id) {
        const config = { headers: { "Authorization": `$Bearer ${value.token}` } }

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
            .then(resp => {

                setIsClicked(true)
                setHabitsConter(habitsConter + 1)
            })
            .catch(err => { console.log(err.response.data) })
    }

    function completeTodayHabit(id) {


        if (isClicked) {
            uncheckHabit(id)
        } else {
            checkHabit(id)
        }

    }
    return (
        <StyledHabit>
            <div className="infos">
                <h1>{data.name}</h1>
                <p>Sequencia atual: {data.currentSequence} dias</p>
                <p>Seu recorde: {data.highestSequence} dias</p>
            </div>
            <div className={`check-box ${isClicked ? "clicado" : null}`}
                onClick={() => completeTodayHabit(data.id)}>
                <AiFillCheckSquare />
            </div>
        </StyledHabit>
    )
};



const StyledHabit = styled.div`
    box-sizing: border-box;
    
    width: 94%;
    height: 94px;

    margin: 10px;
    padding-left: 15px;

    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;


    .infos{

        height: 80px;
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

    .check-box svg{
        width: 70px;
        height: 70px;

        margin: 14px;
        color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }

    .check-box.clicado svg{
        width: 70px;
        height: 70px;

        margin: 14px;
        color: #8FC549;
        border-radius: 5px;
    }
`