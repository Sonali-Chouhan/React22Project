import {all} from "redux-saga/effects"
import { Mysaga } from "./Mysaga";

export default function* rootSaga() {
    yield all([
        Mysaga()
        
    ]);
}