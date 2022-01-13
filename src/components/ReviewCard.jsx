import React from "react";
import { Link } from "react-router-dom";

function ReviewCard({ review }) {
  return (
    <div className="flex p-10 ">
      <div className="max-w-md overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src={`${review.review_img_url}`}
          alt={"review"}
        ></img>
        <div>
          <p>|owner logo here|: {review.owner}</p>
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold uppercase">{review.title}</div>
          <p className="text-base text-gray-700">
            {`${review.review_body.slice(0, 150)}`}
            <strong>
              <Link to={`/reviews/${review.review_id}`}>
                <span> ...Read Full Review</span>
              </Link>
            </strong>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            Votes: {review.votes}
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            {review.comment_count} comments
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            Category: {review.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
