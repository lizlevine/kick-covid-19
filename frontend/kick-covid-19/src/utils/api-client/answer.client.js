module.exports = (apiClient) => ({
    getAll: () => apiClient.get('api/answers'),
    addAnswer: (answer) => apiClient.post('api/answers', { data: answer }),
    getAnswer: (answerId) => apiClient.get(`api/answers${answerId}`),
    updateAnswer: (answerId, answer) =>
        apiClient.put(`/answer/${answerId}`, { data: answer }),
    deleteAnswer: (answerId) => apiClient.delete(`api/answer/${answerId}`),
});