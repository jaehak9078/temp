import styled from "styled-components";

// 컨테이너 리스트
export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Container6 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Container7 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Container8 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BetweenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const EndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// 컨테이너 리스트 끝

// 텍스트 박스 리스트
export const TextBox1 = styled.div`
  color: #aaaaaa;
  font-size: 18px;
`;
export const TextBox2 = styled.div`
  color: #00cdcd;
  font-size: 18px;
`;
export const TextBox3 = styled.div`
  color: #ffffff;
  font-size: 18px;
`;
export const TextBox4 = styled.div`
  color: #eeeeee;
  font-size: 18px;
`;
export const TextBox5 = styled.div`
  color: #ffae00;
  font-size: 18px;
`;

export const TitleBox1 = styled.div`
  color: #ffffff;
  font-size: 40px;
  letter-spacing: -2px;
`;

export const TitleBox2 = styled.div`
  color: #eeeeee;
  font-size: 26px;
  letter-spacing: -2px;
`;
// 텍스트 박스 끝

//라인 시작

export const Line1 = styled.div`
  width: 90%;
  height: 1px;
  border: solid 1px #333333;
  background-color: #333333;
`;
// 두꺼운 선
export const Line2 = styled.div`
  width: 100%;
  height: 1px;
  border: solid 1px #333333;
  background-color: #333333;
`;
// 얇은 선
export const Line3 = styled.div`
  width: 100%;
  height: 1px;
  border-top: solid 1px #333333;
  /* background-color: #333333; */
`;

//라인 끝

export const InputBox1 = styled.input`
  width: 100%;
  height: 18px;
  /* margin: 76px 296px 71px 61px; */
  padding: 19px 30px 19px 30px;
  background-color: #333333;
  color: #aaaaaa;
  font-size: 18px;
  font-family: "Noto Sans CJK KR";
  &::placeholder {
    color: #aaaaaa;
    font-size: 18px;
    font-family: "Noto Sans CJK KR";
  }
`;

export const ContentBox = styled.div`
  font-size: 18px;
  color: #aaaaaa;
  text-align: center;
  vertical-align: center;
  display: flex;
`;

export const Elipse = styled.div`
  width: 27px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #3cb44a;
  margin-right: 10px;
  border-radius: 50%;
`;
