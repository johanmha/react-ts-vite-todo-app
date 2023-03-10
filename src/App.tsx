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

    const removeReminder = async (id: number) => {
        const response = await ReminderApi.deleteReminder(id);
        if (response === 200) {
            setReminders(reminders.filter((reminder) => reminder.id !== id));
        } else {
            console.log(`Error while deleting: ${response}`);
        }
    };

    useEffect(() => {
        loadReminders();
    }, []);

    return (
        <div className="App">
            <ReminderList
                reminders={reminders}
                onRemoveClick={removeReminder}
            />
        </div>
    );
}

export default App;
