
// const state = {
//     name: 'Daniel',
//     logged: true
// }

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch(action.type){
        case types.login:
            return{
                ...action.payload,
                logged: true
            }
        
        case types.logout:
            return{
                //No esparcimos el objeto payload
                logged: false
            }
        default:
            return state;
    }    
}