import {
  DELETE_USER_UP,
  EDIT_USER_UP,
  lOGIN_USER_UP,
  REGISTER_USER_UP,
  UPDATE_USER_UP,
} from "../Actiontype";

const initialState = {
  Register_user: localStorage.getItem("register")
    ? JSON.parse(localStorage.getItem("register"))
    : [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_UP:
      const data = state.Register_user;
      data.push(action.payload);
      localStorage.setItem("register", JSON.stringify(data));
      return {
        ...state,
        Register: [...state.Register_user],
        create:action.payload
      };
    case lOGIN_USER_UP:
      const object = localStorage.getItem("register");
      var record = JSON.parse(object);
      record?.forEach((element) => {
        if (
          element.password === action.payload.password &&
          element.email === action.payload.email
        ) {
          const Token = "gsadhy3724351/323knmds./309023473247";
          localStorage.setItem("token", JSON.stringify(Token));
        }
      });
      return {
        ...state,
      };
    case DELETE_USER_UP:
      let Delete = JSON.parse(localStorage.getItem("register"));
      Delete.splice(action.payload, 1);
      localStorage.setItem("register", JSON.stringify(Delete));
      return {
        ...state,
        user:[...Delete] ,
      };
    case EDIT_USER_UP:
      let alldata = JSON.parse(localStorage.getItem("register"));
      const Record = alldata[action.payload];
      console.log("dd0", Record);
      return {
        ...state,
        isEdit: Record,
        id:action.payload,
      };
    case UPDATE_USER_UP:
      const Update=JSON.parse(localStorage.getItem("register"));
      const Updatedata=action.payload
       Update.splice(action.payload.id,1,Updatedata);
       localStorage.setItem("register", JSON.stringify(Update));
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default Reducer;
