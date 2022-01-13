import axios from "axios";

const ncGamesAPI = axios.create({
  baseURL: "https://nc-games-api-example.herokuapp.com/api",
});

export const getUserName = async (username) => {
  const result = ncGamesAPI.get(`/users/${username}`);

  // also consider:
  // const result = ncGamesAPI.get(`/users`, {params: { userName: username }});

  console.log(result);
};

export const getReviews = async (category) => {
  const result = await ncGamesAPI.get(`/reviews`);
  return result.data.reviews;
};

export const getReviewById = async (review_id) => {
  const result = await ncGamesAPI.get(`/reviews/${review_id}`);
  return result.data.review;
};

export const getReviewsSortedBy = (sort) => {};

// TODO export const postReview = ( username, category, title, designer, reviewBody) => {};
// TODO export const updateReviewVote = (increment, review_id) => {};

// TODO export const getCategories = () => {};
// TODO export const getCommentsById = (review_id) => {};
// TODO export const postCommentById = (username, body, review_id) => {};
// TODO export const updateCommentVote = (increment, comment_id) => {};
// TODO export const deleteCommentById = (comment_id) => {};
