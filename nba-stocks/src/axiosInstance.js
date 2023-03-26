import axios from "axios";

const baseURL = "https://www.balldontlie.io/api/v1/";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});