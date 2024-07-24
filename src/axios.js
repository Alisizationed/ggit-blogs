import axios from 'axios';

export const myaxios = axios.create({
    baseURL: 'https://7008-94-139-141-16.ngrok-free.app',
    headers: {
        'ngrok-skip-browser-warning': '2024',
    },
});