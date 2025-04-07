import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;

const apiUrl = "http://localhost:1337/api/";
const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

const GlobalApi = {
  getCourse: () => axiosClient.get("/courses?populate=*"),
  getBlog: () => axiosClient.get("/blogs?populate=*"),
  getProject: () => axiosClient.get("/projects?populate=*"),

};

export default GlobalApi;
