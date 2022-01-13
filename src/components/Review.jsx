import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import Comments from "./Comments";

function Review() {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      });
  }, [review_id]);

  return (
    <div className="p-2">
      <img src={review.review_img_url} className="i" alt="" />
      <p className="mb-1 text-xl font-bold uppercase">{review.title}</p>
      <p className="font-bold">
        Reviewed by:{" "}
        <span className="italic font-semibold">{review.owner}</span>
      </p>
      <p className="mt-2">{review.review_body}</p>
      <div className="mt-2 font-bold">
        <p>Category: {review.category}</p>
        <p>Game Designer: {review.designer}</p>
        <p>Votes: {review.votes}</p>
        <Comments comment_count={review.comment_count} />
      </div>
    </div>
  );
}

export default Review;
