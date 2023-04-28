import { customAxios } from '@/src/axios/customAxios';

export const getBoardList = async () => {
  return await customAxios.get(`/api/board/`);
};
