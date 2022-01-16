import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import Comments from "./Comments";

const Review = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then((result) => {
        setIsLoading(false);
        setReview(result);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [review_id]);

  return (
    <div className="p-2">
      <img src={review.review_img_url} className="i" alt="" />
      <p className="mb-1 text-xl font-bold uppercase">{review.title}</p>
      <div className="font-bold">
        Reviewed by:{" "}
        <span className="italic font-semibold">{review.owner}</span>
      </div>
      <p className="mt-2">{review.review_body}</p>
      <div className="mt-2 font-bold">
        <p>Category: {review.category}</p>
        <p>Game Designer: {review.designer}</p>
        <span className="pr-3">Votes: {review.votes}</span>
        <button className="pr-1">⬆️</button>
        <button>⬇️</button>
        <Comments comment_count={review.comment_count} />
      </div>
    </div>
  );
};

export default Review;
