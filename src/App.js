import "./App.css";
import Navbar from "./components/Navbar";
import TxtForm from "./components/TxtForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as BRouter, Routes, Route} from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light"); //weather darkmode is enabled or not

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    // const removeBodyClasses= ()=>{
    //     document.body.classList.remove('bg-light')
    //     document.body.classList.remove('bg-dark')
    //     document.body.classList.remove('bg-warning')
    //     document.body.classList.remove('bg-danger')
    //     document.body.classList.remove('bg-success')
    // }
    const toggleMode = (cls) => {
        // removeBodyClasses()
        console.log(cls);
        // document.body.classList.add('bg-'+cls)
        if (mode === "dark") {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been activated", "success");
            // document.title = "TextUtils - Light Mode";
        } else {
            setMode("dark");
            document.body.style.backgroundColor = "#202020";
            showAlert("Dark mode has been activated", "success");
            // document.title = "TextUtils - Dark Mode";

            // dynamic favicon
            // setInterval(() => {
            //   document.title = 'TextUtils is amazing';

            // }, 2000);
            // setInterval(() => {
            //   document.title = 'install TextUtils now';

            // }, 1500);
        }
    };
    return (
        <>
            <HashRouter>
                {/* <Navbar title = "TextUtils" aboutTxt = "About TextUtils" /> */}
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                {/* <Navbar/> */}
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route exact path="/about" element={<About mode={mode} />}></Route>
                        <Route exact path="/" element={<TxtForm
                            showAlert={showAlert}
                            heading="Enter the text to analyze below"
                            mode={mode}
                        />}></Route>
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
}

export default App