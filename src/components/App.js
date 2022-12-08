import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function App() {
    return(
        <>
            <Header />

            <Routes>
                <Route path={"/"} element={<Home />}> </Route>
                <Route path={"/register"} element={<Register />}> </Route>
                <Route path={"/login"} element={<Login />}> </Route>
            </Routes>
        </>
    )
}