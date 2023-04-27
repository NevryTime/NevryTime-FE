import React from 'react';

import { MyPasswordContainer } from './style';
import { InputBox } from '@/src/components/InputBox';
import { Button } from '@/src/components/Button';

function ChangePassWordView() {
  return (
    <MyPasswordContainer>
      <div>비밀번호 변경</div>
      <div>
        <InputBox
          width={430}
          height={40}
          placeholder={'새 비밀번호'}
          borderRadius={12}
        />
      </div>
      <div>
        <InputBox
          width={430}
          height={40}
          placeholder={'새 비밀번호 확인'}
          borderRadius={12}
        />
      </div>
      <div>
        <InputBox
          width={430}
          height={40}
          placeholder={'현재 비밀번호'}
          borderRadius={12}
        />
      </div>
      <div>
        <Button width={430} height={40} borderRadius={12}>
          비밀번호 변경
        </Button>
      </div>
    </MyPasswordContainer>
  );
}

export default ChangePassWordView;
