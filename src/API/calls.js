import axios from "axios";

export const BASE_URL = "http://localhost:4300/api";

export const EVENT_URL = `${BASE_URL}/event`;

export const fetchEvents = () => axios.get(EVENT_URL, {});

export const fetchStatistics = () => axios.get(`${BASE_URL}/statistics`, {});

export const fetchEventStats = () => axios.get(`${BASE_URL}/statistics/event-stats`, {});
export const fetchWorkshopStats = () => axios.get(`${BASE_URL}/statistics/workshop-stats`, {});
export const fetchPaperStats = () => axios.get(`${BASE_URL}/statistics/paper-stats`, {});
export const fetchReferralStats = () => axios.get(`${BASE_URL}/statistics/referral-stats`, {});

export const fetchAccommodationDetails = () => axios.get(`${BASE_URL}/statistics/accommodation-details`, {});

export const fetchPaperUsers = (id) => axios.get(`${BASE_URL}/paper/users-from-paper/${id}`, {});