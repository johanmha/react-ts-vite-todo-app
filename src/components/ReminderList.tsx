import React from 'react';
import './styles/ReminderList.css';
import { Reminder } from '../models/reminder';
import ReminderItem from './ReminderItem';

interface ReminderListProps {
    reminders: Reminder[];
    onRemoveClick: (id: number) => void;
}

const ReminderList = ({ reminders, onRemoveClick }: ReminderListProps) => {
    return (
        <div className="reminder-list">
            {reminders.map((reminder) => (
                <ReminderItem
                    reminder={reminder}
                    onRemoveClick={onRemoveClick}
                    key={reminder.id}
                />
            ))}
        </div>
    );
};

export default ReminderList;
