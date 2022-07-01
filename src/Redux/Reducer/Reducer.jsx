import { lOGIN_USER_UP, REGISTER_USER_UP } from "../Actiontype";

const initialState = {
 Register_user:localStorage.getItem("register") ? JSON.parse(localStorage.getItem("register")):[]
};
const Reducer = (state = initialState, action)=>{
  switch (action.type) {
    case REGISTER_USER_UP:
      // state?.Register_user?.forEach(element=>{
        
      // })
      const data=state.Register_user;
      data.push(action.payload)
      localStorage.setItem("register",JSON.stringify(data))
      return {
        ...state,
        List:[...state.Register_user]
      };

    case lOGIN_USER_UP:
      const object = localStorage.getItem("register");
      var record = JSON.parse(object);
      debugger
      record?.filter((element) => {
        if (
          element.password === action.payload.password &&
          element.email === action.payload.email
        ) {
          const Token = "gsadhy3724351/323knmds./309023473247";
          localStorage.setItem("token", JSON.stringify(Token));
        }
              else {
                console.log("983894")
              }
            })
          
      

      return {
        ...state,
        
      };

    default:
      return state;
  }
};

export default Reducer;
