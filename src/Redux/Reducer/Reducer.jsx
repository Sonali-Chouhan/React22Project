import {
  DELETE_USER_UP,
  EDIT_USER_UP,
  lOGIN_USER_UP,
  LOGOUT_USER_UP,
  REGISTER_USER_UP,
  UPDATE_USER_UP,
} from "../Actiontype";
const initialState = {
  login:[],
  Register_user: localStorage.getItem("register")
    ? JSON.parse(localStorage.getItem("register"))
    : [],
    isAuth: localStorage.getItem("token") ?  localStorage.getItem("token") : false

};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_UP:
      const data = state.Register_user;
      data.push(action.payload);
      localStorage.setItem("register", JSON.stringify(data));
      return {
        ...state,
        Register_user: [...data],
        create:action.payload
      };
    case lOGIN_USER_UP:
      var Token,message
      
      const object = localStorage.getItem("register");
      var record = JSON.parse(object);
      record?.forEach((element) => {
        if (
          element.password === action.payload.password &&
          element.email === action.payload.email
        ) {
           Token = "gsadhy3724351/323knmds./309023473247";
           localStorage.setItem("token", JSON.stringify(Token));
           message = true;
        }
      });
      const ff=state.login
      ff.push(action.payload)
      localStorage.setItem("login", JSON.stringify(ff))

      return {
        ...state,
        isAuth:Token,
        message:message ,
        login:action.payload

      };
    case DELETE_USER_UP:
     
      let Delete = JSON.parse(localStorage.getItem("register"));
      Delete.splice(action.payload, 1);
      localStorage.setItem("register", JSON.stringify(Delete));
      return {
        ...state,
        Register_user:[...Delete],
        delete:Delete
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
        Register_user:Update,
        Updatedata:Update
      };
    case LOGOUT_USER_UP:
      localStorage.removeItem('token')
        return{
          ...state,
          isAuth:false 
        }
    default:
      return state;
  }
};
export default Reducer;