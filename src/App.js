import React from "react";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./App.css";
import Main from "./component/Main";
import AppState from "./context/App/AppState";

const App = () => {
  return (
    <>
      <AppState>
        <Main />
      </AppState>
    </>
  );
};

export default App;
