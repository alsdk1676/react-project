import React from 'react';
import S from './style';

// span 아이디, input
// span 비밀번호, input
// input태그의 width, height는 props로 받아서 동적으로 지정하기

const Styled05 = () => {
  return (
    <>
      <div>
        <span>아이디</span><S.Input width={300} height={50} type='text' placeholder='아이디를 입력하세요.' />
      </div>
      <div>
        <span>비밀번호</span><S.Input width={300} height={10} type='password' placeholder='비밀번호를 입력하세요.' />
      </div>
    </>
  );
};

export default Styled05;