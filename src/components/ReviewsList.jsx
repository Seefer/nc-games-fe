import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import parseQueryString from "query-string";

import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Check 'React error boundaries' for details on error handling https://reactjs.org/docs/error-boundaries.html
  const [isError, setIsError] = useState(false);

  const { search } = useLocation();
  // pull and parse any valid query strings

  const queries = parseQueryString.parse(search);
  useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    setIsLoading(true);
    getReviews(queries)
      .then((result) => {
        setIsLoading(false);
        setReviews(result);
      })
      // Google react error overlay
      .catch((err) => {
        console.log(err);
        setIsError(true);
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
};

export default ReviewsList;
