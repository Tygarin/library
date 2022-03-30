import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import Book from "./book";
import BookInside from "./bookInside";

function Library(props: any) {
    const [modal, setModal] = useState(false)
    const [currentBook, setCurrentBook] = useState({})
    
    return (
        <div>
            {props.type === 'grid' && (
                <div className="relative flex flex-wrap p-10 gap-6 justify-center">
                    {props.books.map((e: any, i: any) =>
                        <Book
                            type={props.type}
                            key={i}
                            bookData={e}
                            handleClick={() => {
                                setModal(!modal)
                                setCurrentBook(e)
                            }}
                        />
                    )}
                </div>
            )}
            {props.type === 'table' && (
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Название книги</TableCell>
                                <TableCell align="right">Год издания</TableCell>
                                <TableCell align="right">Имя автора</TableCell>
                                <TableCell align="right">Жанр</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.books.map((e: any, i: any) =>
                                <Book
                                    type={props.type}
                                    key={i}
                                    bookData={e}
                                    handleClick={() => {
                                        setModal(!modal)
                                        setCurrentBook(e)
                                    }}
                                />
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            {modal &&
                <BookInside
                    handleClose={() => setModal(!modal)}
                    bookData={currentBook}
                />}
        </div>
    )
}

export default Library;