module.exports = (apiClient) => ({
    login: async ({ email, password }) => {
        const {
            data: { token, user },
        } = await apiClient.post('/auth/login', {
            email,
            password,
        });
        localStorage.setItem(process.env.REACT_APP_TOKEN_LOCAL_STORAGE_KEY, token);
        return user;
    },
    signup: ({ email, password }) =>
        apiClient.post('/users', { email, password }),
    logout: () =>
        localStorage.removeItem(process.env.REACT_APP_TOKEN_LOCAL_STORAGE_KEY),
    me: () => {
        const token = localStorage.getItem('__kickcovid19_token');
        return apiClient.get('/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
});