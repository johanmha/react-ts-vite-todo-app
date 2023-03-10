import React, { useEffect, useState } from 'react';
import ReminderApi from './api/reminderApi';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from './models/reminder';

function App() {
    const [reminders, setReminders] = useState<Reminder[]>([]);

    const loadReminders = async () => {
        const loadedReminders = await ReminderApi.getReminders();
        setReminders(loadedReminders);
    };

    useEffect(() => {
        loadReminders();
    }, []);

    return (
        <div className="App">
            <ReminderList reminders={reminders} />
        </div>
    );
}

export default App;
