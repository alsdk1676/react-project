import { styled } from 'styled-components'
import { flexCenter, h1Bold } from '../../styles/common';
import { fadeIn } from '../../keyframes/keyframes';

const S = {};

  S.Styled01 = styled.div`
    width: 100px;
    height: 100px;
    border: solid 1px #333;
  `

  S.P = styled.p`
    font-size: 20px;
  `

  S.Strong = styled.strong`
    text-decoration: underline;
    text-decoration-color: tomato;
    letter-spacing: 20px;
  `

  S.Styled04 = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px gray;
  background-color: ${({backgroundColor}) =>  backgroundColor};
  `
  /* props.backgroundColor = blue // 통째로가 return 값! */
  /* background-color: ${({props}) => {return props.backgroundColor}}; */


  S.Input = styled.input`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
  `

  S.Container = styled.div`
    width: 500px;
    height: 500px;
    border: solid 1px blue;
    ${flexCenter}
  `

  S.Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: orange;
  `

  S.TextBox = styled.div`
    width: 200px;
    height: 200px;
    border: solid 1px #333;
    ${flexCenter}
  `

  S.P = styled.p`
    font-size: 16px;
    animation: ${fadeIn} 3s forwards;
  
    @media screen and (min-width: 0) and (max-width: 1920px){

    }
  `

  S.H1 = styled.h1`
    ${h1Bold}
  `

  S.FontAwesomeWrap = styled.div`
  
  `

export default S;