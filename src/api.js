import axios from 'axios';

const apiBase = 'https://jsonplaceholder.typicode.com';

export const api = {
    getAllData: async () => {
        const response = await axios.get(`${apiBase}/albums`)
        return response.data;
    },

    getData: async(andress) => {
        const response = await axios.get(`${apiBase}${andress}`)
        return response.data;
    }
}