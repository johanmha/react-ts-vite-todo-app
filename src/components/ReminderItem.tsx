import React from 'react';
import { Reminder } from '../models/reminder';
import './styles/ReminderItem.css';

interface ReminderItemProps {
    reminder: Reminder;
    onRemoveClick: (id: number) => void;
}

const ReminderItem = ({
    reminder,
    onRemoveClick
}: ReminderItemProps): JSX.Element => {
    return (
        <div className="reminder-wrapper">
            <div className="reminder-text">{reminder.title}</div>
            <button
                className="btn btn-remove"
                onClick={() => onRemoveClick(reminder.id)}>
                Remove
            </button>
        </div>
    );
};

export default ReminderItem;
