import React, { useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from './models/reminder';

function App() {
    const [reminders, setReminders] = useState<Reminder[]>([
        {
            id: 1,
            name: 'Husk api'
        }
    ]);
    return (
        <div className="App">
            <ReminderList reminders={reminders} />
        </div>
    );
}

export default App;
