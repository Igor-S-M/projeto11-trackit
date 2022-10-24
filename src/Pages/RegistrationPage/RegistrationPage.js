import axios from "axios";
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png"

export default function RegistrationPage() {

    const [formsData, setFormsData] = useState({ email: "", password: "", name: "", image: "" })
    const [loadingState, setLoadingState] = useState(false)


    const navigate = useNavigate()

    function handleForms(e) {
        setFormsData({
            ...formsData, [e.target.name]: e.target.value,
        })
    }

    function completRegistration(event) {
        event.preventDefault()

        setLoadingState(true)

        const body = {
            email: formsData.email,
            password: formsData.password,
            name: formsData.name,
            image: formsData.image
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
            .then(() => {
                navigate("/")
                setLoadingState(true)
            })
            .catch(err => {
                console.log(err.response.data)
                alert("preencha os campos de acordo!")
            })

    }


    return (
        <StyledScreen>
            <img src={logo} alt="logo"></img>
            <Titulo>Trackit</Titulo>
            <Formulario onSubmit={completRegistration}>
                {!loadingState ? <input required data-identifier="input-email" name={formsData.email} type="email" placeholder="email" onChange={handleForms} /> : <input disabled placeholder="email" />}
                {!loadingState ? <input required data-identifier="input-password" name={formsData.password} type="password" placeholder="senha" onChange={handleForms} /> : <input disabled placeholder="senha" />}
                {!loadingState ? <input required data-identifier="input-name" name={formsData.name} type="text" placeholder="nome" onChange={handleForms} /> : <input disabled placeholder="nome" />}
                {!loadingState ? <input required data-identifier="input-photo" name={formsData.image} type="url" placeholder="foto" onChange={handleForms} /> : <input disabled placeholder="foto" />}
                {!loadingState ? <button type="submit">Cadastrar</button> : <button disabled> <ThreeDots
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
            <Link to="/"><p data-identifier="back-to-login-action">Ja tem uma conta? Faça login</p></Link>
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

        width: 232px;
        height: 17px;
        
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

/* identical to box height */
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

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;

font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: #DBDBDB;
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


