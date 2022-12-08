import React from "react";
import { useSelector } from "react-redux"

export default function Home() {

    const { reducer } = useSelector(function(state) {
        return state;
    })

    // console.log(reducer)

    return(
        <>
            <h1>Home Page</h1>
        </>
    )
}