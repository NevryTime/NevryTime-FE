import React from 'react'

import { MyWithDrawlContainer } from './style';
import { InputBox } from '@/src/components/InputBox';
import { Button } from '@/src/components/Button';

function WithDrawlView() {
  return (
    <MyWithDrawlContainer>
    <div>회원 탈퇴</div>
    <div>
      <InputBox
        width={430}
        height={40}
        placeholder={'계정 비밀번호'}
        borderRadius={12}
      />
    </div>
    <div>
      <Button width={430} height={40} borderRadius={12}>
        회원 탈퇴
      </Button>
    </div>
  </MyWithDrawlContainer>
  )
}

export default WithDrawlView