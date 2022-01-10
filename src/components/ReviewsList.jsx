import React from "react";
import { useState, useEffect } from "react";

import { getReviews } from "../utils/api";
import FilterBar from "./FilterBar";
import ReviewCard from "./ReviewCard";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews()
      .then((result) => {
        setReviews(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="reviews-list">
      <FilterBar />
      <main className="main">
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </main>
    </div>
  );
}

export default ReviewsList;
