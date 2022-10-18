import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage"
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage"
import TodayPage from "./Pages/TodayPage/TodayPage"
import HabitsPage from "./Pages/HabitsPage/HabitsPage"
import HistoryPage from "./Pages/HistoryPage/HistoryPage"

export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<RegistrationPage/>}/>
            <Route path="/habitos" element={<HabitsPage/>}/>
            <Route path="/hoje" element={<TodayPage/>}/>
            <Route path="/historico" element={<HistoryPage/>}/>
        </Routes>
        </BrowserRouter>
    )
};


