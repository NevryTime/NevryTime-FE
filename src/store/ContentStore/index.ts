import { atom } from 'recoil';

/** 게시글 내용 전역 상태 (수정을 위한) */
export const contentAtom = atom({
  key: 'contentAtom',
  default: {
    id: null,
    boardName: null,
    nickName: null,
    title: null,
    content: null,
    scraps: null,
    commentCount: null,
    likes: null,
    createAt: null,
    image: false,
    show: false,
  },
});
