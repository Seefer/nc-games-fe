import React from "react";
import { useState, useEffect } from "react";

import { getReviews } from "../utils/api";
import FilterBar from "./FilterBar";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews()
      .then((result) => setReviews(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="reviews-list">
      <FilterBar />
      <main className="main">
        <h1>REVIEWS</h1>
        <ul className="reviews-list">
          {reviews.map((review) => (
            <li key={review.review_id}>
              <h2>{review}</h2>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ReviewsList;
