import styled from "styled-components"
import { BASE_URL, weekday } from "../../constants/constants"
import { UserContext } from "../../provider/UserContext"
import { useContext } from "react"
import axios from "axios"

export default function CurrentHabits({ numberOfHabits, setNumberOfHabits, data }) {


    const value = useContext(UserContext)

    function deleteHabit(id) {

        const config = { headers: { Authorization: `$Bearer ${value.token}` } }

        axios.delete(`${BASE_URL}habits/${id}`, config)
            .then(resp => {
                console.log(resp.data)
                setNumberOfHabits(numberOfHabits - 1)
            })
            .catch(err => console.log(err.response.data))
    }


    return (
        <StyledHabit>

            <div className="principal">
                <h1 data-identifier="habit-name" >
                    {data.name}
                </h1>
                <ion-icon onClick={() => deleteHabit(data.id)} data-identifier="delete-habit-btn" name="trash"></ion-icon>
            </div>
            <div className="week">
                {weekday.map((i, idx) => <div className={`weekday ${data.days.includes(idx) ? "clicado" : null}`} key={idx}>{i[0]}</div>)}
            </div>

        </StyledHabit>
    )
};


const StyledHabit = styled.div`

width: 100%;
height: 90px;
margin-bottom: 30px;

background: #FFFFFF;
border-radius: 5px;

.principal{

    display: flex;
    justify-content: space-between;

    h1{
margin: 14px 0px 8px 14px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: #666666;
}

ion-icon{
    font-size:28px;
    color: darkgray;
    margin: 10px;
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



`