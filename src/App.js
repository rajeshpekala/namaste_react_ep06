import React from "react"
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppBody from "./Body";
import Footer from "./components/Footer";


const Application = () => {
    return (
        <div className = "app">
            <Header/>
            <AppBody/>
            <Footer/>

        </div>

    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Application/>);