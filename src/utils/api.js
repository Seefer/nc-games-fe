import axios from "axios";

const ncGamesAPI = axios.create({
  baseURL: "https://nc-games-api-example.herokuapp.com/api",
});

export const userLogin = async (user) => {
  return { username: "seefer", name: "Darren Evans", avatar_url: "😮" };
};

export const getUserName = async (username) => {
  const result = ncGamesAPI.get(`/users/${username}`);

  // also consider:
  // const result = ncGamesAPI.get(`/users`, {params: { userName: username }});
};

export const getReviews = async (queries) => {
  const result = await ncGamesAPI.get(`/reviews`, {
    params: { ...queries },
  });
  return result.data.reviews;
};

export const getReviewById = async (review_id) => {
  const result = await ncGamesAPI.get(`/reviews/${review_id}`);

  // const result = await ncGamesAPI.get(`/reviews`, {
  //   params: { review_id: { review_id } },
  // });
  return result.data.review;
};

export const getCommentsById = async (review_id) => {
  const result = await ncGamesAPI.get(`/reviews/${review_id}/comments`);
  return result.data.comments;
};

export const getReviewsSortedBy = (sort) => {};

// TODO export const postReview = ( username, category, title, designer, reviewBody) => {};
// TODO export const updateReviewVote = (increment, review_id) => {};

// TODO export const getCategories = () => {};
// TODO export const postCommentById = (username, body, review_id) => {};
// TODO export const updateCommentVote = (increment, comment_id) => {};
// TODO export const deleteCommentById = (comment_id) => {};
