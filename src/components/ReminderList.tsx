import React from 'react';
import { Reminder } from '../models/reminder';

interface ReminderListProps {
    reminders: Reminder[];
}

const ReminderList = ({ reminders }: ReminderListProps) => {
    return (
        <ul>
            {reminders.map((reminder) => {
                return (
                    <div key={`reminder_${reminder.id}`}>{reminder.name}</div>
                );
            })}
        </ul>
    );
};

export default ReminderList;
