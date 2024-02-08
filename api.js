import axios from "axios";
const myApi = axios.create({
  baseURL: "https://nc-news-h1gn.onrender.com/api",
});
export const fetchAllArticles = () => {
  return myApi.get("/articles").then((res) => {
    return res.data;
  });
};
export const fetchArticlebyId = (article_id) => {
  return myApi
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
export const fetchCommentsByArticleId = (article_id) => {
  return myApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
export const postComment = (article_id, comment) => {
  return myApi
    .post(`/articles/${article_id}/comments`, {
      body: comment.body,
      username: "grumpy19",
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
export const fetchAlUsers = () => {
  return myApi
    .get("/users")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
export const updateArticleVotes = (article_id, inc) => {
  return myApi
    .patch(`/articles/${article_id}`, {
      inc_votes: inc,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
