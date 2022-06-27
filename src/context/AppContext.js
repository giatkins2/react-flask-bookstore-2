import React, { createContext, useEffect, useState, useReducer } from 'react';
import { bookReducer, bookActions } from '../reducers/bookReducers';

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const getUserFromLS=()=>{
        let user = localStorage.getItem('user');
        if(user){
            return JSON.parse(user)
        }
    }

    const [user, _setUser]=useState(getUserFromLS());
    const [alert, setAlert]=useState({});

    const getBooksFromLS = ()=>{
        let bookList = localStorage.getItem('books');
        if (bookList){
            return JSON.parse(bookList)
        };
        return []
    };

    const [book, setBook] = useState({});
    const [bookList, dispatch] = useReducer(bookReducer, getBooksFromLS())

    useEffect(
        ()=>{
            localStorage.setItem('bookList', JSON.stringify(bookList))
        },
        [bookList]
    )

    const values = {
        user,
        setUser:(user)=>{
            localStorage.setItem('user', JSON.stringify(user))
            _setUser(user)
        },
        alert,
        setAlert,
        book,
        setBook,
        bookList,
        addToReadingList:(book)=>{
            dispatch({type: bookActions.addToReadingList, book})
        },
        markAsRead: (book)=>{
            dispatch({type: bookActions.markAsRead, book})
        },
        clearReadingList: (book)=>{
            dispatch({type: bookActions.clearReadingList, book})
        }
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider