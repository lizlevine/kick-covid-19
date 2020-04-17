import React, { useState, useEffect } from 'react';

import apiClient from '../utils/api-client';


const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);

    const login = React.useCallback(
        (creds) => {
            setIsLoading(true);
            apiClient.auth
                .login(creds)
                .then((user) => {
                    setIsLoading(false);
                    setIsSuccess(true);
                    setUser(user || null);
                })
                .catch(() => setIsLoading(false));
        },
        [setUser, setIsLoading, setIsSuccess]
    );

    const signup = React.useCallback(
        (creds) => {
            apiClient.auth
                .signup(creds)
                .then(({ data }) => {
                    setIsLoading(false);
                    setIsSuccess(true);
                    setUser(data.user || null);
                })
                .catch(() => setIsLoading(false));
        },
        [setUser]
    );

    const logout = React.useCallback(() => {
        apiClient.auth.logout();
        setUser(null);
    },  [setUser]);

    useEffect(() => {
        setIsLoading(true);
        apiClient.auth
            .me()
            .then(({ data }) => {
                setIsLoading(false);
                setIsSuccess(true);
                setUser(data.user || null);
            })
            .catch(() => {
                setIsLoading(false);
            });
    },  [setUser, setIsLoading, setIsSuccess]);

    if (isLoading) {
        return <h1>App loading...</h1>;
    }
    if (isSuccess) {
        return (
            <AuthContext.Provider
                value={{ user, login, signup, logout }}
                {...props}
            />    
        );
    }
    return <h1>Error loading the app: </h1>;
}
export function useAuth() {
    return React.useContext(AuthContext);
}
export default AuthProvider;