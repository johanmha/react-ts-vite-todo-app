import axios from 'axios';

export const reminderApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
});
