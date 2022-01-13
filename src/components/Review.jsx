import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";

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
    <div>
      <img src={review.review_img_url} className="i" alt="" />
      <p className="mb-2 text-xl font-bold uppercase">{review.title}</p>
      <p>Reviewed by: {review.owner}</p>
      <p>{review.review_body}</p>
      <div className="mt-2 font-bold">
        <p>Category: {review.category}</p>
        <p>Game Designer: {review.designer}</p>
      </div>
    </div>
  );
}

export default Review;
