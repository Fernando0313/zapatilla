import { useState } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import "./App.css";
import NavBar from "./component/NavBar";
// import { AuthContextProvider } from "./context/authContext";
import CarritoContextProvider from "./context/carritoContext";
import Sections from "./component/Sections";
import NavBarW from "./component/NavBarW";
import Routes from "./Routes";


function App() {
  const [estadoNav, setEstadoNav] = useState(false);

  return (
    <Router>
      <CarritoContextProvider>
    <div className="App">
      {!estadoNav ? (
        <NavBar estadoNav={estadoNav} setEstadoNav={setEstadoNav} />
      ) : (
        <NavBarW estadoNav={estadoNav} setEstadoNav={setEstadoNav} />
      )}
      <Switch>
        <Routes/>
      </Switch>
    </div>
    </CarritoContextProvider>
    </Router>
  );
}

export default App;
