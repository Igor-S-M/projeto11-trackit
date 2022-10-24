import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png"



export default function LoginPage({setUserData}) {

    const [userEmail, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginLoad, setLoginLoad] = useState(false)

    const navigate = useNavigate()

    function completLogin(event) {
        event.preventDefault()
        setLoginLoad(true)

        const body = {
            email: userEmail,
            password: password,

        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
            .then((resp) => {
                setLoginLoad(false)
                navigate("/hoje")
                setUserData(resp.data)
            }).catch((err) => {
                console.log(err.response)
                alert("email ou senha incorreto!")
                setLoginLoad(false)
            })


    }

    return (
        <StyledScreen>
            <img src={logo} alt="logo"></img>
            <Titulo>Trackit</Titulo>
            <Formulario onSubmit={completLogin}>
                {!loginLoad? <input required data-identifier="input-email" value={userEmail} type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />        : <input disabled placeholder="email"/> }  
                {!loginLoad? <input required data-identifier="input-password" value={password} type="password" placeholder="senha" onChange={e => setPassword(e.target.value)} />: <input disabled placeholder="senha"/>}
                {!loginLoad? <button data-identifier="login-btn" type="submit">Entrar</button> :<button disabled> <ThreeDots
                    height="45"
                    width="80"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true} />
                    </button>}        
            </Formulario>
            <Link to="/cadastro"><p data-identifier="sign-up-action">Não tem uma conta? Cadastre-se!</p></Link>
        </StyledScreen>
    )
};

const StyledScreen = styled.main`
display: flex;
flex-direction: column;
align-items: center;


img{
    margin-top: 60px;

    width:160px ;
    height: 90px;

}

p{
margin-top: 26px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;

}
`

const Titulo = styled.h1`
width: 180px;
height: 86.23px;

margin-bottom: 34px;

font-family: 'Playball', cursive;
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;

text-align: center;

color: #126BA5
`

const Formulario = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input{
box-sizing: border-box;

width: 303px;
height: 45px;

margin-bottom: 6px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: #DBDBDB;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
}

button{
width: 303px;
height: 45px;

background: #52B6FF;
border-radius: 4.63636px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;

display: flex;
justify-content: center;
align-items: center;
}
`
