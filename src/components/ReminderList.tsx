import React from 'react';
import { Reminder } from '../models/reminder';

interface ReminderListProps {
    reminders: Reminder[];
}

const ReminderList = ({ reminders }: ReminderListProps) => {
    console.log('reminders: ', reminders);
    return (
        <ul>
            {reminders.map((reminder) => {
                return (
                    <li key={`reminder_${reminder.id}`}>{reminder.title}</li>
                );
            })}
        </ul>
    );
};

export default ReminderList;
