import axios from "axios";

const ncGamesAPI = axios.create({
  baseURL: "https://nc-games-api-example.herokuapp.com/api",
});

export const getReviews = (category) => {
  return ncGamesAPI.get(`/reviews`).then(({ data }) => {
    return data.reviews;
  });
};
