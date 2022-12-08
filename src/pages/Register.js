import React from "react";
import { useDispatch } from "react-redux"

export default function Login() {

    const dis = useDispatch();

    const submit = (e) => {
        e.preventDefault();

        let v = new FormData(e.target)

        // console.log(v.get("userName"))

        dis({
            type: "REGISTER",
            userName: v.get("userName"),
            email: v.get("email"),
            password: v.get("password"),
            passwordConfirm: v.get("passwordConfirm")
        })
    }

    return(
        <>
            <h1>Register Page</h1>
            <form onSubmit={submit}>
                <label htmlFor="userName"> Username <br/>
                    <input type="text" id="userName" name="userName" />
                </label><br/>
                <label htmlFor="email"> Email <br/>
                    <input type={"email"} id="email" name="email" />
                </label><br/>
                <label htmlFor="password"> Password <br/>
                    <input type="password" id="passowrd" name="password" />
                </label><br/>
                <label htmlFor="passwordConfirm"> Confirm password: <br/>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" />
                </label><br/><br/>
                <button>Register</button>
            </form>
        </>
    )
}