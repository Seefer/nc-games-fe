import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import parseQueryString from "query-string";

import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search } = useLocation();

  // pull and parse any valid query strings
  const { sort_by, order, owner, category } = parseQueryString.parse(search);

  useEffect(() => {
    setIsLoading(true);
    getReviews([sort_by, order, owner, category])
      .then((result) => {
        setIsLoading(false);
        setReviews(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className=" bg-slate-300">
      <h2 className="text-3xl font-bold text-center">Reviews</h2>
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </main>
  );
}

export default ReviewsList;
