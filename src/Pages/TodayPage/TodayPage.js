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

    const userData = useContext(UserContext)
    const [todayHabits, setTodayHabits] = useState([])
    //contador de habitos feitos
    const [habitsCounter, setHabitsCounter] = useState(0)


    useEffect(() => {

        const config = { headers: { Authorization: `$Bearer ${userData.token}` } }

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then(resp => {
                setTodayHabits(resp.data)
                setHabitsCounter(resp.data.filter(i => i.done).length)
                console.log(resp.data)
            })
            .catch(err => { console.log(err.response.data) })

    }, [habitsCounter])


    return (
        <>
            <Header />

            <StyledScreen>
                <div className="container-info-gerais">
                    <h1>{weekday[dayjs().day()]}, {dayjs().date()}/{dayjs().month() + 1}</h1>
                    {habitsCounter !== 0 ? <p className="fez-algo"> {Math.round(habitsCounter / todayHabits.length * 100)} % dos hábitos concluídos</p> : <p>Nenhum hábito concluído ainda</p>}
                </div>

                <div className="container-habitos">
                    {todayHabits !== undefined && todayHabits.map((i, idx) => <TodayGoal data={i} key={idx}
                        habitsCounter={habitsCounter} setHabitsCounter={setHabitsCounter} />)}
                </div>
            </StyledScreen>

            <Footer />
        </>
    )
};


const StyledScreen = styled.main`

    background-color: lightcyan;

    height: 84vh;

    margin-top: 70px;
    margin-bottom: 70px;
    padding-top: 16px;
    padding-left: 20px;
    padding-right: 20px;

    .container-info-gerais{
        display: flex;
        flex-direction: column;
        
        h1{                              
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;         
            color: #126BA5;
        }

        p{
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


`