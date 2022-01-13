import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../utils/api";
import CommentCard from "./CommentCard";

function Comments({ comment_count }) {
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsById(review_id)
      .then((result) => {
        console.log(result);
        setIsLoading(false);
        setComment(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mt-3">
      <p className="font-bold uppercase ">{comment_count} Comments:</p>
      <div>
        {comment.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
