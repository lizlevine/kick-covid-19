import React from "react";

function Post(props) {
  console.log(props);
  const username = props.user_id ? props.user_id.userName : "";
  return (
    <div className="shadow p-4 bg-white hover:bg-gray-100 mt-4">
      <div className="text-left">
        <h3 className="mb-2 text-gray-700">{username}</h3>
        <p className="text-grey-600 text-sm">{props.body}</p>
      </div>
      ​
    </div>
  );
}
export default Post;
