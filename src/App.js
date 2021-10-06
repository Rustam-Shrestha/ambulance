import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About.js";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Blog from "./components/Blog";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //this states whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  const reddish = () => {
    document.body.style.background = "darkred";
    showAlert("dark red color is enabled", "danger");
    document.title = "text utils red mode";
  };
  const greenish = () => {
    document.body.style.background = "darkgreen";
    showAlert("dark green color is enabled", "success");
    document.title = "text utils green mode";
  };
  const bluish = () => {
    document.body.style.background = "darkblue";
    showAlert("dark blue color is enabled", "primary");
    document.title = "text utils blue mode";
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#444";
      showAlert("dark mode has been enabled", "success");
      document.title = "text utils dark mode";
      setInterval(() => {
        document.title = "text utils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "install text utils";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "#ddd";
      showAlert("light mode has been enabled", "success");
      document.title = "text utils normal mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="ECNALUBMA"
        aboutText="About Ecnalubma"
        services="Our Service"
        blog="Our Blog"
        mode={mode}
        toggleMode={toggleMode}
        reddish={reddish}
        greenish={greenish}
        bluish={bluish}
      />
      <Alert alert={alert} />
      <div className="container-my-3">
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <div className="container">
          <Textform
            showAlert={showAlert}
            mode={mode}
            heading="Enter the text to analyze"
          />
        </div>
        {/* </Route> */}
        {/* <Route exact path="/about"> */}
        <About />
        {/* </Route> */}

        {/* <Route exact path="/blog"> */}
        <Blog
          head="
        Deforestation And Desertification The Burning Issue"
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
