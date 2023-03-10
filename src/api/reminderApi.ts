import { Reminder } from '../models/reminder';
import { reminderApi } from './api';

class ReminderApi {
    async getReminders() {
        const response = await reminderApi.get<Reminder[]>('/');
        return response.data;
    }

    async deleteReminder(id: number) {
        const response = await reminderApi.delete<number>(`/${id}`);
        return response.status;
    }
}

export default new ReminderApi();
