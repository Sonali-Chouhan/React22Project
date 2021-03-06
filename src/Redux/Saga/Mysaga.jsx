import { put, takeEvery } from "redux-saga/effects";
import { DELETE_USER, DELETE_USER_UP, EDIT_USER, EDIT_USER_UP, LOGIN_USER, lOGIN_USER_UP, LOGOUT_USER, LOGOUT_USER_UP, REGISTER_USER, REGISTER_USER_UP, UPDATE_USER, UPDATE_USER_UP } from "../Actiontype";

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
function* Deleteuser(action) { 
  yield put({
    type:DELETE_USER_UP,
    payload: action.payload,
  });
}
function* Edituser(action) { 
  yield put({
    type:EDIT_USER_UP,
    payload: action.payload,
  });
}
function* Updateuser(action) { 
  yield put({
    type:UPDATE_USER_UP,
    payload:action.payload,
  });
}
function * Logoutuser(){
  yield put({
      type:LOGOUT_USER_UP,
  })
}

export function* Mysaga() {
  yield takeEvery(REGISTER_USER, Registeruser);
  yield takeEvery(LOGIN_USER,Loginuser);
  yield takeEvery(DELETE_USER,Deleteuser);
  yield takeEvery(EDIT_USER,Edituser);
  yield takeEvery(UPDATE_USER,Updateuser);
  yield takeEvery(LOGOUT_USER,Logoutuser);
}
