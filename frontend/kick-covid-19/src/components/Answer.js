import React from "react";

function Answer(props) {
  const username = props.user ? props.user.userName : "";
  return (
    <div className="shadow p-4 bg-pink-100 hover:bg-pink-200 mt-4">
      <div className="text-left">
        <h3 className="mb-2 text-gray-700">{username}</h3>
        <p className="text-grey-600 text-sm">{props.body}</p>
      </div>
      ​
    </div>
  );
}
export default Answer;
