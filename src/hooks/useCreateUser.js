import { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import { postUser } from '../api/apiUser'
import { AppContext } from '../context/AppContext'

export default function useCreateUser(newUser) {   
    const {setAlert} =useContext(AppContext)

    useEffect(
        ()=>{
            let response;
            const source = CancelToken.source()
            const createUser=async()=>{
                response = await postUser(newUser.email, newUser.firstName, newUser.lastName, newUser.password, source.token);
                if (response){
                    setAlert({msg:`The user ${newUser.firstName} ${newUser.lastName} has been Created`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`There was an error creating the user`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(newUser?.email){
                createUser();
            };
            return ()=>{source.cancel()}
        },[newUser]
    )

}