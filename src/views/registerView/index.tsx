/** 회원가입 뷰 */
import React from 'react';

/** styles */
import {
  RegisterContainer,
  RegisterTitleSection,
  RegisterInputSection,
  RegisterButtonSection
} from './style';

/** component */
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

function registerView() {
  return (
    <RegisterContainer>
      <RegisterTitleSection>네브리타임 회원가입</RegisterTitleSection>
      <RegisterInputSection>
        <div>
          <InputBox
            width={360}
            height={40}
            placeholder={'아이디'}
            borderRadius={12}
          />
        </div>
        <div>
          <InputBox
            width={360}
            height={40}
            placeholder={'비밀번호'}
            borderRadius={12}
          />
        </div>
      </RegisterInputSection>
      <RegisterButtonSection>
        <Button width={360} height={40} borderRadius={12}>
          회원가입
        </Button>
      </RegisterButtonSection>
    </RegisterContainer>
  );
}

export default registerView;
