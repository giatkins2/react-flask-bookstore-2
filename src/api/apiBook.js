import apiClientNoAuth from './clientNoAuth'

const endpoint = '/book'

export const getBooks = async (cancelToken)=> {
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if(response.ok){
        books=response.data.books
    
    }else{
        error="An unexpected error has occurred."
    }
    
    return{
        error,
        books
    }
}


    