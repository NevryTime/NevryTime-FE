'use client';

import { customAxios } from '../axios/customAxios';
import { refreshRequest } from '../axios/AuthAxios';
import { signIn, useSession } from 'next-auth/react';

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await customAxios.post('/auth/refresh', {
      accessToken: session?.user.accessToken,
      refreshToken: session?.user.refreshToken,
    });

    // const refreshData = {
    //   accessToken: session.user.accessToken,
    //   refreshToken: session.user.refreshToken,
    // };

    // const res = refreshRequest(refreshData);

    console.log('refresh:', res);

    if (session) session.user.accessToken = res.data.accessToken;
    else signIn();
  };
  return refreshToken;
};
