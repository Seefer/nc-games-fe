import React from "react";
import { formatDate } from "../utils/formatDate";

function CommentCard({ comment }) {
  return (
    <div className="p-2 m-1 mb-3 rounded-md bg-slate-300">
      <span className="italic font-normal">{comment.body}</span>
      <p className="pl-2 pr-2 italic font-semibold ">
        &mdash; {comment.author}
      </p>
      <p className="mt-2">Posted On: {formatDate(comment.created_at)}</p>
      <span className="pr-3">Votes: {comment.votes}</span>
      <button className="pr-1">⬆️</button>
      <button>⬇️</button>
    </div>
  );
}

export default CommentCard;
