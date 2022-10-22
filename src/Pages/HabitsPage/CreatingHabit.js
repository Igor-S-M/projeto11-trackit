import axios from "axios"
import { useState, useContext } from "react"
import styled from "styled-components"
import { BASE_URL, weekday } from "../../constants/constants"
import { UserContext } from "../../provider/UserContext"

export default function CreatingHabit({setShowCreatingHabit }) {

    const userData = useContext(UserContext)

    const [habitName, setHabitName] = useState("")
    const [habitDays, setHabitDays] = useState([])

    function clickDay(i) {
        if (habitDays.includes(i)) {
            const novoEstado = habitDays.filter(el => el !== i)
            setHabitDays(novoEstado)
        } else {
            setHabitDays([...habitDays, i])
        }
    }

    function completeForm(e) {
        e.preventDefault()

        const config = { headers: { Authorization: `$Bearer ${userData.token}` } }
        const body = {
            name: habitName,
            days: habitDays
        }
        
        axios.post(`${BASE_URL}habits`, body, config)
            .then(resp => {
                console.log(resp.data)
                setShowCreatingHabit(false)
            })
            .catch((err) => console.log(err.response))

    }


    return (
        <StyledHabit>
            <form onSubmit={completeForm}>
                <input required data-identifier="input-habit-name" value={habitName} placeholder="nome do hábito" onChange={(e) => setHabitName(e.target.value)} />
                <div className="week">
                    {weekday.map((i, idx) => <div data-identifier="week-day-btn" className={`weekday ${habitDays.includes(idx) ? "clicado" : ""}`} key={idx} onClick={() => clickDay(idx)}>{i[0]}</div>)}
                </div>
                <div className="container-butoes">
                    <h1 data-identifier="cancel-habit-create-btn" onClick={() => setShowCreatingHabit(false)}>Cancelar</h1>
                    <button data-identifier="save-habit-create-btn" type="submit">Salvar</button>
                </div>
            </form>
        </StyledHabit>
    )
};

const StyledHabit = styled.div`

width: 100%;
margin-bottom: 30px;

background: #FFFFFF;
border-radius: 5px;

input{
 
box-sizing: border-box;

width: 303px;
height: 45px;

margin-bottom: 4px;
margin-top: 18px;
margin-left: 18px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;   

::placeholder{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: red;
/* 
color: #DBDBDB; */
}
}

.week{
    display: flex;
    margin-left: 14px;

}

.weekday{
box-sizing: border-box;

width: 30px;
height: 30px;

margin: 4px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;   

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: red;
/* color: #DBDBDB; */

display: flex;
align-items: center;
justify-content: center;
}

.weekday.clicado{

color: #FFFFFF;
background: #CFCFCF;
border: 1px solid #CFCFCF;    
}

.container-butoes{

display: flex;
justify-content: flex-end;
align-items: center;

margin-top: 28px;
margin-right: 16px;
margin-bottom: 16px;


h1{
 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;

/* identical to box height */
text-align: center;

color: #52B6FF;   
}

button{
width: 84px;
height: 35px;

margin-left: 10px;

background: #52B6FF;
border-radius: 4.63636px;   

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;

/* identical to box height */
text-align: center;

color: #FFFFFF;


}

}
`