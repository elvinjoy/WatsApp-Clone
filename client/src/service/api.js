import axios from "axios";

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("error on addUser API", error.message);
    }
}

export const getUsers = async () => {
    try {
       let response =  await axios.get(`${url}/users`);
       return response.data;
    } catch (error) {
        console.log("error owhile calling getUser API", error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log("error on setConversation API", error.message);
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log("error on getConversation API", error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log("error on newMessage API", error.message);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log("error on getMessages API", error.message);
    }
}

export const uploadFile = async (data) => {
    try {
       return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log("error on uploadFile API", error.message);
    }
}