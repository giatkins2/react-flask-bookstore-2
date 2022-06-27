import React, {useState} from 'react';
import Button from '../components/Button';
import * as Yup from "yup";
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import useEditUser from '../hooks/useEditUser';
import useCreateUser from '../hooks/useCreateUser';
import useDeleteUser from '../hooks/useDeleteUser';

const FormSchema = Yup.object(
    {
        email: Yup.string().email("Must be a valid email format").required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        password: Yup.string().required()
    }
)

export default function RegisterForm({user}) {

    const [newUser, setNewUser] = useState({})
    const [editUser, setEditUser] = useState({})
    const [deleteUser, setDeleteUser] = useState({})

    useCreateUser(newUser)
    useEditUser(editUser)
    useDeleteUser(deleteUser)

    const initialValues ={
        email: user?.email ?? '',
        firstName: user?.firstName ?? '',
        lastName: user?.lastName ?? '',
        password: ""
    }

    const handleSubmit=(values, resetForm)=>{
        if (!user){
            setNewUser(values)
        }else{
            setEditUser({...values, id:user.id})
        }
        console.log(values)
        resetForm(initialValues);
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize: true
    })
    
    const handleDelete=()=>{
        setDeleteUser(user)
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="firstName"
                name="firstName"
                type="text"
                fullWidth
                sx={{mb:2, mt:2}}
                label="firstName"
                placeholder="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                id="lastName"
                name="lastName"
                type="text"
                fullWidth
                sx={{mb:2, mt:2}}
                label="lastName"
                placeholder="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
                id="email"
                name="email"
                type="text"
                fullWidth
                sx={{mb:2, mt:2}}
                label="email"
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                id="password"
                name="password"
                type="password"
                fullWidth
                sx={{mb:2}}
                label="password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" sx={{width:"100%", my:1}}>{user?'Edit User':'Create User'}</Button>

        </form>
    )
    }