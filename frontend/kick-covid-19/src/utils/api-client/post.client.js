module.exports = (apiClient) => ({
    getAll: () => apiClient.get('api/posts'),
    addPost: (post) => apiClient.post('api/posts', { data: post }),
    getPost: (postId) => apiClient.get(`api/posts${postId}`),
    updatePost: (postId, post) =>
        apiClient.put(`/post/${postId}`, { data: post }),
    deletePost: (postId) => apiClient.delete(`api/post/${postId}`),
});