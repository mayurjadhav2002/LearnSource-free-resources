// userContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    // Check local storage for user data on component mount
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false)
    }
    setLoading(false)
  }, []);

  const login = (userData: React.SetStateAction<null>) => {
    // Save user data to local storage on login
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    // Remove user data from local storage on logout
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user,loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
