import React, { useState, useEffect, Dispatch } from 'react';

import { PageContainer } from './style';
import { Button } from '@/src/components/Button';

interface pagenationType {
  totalPageCount: number;
  currentPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}

function Pagenation({
  totalPageCount,
  currentPage,
  setCurrentPage,
}: pagenationType) {
  const onClickPrevBtn = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNextBtn = () => {
    if (currentPage !== totalPageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <PageContainer>
      {currentPage === 0 ? (
        <div></div>
      ) : (
        <Button
          width={61}
          height={38}
          borderRadius={3}
          bgColor={'#ffffff'}
          color={'#c62917'}
          onClick={() => {
            onClickPrevBtn();
          }}
        >
          이전
        </Button>
      )}
      {totalPageCount - 1 === currentPage ? (
        <div></div>
      ) : (
        <Button
          width={61}
          height={38}
          borderRadius={3}
          bgColor={'#ffffff'}
          color={'#c62917'}
          onClick={() => {
            onClickNextBtn();
          }}
        >
          다음
        </Button>
      )}
    </PageContainer>
  );
}

export default Pagenation;
