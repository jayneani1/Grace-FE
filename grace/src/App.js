import React, {useState, createContext } from 'react';
import './App.css';
import GratitudeApplications from "./components/entry/main";

function App() {
    const [primaryKey, setPrimaryKey] = useState(0);
    const [userInfo, setUserInfo] = useState(()=>{
        const result = localStorage.getItem('user')
        return result? JSON.parse(result): []
    })
    const [newEntry, setNewEntry] = useState({
         Title: "",
         Date: "",
         Summary: "",
         Mood: "",
        is_public: "False",
    });
    let entryPayload = {
        title: newEntry.title,
        date: newEntry.date,
        summary: newEntry.summary,
        mood: newEntry.mood,
        is_public: "False"
    }

    const handleChange = (e) => {
        const value = e.target.value
        setNewEntry({...newEntry, [e.target.name]: value});
    };

    return (
        <div className="App">
            <UniversalContext.Provider value={
                {
                    userInfo,
                    setUserInfo,
                    handleChange,
                    newEntry,
                    setNewEntry,
                    entryPayload,
                }
            }>
                <GratitudeApplications />
            </UniversalContext.Provider>
        </div>
    );
}

export default App;
export const UniversalContext = createContext();