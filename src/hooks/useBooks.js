import {useEffect, useState } from 'react';
import {getBooks} from '../api/apiBook';
import { CancelToken } from 'apisauce';


export default function useBooks() {
    const [books, setBooks]=useState({});

    useEffect(
        ()=>{
            const source = CancelToken.source();
            (async()=>{
                const response = await getBooks(source.token);
                setBooks(response);

        })()
        return ()=>{source.cancel()}
    },[]

    )

    return books
}