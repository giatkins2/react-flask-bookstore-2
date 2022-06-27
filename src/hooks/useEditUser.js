import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { CancelToken } from 'apisauce';
import { putUser } from '../api/apiUser';


export default function useEditUser(activeUser) {
    const {user, setAlert} = useContext(AppContext)
    

    useEffect(
        ()=>{
            let response;
            const source = CancelToken.source()
            const editUser = async() =>{
                response = await putUser(user.token, activeUser, source.token);
                if (response){
                    setAlert({msg:'You have successfully updated your profile', })
                }else if (response !== undefined && response ===false ){
                    setAlert({msg:'Please reauthorize your account, '})
                }
            }
            if (activeUser?.token){
                editUser()
            };
            return ()=>{source.cancel()}
        },[activeUser]
    )
};