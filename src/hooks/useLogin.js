import {useEffect} from 'react';
import {getLogin} from  '../api/apiBasicAuth';
import { CancelToken } from 'apisauce';

export default function useLogin(loginCreds, setError, setUser, setLoginCreds) {
    useEffect(
        ()=>{
            const source = CancelToken.source()
            const login=async()=>{
                const response_object = await getLogin(loginCreds.email, loginCreds.password, source.token)
                if (response_object.user?.token){
                    console.log('logged in');
                    setUser(response_object.user);
                    setError(response_object.error);
                    setLoginCreds({});
                }
            };

            if (loginCreds.email && loginCreds.password){
                login();
            };
            return ()=>{
                source.cancel()
            }
        },
        [loginCreds, setLoginCreds, setUser, setError]
    )
}