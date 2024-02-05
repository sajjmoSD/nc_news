import axios from "axios";
const myApi = axios.create({
  baseURL: "https://nc-news-h1gn.onrender.com/api",
});
export const fetchAllArticles = () => {
  return myApi.get("/articles").then((res) => {
    return res.data;
  });
};
