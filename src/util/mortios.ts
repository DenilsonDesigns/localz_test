import axios, { AxiosInstance } from "axios";

export const mortios: AxiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
