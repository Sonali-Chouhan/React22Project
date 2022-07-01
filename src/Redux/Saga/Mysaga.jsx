import { put, takeEvery } from "redux-saga/effects";
import { LOGIN_USER, lOGIN_USER_UP, REGISTER_USER, REGISTER_USER_UP } from "../Actiontype";

function* Registeruser(action) { 
  
  yield put({
    type: REGISTER_USER_UP,
    payload: action.payload,
  });
}
function* Loginuser(action) { 
  yield put({
    type:lOGIN_USER_UP,
    payload: action.payload,
  });
}

export function* Mysaga() {
  yield takeEvery(REGISTER_USER, Registeruser);
  yield takeEvery(LOGIN_USER,Loginuser)
}
