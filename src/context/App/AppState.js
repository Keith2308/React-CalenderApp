import React, { useReducer } from "react";
import AppReducer from "./appReducer";
import AppContext from "./appContext";
import { useLocalStorage } from "../../hooks/storage";
import { ADD_EVENT } from "../types";

const AppState = (props) => {
  const initialState = {
    events: [],
    colors: ["Primary", "Success", "Info", "Warning", "Danger"],
    selectedEvent: {},
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [item, setValue] = useLocalStorage("events");

  const addEvent = (event) => {
    let userEvents = [...state.events];
    userEvents.push(event);
    setValue(userEvents);
    dispatch({
      type: ADD_EVENT,
      payload: userEvents,
    });
  };

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        addEvent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
