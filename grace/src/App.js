import React, { useState, createContext } from "react";
import "./App.css";
import GratitudeApplications from "./components/entry/main";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/entry/main";

function App() {
  const [primaryKey, setPrimaryKey] = useState(0);
  const [userInfo, setUserInfo] = useState(() => {
    const result = localStorage.getItem("user");
    return result ? JSON.parse(result) : [];
  });
  const [newEntry, setNewEntry] = useState({
    Title: "",
    Date: "",
    Summary: "",
    Mood: "",
    is_public: "True",
  });
  let entryPayload = {
    title: newEntry.title,
    date: newEntry.date,
    summary: newEntry.summary,
    mood: newEntry.mood,
    is_public: "False",
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewEntry({ ...newEntry, [e.target.name]: value });
  };

  return (
    <div className="App">
      <UniversalContext.Provider
        value={{
          userInfo,
          setUserInfo,
          handleChange,
          newEntry,
          setNewEntry,
          entryPayload,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
        </Switch>
      </UniversalContext.Provider>
    </div>
  );
}

export default App;
export const UniversalContext = createContext();