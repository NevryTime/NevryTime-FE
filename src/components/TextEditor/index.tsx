import React, { useState, Dispatch } from 'react';
import { useRouter } from 'next/router';

import { TextEditorContainer, OptionBox, Options } from './style';

import { InputBox } from '../InputBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

/** axios */
import useCustomAxios from '@/src/hooks/useCustomAxios';

interface propsType {
  boardId: number;
  setOpenTextArea: Dispatch<React.SetStateAction<boolean>>;
}

function TextEditor(props: propsType) {
  const axios = useCustomAxios();
  const router = useRouter();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onClickPostArticle = () => {
    const postData = {
      title: title,
      content: content,
      boardId: props.boardId,
      image: false,
      show: false,
    };

    console.log(postData);

    const postArticleRequest = async () => {
      await axios
        .post(`/api/content/create`, postData)
        .then((res) => {
          props.setOpenTextArea(false);
          router.push(`/${props.boardId}`);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (title !== '' && content !== '') {
      postArticleRequest();
    } else {
      alert('제목과 내용을 입력해주세요.');
    }
  };

  return (
    <TextEditorContainer>
      <div>
        <InputBox
          width={780}
          height={50}
          placeholder={'글 제목'}
          onChange={onChangeTitle}
        />
      </div>
      <div>
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={onChangeContent}
        ></textarea>
      </div>
      <OptionBox>
        <div>
          <FontAwesomeIcon icon={faPaperclip} />
        </div>
        <Options>
          <div>
            <input type="checkbox" defaultChecked={false} /> 익명
          </div>
          <div>
            <FontAwesomeIcon
              icon={faPencil}
              onClick={() => {
                onClickPostArticle();
              }}
            />
          </div>
        </Options>
      </OptionBox>
    </TextEditorContainer>
  );
}

export default TextEditor;
