import axios from "axios";
import { baseUrl } from "../constants/endpoints";
export const authAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
