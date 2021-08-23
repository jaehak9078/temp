/* 액션 타입 선언 */
const SET_USER = "users/SET_USER";

/* 액션 생성함수 선언 */

export const setUser = (info) => ({
  type: SET_USER,
  user: {
    userid: info.userid,
    username: info.username,
  },
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  user: {
    userid: "",
    username: "",
  },
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          userid: action.userid,
          username: action.username,
        },
      };
    default:
      return state;
  }
}
