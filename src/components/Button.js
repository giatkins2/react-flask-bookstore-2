import React from 'react'
import Button from '@mui/material/Button';

export default function myButton({children, variant, ...props}) {
    return (
        <Button color="primary" variant={variant??"contained"} {...props}>
            {children}
        </Button>
    )
}