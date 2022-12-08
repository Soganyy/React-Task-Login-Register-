import React from "react";
import { useDispatch, useSelector } from "react-redux"
import actions from "../redux/action"

export default function Login() {

    const dis = useDispatch();

    const { users, register } = useSelector(state => state.reducer)

    const submit = (e) => {
        e.preventDefault();  

        dis({
            type: actions.register,
            payload: register
        }) 
        
        console.log(users)
    }

    const handle = (e) => {
        switch(e.target.name) {
            case "userName": 
                return dis({
                    type: "userName",
                    payload: e.target.value
                })
            case "email": 
                return dis({
                    type: "email",
                    payload: e.target.value
                })
            case "password": 
                return dis({
                    type: "password",
                    payload: e.target.value
                })
            case "passwordConfirm": 
                return dis({
                    type: "passwordConfirm",
                    payload: e.target.value
                })
            default: return 
        }
    }

    return(
        <>
            <h1>Register Page</h1>
            <form onSubmit={submit}>
                <label htmlFor="userName"> Username <br/>
                    <input type="text" id="userName" name="userName" onInput={handle} value={register.userName} />
                </label><br/>
                <label htmlFor="email"> Email <br/>
                    <input type={"email"} id="email" name="email" onInput={handle} value={register.email} />
                </label><br/>
                <label htmlFor="password"> Password <br/>
                    <input type="password" id="passowrd" name="password" onInput={handle} value={register.password} />
                </label><br/>
                <label htmlFor="passwordConfirm"> Confirm password: <br/>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" onInput={handle} value={register.passwordConfirm} />
                </label><br/><br/>
                <button>Register</button>
            </form>
        </>
    )
}