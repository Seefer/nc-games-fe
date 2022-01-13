import React from "react";
import { useState, useEffect } from "react";

import { getReviews } from "../utils/api";
import FilterBar from "./FilterBar";
import ReviewCard from "./ReviewCard";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews()
      .then((result) => {
        setIsLoading(false);
        setReviews(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex">
      <main className="bg-slate-300">
        <h2 className="text-3xl font-bold text-center">Reviews</h2>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </main>
    </div>
  );
}

export default ReviewsList;
