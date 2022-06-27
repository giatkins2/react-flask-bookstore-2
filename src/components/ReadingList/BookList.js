import {useContext} from 'react';
import BookItem from './Book';
import { AppContext } from '../../context/AppContext';
import Box from '@mui/material/Box';


export default function Book() {
    const {bookList} = useContext(AppContext)

    return (
        <>
        <Box sx={{mb:15}}>
        {
        [...new Set(bookList.map(JSON.stringify))]
            .map(JSON.parse)?.map((books)=><BookItem key={books.id} book={books}/>)
        }
        </Box>
        </>
    )
}