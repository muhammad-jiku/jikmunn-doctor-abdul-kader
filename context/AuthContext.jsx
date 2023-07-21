'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const signUpUser = async ({ username, email, password }) => {
    try {
      const { data } = await axios.post(
        // `${process.env.API_URL}/api/auth/sign-up`,
        `/api/auth/sign-up`,
        {
          username,
          email,
          password,
        }
      );

      if (data?.user) {
        router.push('/');
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const loadUser = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get('/api/auth/session?update');

      if (data?.user) {
        setUser(data?.user);
        router.replace('/dashboard/me');
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const updateProfile = async (formData) => {
    try {
      setLoading(true);

      const { data } = await axios.put(
        // `${process.env.API_URL}/api/v1/me/update`,
        `/api/v1/me/update`,
        formData,
        {
          headers: {
            // 'Content-Type': 'multipart/form-data',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('user data', data);

      if (data?.user) {
        loadUser();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.message);
    }
  };

  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        error,
        loading,
        user,
        setUser,
        signUpUser,
        updateProfile,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
