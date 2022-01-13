import React from "react";

function UserProfile({ user }) {
  return (
    <div>
      <span>|owner 🖼️ here |</span>
      <span className="pl-2 font-semibold">{user}</span>
    </div>
  );
}

export default UserProfile;
