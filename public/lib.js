function bookUpdate(data)
{
    let bid=$('#bid')
    let name=$('#name')
    $.get('/api/book/1',function(data){
        done(data)
    });
    
}
function createbook(book)
{
    return $(`Book Name: ${book.name}<br>
    Book Author: ${book.author}<br>
    Book Edition Updated : ${book.bid}<br>`)
}
$(function(){

    let booklist=$('#bookupdated')
    bookUpdate(function (books)
    {
            booklist.append(createbook(books))
    })
})
