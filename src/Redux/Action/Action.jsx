import { LOGIN_USER, REGISTER_USER } from "../Actiontype";

export const RegisterCreate=(data)=>{
    
    return{
        type:REGISTER_USER,
        payload:data
}
}
export  const LoginCreate=(data)=>{
    return{
        type:LOGIN_USER,
        payload:data
    }
}
