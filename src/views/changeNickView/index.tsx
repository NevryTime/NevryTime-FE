import React from 'react'

import { MyNickContainer } from './style';
import { InputBox } from '@/src/components/InputBox';
import { Button } from '@/src/components/Button';

function ChangeNickView() {
  return (
    <MyNickContainer>
    <div>닉네임 설정</div>
    <div>
      <InputBox
        width={430}
        height={40}
        placeholder={'닉네임'}
        borderRadius={12}
      />
    </div>
    <div>
      <Button width={430} height={40} borderRadius={12}>
        닉네임 설정
      </Button>
    </div>
  </MyNickContainer>
  )
}

export default ChangeNickView