import axios from "axios";

export const BASE_URL = "http://localhost:4300/api";

export const EVENT_URL = `${BASE_URL}/event`;

export const fetchEvents = () => axios.get(EVENT_URL, {});

export const fetchStatistics = () => axios.get(`${BASE_URL}/statistics`, {});

export const fetchCollegeStats = () =>
  axios.get(`${BASE_URL}/statistics/college-stats`, {});

export const fetchEventStats = () =>
  axios.get(`${BASE_URL}/statistics/event-stats`, {});
export const fetchWorkshopStats = () =>
  axios.get(`${BASE_URL}/statistics/workshop-stats`, {});
export const fetchPaperStats = () =>
  axios.get(`${BASE_URL}/statistics/paper-stats`, {});

export const fetchEventDetails = (id) =>
  axios.get(`${BASE_URL}/register/users-from-event/${id}`, {});
export const fetchPaperDetails = (id) =>
  axios.get(`${BASE_URL}/paper/users-from-paper/${id}`, {});
export const fetchWorkDetails = (id) =>
  axios.get(`${BASE_URL}/payment/workshop-payment-details/${id}`, {});

export const fetchReferralStats = () =>
  axios.get(`${BASE_URL}/statistics/referral-stats`, {});

export const fetchAccommodationDetails = () =>
  axios.get(`${BASE_URL}/statistics/accommodation-details`, {});

export const fetchPaperUsers = (id) =>
  axios.get(`${BASE_URL}/paper/users-from-paper/${id}`, {});

export const fetchGraphData = (hr) =>
  axios.get(`${BASE_URL}/statistics/graph-stats/${hr}`, {});
