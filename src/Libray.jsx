import Book from './Books'
export default function ({books}){
return(
    <div>
        <h2>My ALL Book</h2>
        <p>Total: {books.length}</p>
        <p>Address:</p>
        <ul>
            {
                books.map(books => <Book book={books}></Book> )
            }
        </ul>
    </div>
)

}