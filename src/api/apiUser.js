import apiClientNoAuth from './clientNoAuth'
import apiClientTokenAuth from './clientTokenAuth'

const endpoint = '/user'

export const postUser = async (email, firstName, lastName, password, cancelToken)=>{
    let error;
    let user;

    const response = await apiClientNoAuth(cancelToken).post(endpoint,{email:email,first_name:firstName,last_name:lastName,password:password});
    if(response.ok){
        user=response.data
    }else{
        error="Please try again."
    }
    return{
        error,
        user,
    }
}

export const putUser = async(token, data, cancelToken)=>{
    let error;
    let user;

    const response = await apiClientTokenAuth(token).put(endpoint,data);
    if(response.ok){
        user=response.data
    }else{
        error="Unexpected error."
    }
    return{
        error,
        user,
    }
}

export const deleteUser = async(token, cancelToken)=>{
    let error;
    let user;

    const response = await apiClientTokenAuth(token).delete(endpoint);
    if(response.ok){
        user=response.data
    }else{
        error="Unexpected error."
    }
    return{
        error,
        user,
    }
}