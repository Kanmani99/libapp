
function fetchbook(done){

$.get('/api/book',function(data){
    done(data)
})
}
function createBookRow(book)
{
    return $(
        `<tr>
            <td>${book.id}</td>
            <td>${book.bid}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
        </tr>`
    )
}
$( function(){

    let booklist=$('#rank')
    fetchbook(function (books)
    {
        //booklist.epmty()
        for(book of books)
        {
            booklist.append(createBookRow(book))
        } 
    })
})