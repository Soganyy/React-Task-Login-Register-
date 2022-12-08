import React from "react";

export default function Login() {
    return(
        <>
            <h1>Login Page</h1>
            <form>
                <label htmlFor="email"> Email <br/>
                    <input type={"email"} id="email" />
                </label><br/>
                <label htmlFor="password"> Password <br/>
                    <input type="password" id="passowrd" />
                </label><br/><br/>
                <button>Login</button>
            </form>
        </>
    )
}