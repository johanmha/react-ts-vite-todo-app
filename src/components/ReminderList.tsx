import React from 'react';
import { Reminder } from '../models/reminder';

interface ReminderListProps {
    reminders: Reminder[];
    onRemoveClick: (id: number) => void;
}

const ReminderList = ({ reminders, onRemoveClick }: ReminderListProps) => {
    return (
        <ul>
            {reminders.map((reminder) => {
                return (
                    <div
                        className="reminder-wrapper"
                        key={`reminder_${reminder.id}`}>
                        <li>{reminder.title}</li>
                        <button onClick={() => onRemoveClick(reminder.id)}>
                            Remove
                        </button>
                    </div>
                );
            })}
        </ul>
    );
};

export default ReminderList;
