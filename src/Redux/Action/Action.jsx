import {
  DELETE_USER,
  EDIT_USER,
  LOGIN_USER,
  REGISTER_USER,
  UPDATE_USER,
} from "../Actiontype";

export const RegisterCreate = (data) => {
  return {
    type: REGISTER_USER,
    payload: data,
  };
};
export const LoginCreate = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
export const DeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const EditUser = (id) => {
  return {
    type: EDIT_USER,
    payload: id,
  };
};
export const UpdateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload:data,
  };
};
