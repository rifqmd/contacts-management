import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Layouts from "./components/Layouts.jsx";
import UserRegister from "./components/User/UserRegister.jsx";
import UserLogin from "./components/User/UserLogin.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import UserLogout from "./components/User/UserLogout.jsx";
import ContactCreate from "./components/Contact/ContactCreate.jsx";
import ContactList from "./components/Contact/ContactList.jsx";
import ContactEdit from "./components/Contact/ContactEdit.jsx";
import ContactDetail from "./components/Contact/ContactDetail.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Layouts/>}>
                <Route path={"/register"} element={<UserRegister/>} />
                <Route path={"/login"} element={<UserLogin/>} />
            </Route>

            <Route path={"/dashboard"} element={<DashboardLayout/>}>
                <Route path={"users"}>
                    <Route path={"profile"} element={<UserProfile/>}/>
                    <Route path={"logout"} element={<UserLogout/>}/>
                </Route>

                <Route path={"contacts"}>
                    <Route index element={<ContactList/>}/>
                    <Route path={"create"} element={<ContactCreate/>} />
                    <Route path={":id/edit"} element={<ContactEdit/>} />
                    <Route path={":id"} element={<ContactDetail/>} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
