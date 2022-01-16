import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import UserProfile from "./UserProfile";

const ReviewCard = ({ review }) => {
  return (
    <div className="container">
      <div className="m-6 bg-gray-200 rounded shadow-md ">
        <img
          className="w-full rounded-b-none rounded-t-md "
          src={`${review.review_img_url}`}
          alt={"review"}
        ></img>
        <div>
          <UserProfile user={review.owner} />
        </div>
        <div className="px-6 py-4">
          <div className="mb-0 text-xl font-bold uppercase">{review.title}</div>
          <p className="mt-0 mb-2 font-semibold ">
            Posted On: {formatDate(review.created_at)}
          </p>
          <div className="text-base text-gray-700">
            {`${review.review_body.slice(0, 150)} ...`}
            <strong>
              <Link to={`/reviews/${review.review_id}`}>
                <p className="hover:text-gray-400"> ...Read Full Review</p>
              </Link>
            </strong>
          </div>
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
};

export default ReviewCard;
