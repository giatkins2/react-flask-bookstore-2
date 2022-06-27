const bookActions={
    addToReadingList: 'addToReadingList',
    markAsRead: 'markAsRead',
    clearReadingList: 'clearReadingList'
};

function bookReducer(bookList, {type, books}){
    switch(type){
        case bookActions.addToReadingList:
            return [...bookList, books];

        case bookActions.markAsRead:
            let newList = bookList.slice();
            for (let bookToRemove of newList){
                if (bookToRemove === books.id){
                    newList.splice(newList.indexOf(bookToRemove), 1)
                    return newList
                }
            }
            return newList
        case bookActions.clearReadingList:
            return []
        default:
            throw new Error('Error')
    };
};

export {
    bookReducer,
    bookActions
};