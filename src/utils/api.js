import axios from "axios";

const ncGamesAPI = axios.create({
  baseURL: "https://nc-games-api-example.herokuapp.com",
});

export const getReviews = (category) => {
  return ncGamesAPI.get(`/reviews?category=${category}`).then(({ data }) => {
    return data.reviews;
  });
};
