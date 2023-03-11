import axios from "axios";

export const BASE_URL = "http://localhost:4300/api";

export const EVENT_URL = `${BASE_URL}/event`;

export const fetchEvents = () => axios.get(EVENT_URL, {});

export const fetchStatistics = () => axios.get(`${BASE_URL}/statistics`, {});
