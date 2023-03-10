import { Reminder } from '../models/reminder';
import { reminderApi } from './api';

class ReminderApi {
    async getReminders() {
        const response = await reminderApi.get<Reminder[]>('/');
        return response.data;
    }
}

export default new ReminderApi();
