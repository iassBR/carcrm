import axios from "axios";
import { rootUrl, apiUrl } from "./App";


export const Http = axios.create({
    baseURL: apiUrl
})