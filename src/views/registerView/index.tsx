/** 회원가입 뷰 */
import React, { useState } from 'react';
import { useRouter } from 'next/router';

/** styles */
import {
  RegisterContainer,
  RegisterTitleSection,
  RegisterInputSection,
  RegisterButtonSection,
} from './style';

/** component */
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

/** axios */
import { signUpRequest, signUpDataType } from '@/src/axios/AuthAxios';

function registerView() {
  // useRouter
  const router = useRouter();

  // 사용자가 입력한 아이디와 비밀번호
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // 사용자의 아이디를 입력 받는 함수
  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // 사용자의 비밀번호를 입력 받는 함수
  const onChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 회원가입 요청
  const onClickSignUpRequest = () => {
    const signUpData: signUpDataType = {
      name: name,
      password: password,
    };

    signUpRequest(signUpData)
      .then((res) => {
        console.log(res);
        alert("회원가입이 완료되었습니다.")
        router.push('/login');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

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
            onChange={onChangeUserId}
          />
        </div>
        <div>
          <InputBox
            width={360}
            height={40}
            type={'password'}
            placeholder={'비밀번호'}
            borderRadius={12}
            onChange={onChangeUserPassword}
          />
        </div>
      </RegisterInputSection>
      <RegisterButtonSection>
        <Button
          width={360}
          height={40}
          borderRadius={12}
          onClick={() => {
            onClickSignUpRequest();
          }}
        >
          회원가입
        </Button>
      </RegisterButtonSection>
    </RegisterContainer>
  );
}

export default registerView;
