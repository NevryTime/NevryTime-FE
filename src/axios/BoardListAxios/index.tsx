import { customAxios } from '@/src/hooks/customAxios';

export const getBoardList = async () => {
  return await customAxios.get(`/api/board/`);
};
