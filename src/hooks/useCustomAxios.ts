'use client';
import { customAxios } from '../axios/customAxios';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRefreshToken } from '../hooks/useRefreshToken';

const useCustomAxios = () => {
  const { data: session } = useSession();
  const refreshToken = useRefreshToken();

  useEffect(() => {
    const requestIntercept = customAxios.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization'] && session?.user?.accessToken) {
          config.headers[
            'Authorization'
          ] = `Bearer ${session?.user?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = customAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await refreshToken();
          prevRequest.headers[
            'Authorization'
          ] = `Bearer ${session?.user.accessToken}`;
          return customAxios(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      customAxios.interceptors.request.eject(requestIntercept);
      customAxios.interceptors.response.eject(responseIntercept);
    };
  }, [session, refreshToken]);

  return customAxios;
};

export default useCustomAxios;
