import React from "react";

const Post = ({ body }) => (
  <div class="shadow p-4 bg-white">
    <div class="text-left">
      <h3 class="mb-2 text-gray-700">Card Title</h3>
      <p class="text-grey-600 text-sm">{body}</p>
    </div>
    ​
  </div>
);

export default Post;
