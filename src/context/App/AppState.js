import React, { useReducer } from "react";
import AppReducer from "./appReducer";
import AppContext from "./appContext";
import { useLocalStorage } from "../../hooks/storage";
import { ADD_EVENT, GET_EVENTS, SELECT_EVENT } from "../types";

const AppState = (props) => {
  const initialState = {
    events: [],
    colors: ["Primary", "Success", "Info", "Warning", "Danger"],
    selectedEvent: {},
    colorObj: {
      primary: "#0275d8",
      success: "#5cb85c",
      info: "#5bc0de",
      warning: "#f0ad4e",
      danger: "#d9534f",
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [item, setValue] = useLocalStorage("events");
  const [selectedItem, setSelectedItem] = useLocalStorage("selectedEvent");

  const addEvent = (event) => {
    let userEvents = [...state.events];
    userEvents.push(event);
    setValue(userEvents);
    dispatch({
      type: ADD_EVENT,
      payload: userEvents,
    });
  };

  //Get All Event from storage
  const getEvents = () => {
    if (item) {
      dispatch({
        type: GET_EVENTS,
        payload: item,
      });
    }
  };

  //Get Selected Event
  const selected = (event) => {
    setSelectedItem(event);
    dispatch({
      type: SELECT_EVENT,
      payload: event,
    });
  };

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        colorObj: state.colorObj,
        addEvent,
        getEvents,
        selected,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
