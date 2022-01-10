import React from "react";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <p>{review.title}}</p>
      <img
        className="review-img"
        alt="review"
        src={`${review.review_img_url}`}
        width="200"
        height="150"
      ></img>
      <p>
        Current Votes: <strong>{review.votes}</strong>
      </p>
      <p>
        Category: <strong>{review.category}</strong>
      </p>
    </div>
  );
}

export default ReviewCard;
