import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import React, {useContext} from 'react'
import {AppContext} from '../../context/AppContext'

export default function AddRemoveBookList({books}) {
    const {markAsRead, clearReadingList} = useContext(AppContext);

    return (
        <ButtonGroup sx={{margin:"auto"}}>
            <IconButton key="delete" onClick={()=>{clearReadingList(books)}}>
            <DeleteForeverTwoToneIcon fontSize="small"/>
            </IconButton>
            <IconButton  key="rm" onClick={()=>{markAsRead(books)}}>
            <PlaylistRemoveIcon fontSize="small"/>
            </IconButton>
        </ButtonGroup>
    )
};