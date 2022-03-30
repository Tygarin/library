import { TableCell, TableRow } from "@mui/material";
import bookType from "../interfaces/book";

function Book(props: bookType) {
    const { type, bookData } = props
    const grid = (
        <div
            onClick={() => props.handleClick()}
            className="relative w-40 cursor-pointer">
            <div
                style={{ backgroundImage: 'url(' + bookData.images.lg + ')' }}
                className="bg-cover bg-no-repeat relative rounded-lg min-h-bookHeight book">

            </div>
            <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-50">
                <p>Книга: {bookData.name}</p>
                <p>Автор: {bookData.biography.publisher}</p>
            </div>
        </div>
    )
    const table = (
        <TableRow
            onClick={() => props.handleClick()}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}>
            <TableCell scope="row">
                {bookData.name}
            </TableCell>
            <TableCell align="right">{bookData.biography.firstAppearance}</TableCell>
            <TableCell align="right">{bookData.biography.publisher}</TableCell>
            <TableCell align="right">{bookData.appearance.gender}</TableCell>
        </TableRow>
    )
    return (
        <>
            {type === 'table' && table}
            {type === 'grid' && grid}
        </>
    )
}

export default Book;