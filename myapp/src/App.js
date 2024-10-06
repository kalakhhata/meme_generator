import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./components/Meme";

export default function App(){
    return(
        <section>
            <Header/>
            <Form/>
            <Meme/>
        </section>
    )
}