import React from "react";

function Post(props) {
  return (
    <div className="shadow p-4 bg-white">
      <div className="text-left">
        <h3 className="mb-2 text-gray-700">Card Title</h3>
        <p className="text-grey-600 text-sm">{props.body.body}</p>
      </div>
      ​
    </div>
  );
}
export default Post;
