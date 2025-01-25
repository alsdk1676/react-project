import React from 'react';
import S from './style';

// 스타일드 컴포넌트 p, strong 태그를 만들고
// p태그는 "스타일 컴포넌트 사용!" 내용과 폰트 사이즈 20px
// strong 태그는 "처음 접하는 스타일" 밑줄, 자간 20px

const Styled03 = () => {
  return (
    <div>
      <S.P>스타일 컴포넌트 사용!😜</S.P>
      <S.Strong>처음 접하는 스타일😲</S.Strong>
    </div>
  );
};

export default Styled03;