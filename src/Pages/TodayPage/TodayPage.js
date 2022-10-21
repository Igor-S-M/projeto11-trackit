import styled from "styled-components"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TodayGoal from "./TodayGoal"
import dayjs from "dayjs"
import { weekday } from "../../constants/constants"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../provider/UserContext"
import axios from "axios"

export default function TodayPage() {

    const value = useContext(UserContext)
    const [todayHabits, setTodayHabits] = useState([])
    const [habitsConter, setHabitsConter] = useState(0)


    useEffect(() => {

        const config = { headers: { Authorization: `$Bearer ${value.token}` } }

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then(resp => {
                setTodayHabits(resp.data)
                setHabitsConter(resp.data.filter(i => i.done).length)
                console.log(resp.data)
            })
            .catch(err => { console.log(err.response.data) })

    }, [habitsConter])


    return (
        <StyledScreen>
            <Header />

            <main>
                <div className="container-info-gerais">
                    <h1>{weekday[dayjs().day()]}, {dayjs().date()}/{dayjs().month() + 1}</h1>
                    {habitsConter !== 0 ? <p className="fez-algo"> {Math.round(habitsConter / todayHabits.length * 100)} % dos hábitos concluídos</p> : <p>Nenhum hábito concluído ainda</p>}
                </div>

                <div className="container-habitos">
                    {todayHabits !== undefined && todayHabits.map((i, idx) => <TodayGoal data={i} key={idx}
                        habitsConter={habitsConter} setHabitsConter={setHabitsConter} />)}
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

        .fez-algo{
            color: #8FC549;
        }
    }

    .container-habitos{
        display: flex;
        flex-direction: column;
        align-items: center;

        }

}

`