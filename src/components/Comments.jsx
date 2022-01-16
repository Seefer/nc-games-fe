import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ comment_count }) => {
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsById(review_id)
      .then((result) => {
        setIsLoading(false);
        setComment(result);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, []);

  return (
    <div className="mt-3">
      <p className="font-bold uppercase ">{comment_count} Comments:</p>
      <div>
        {comment.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
