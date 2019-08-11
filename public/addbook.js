function addBook(bid,name,author,done){    
    window.alert("Adding book")
    $.post('/api/book',{
        bid:bid,
        name:name,
        author:author,
        },function(data){
            done(data)
        })
}
function clicksubmit(){
    let author=$('#author')
    let bname=$('#name')
    let bid=$('#bid')    
        addBook(
            bid.val(),
            bname.val(),
            author.val(),
            function addedBook(){
                window.alert("Added book"+bname.val()+"To Database")
            })
    }
