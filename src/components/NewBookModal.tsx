import { Box, Button, Modal, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useFetch } from "../hooks/useFetch";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function NewBookModal(props: any) {
    const { request } = useFetch()
    const handleSumit = (e: any) => {
        e.preventDefault()
        // Тут должен быть запрос, добавляющий книгу, его нет)
        // const formData = new FormData(e.target)
        // request({
        //     url: 'https://superhero-search.p.rapidapi.com/api/villains',
        //     method: 'POST',
        //     body: formData
        // })
        setTimeout(() => {
            props.handleClose()
            props.getBooks()
        }, 500)
    }
    return (
        <div>
            <Modal
                open={true}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={e => handleSumit(e)}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Создать книгу
                        </Typography>
                        <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField name="name" id="outlined-basic" label="Название книги" variant="outlined" />
                            <TextField name="author" id="outlined-basic" label="Автор" variant="outlined" />
                            <TextField name="year" id="outlined-basic" label="Год издания" variant="outlined" />
                            <TextareaAutosize
                                name="content"
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Контент"
                                style={{ maxHeight: 300, padding: 5 }}
                            />
                            <input name="image" type="file" />
                            <input className="cursor-pointer" type="submit" value="Создать" />
                        </Box>
                    </Box>
                </form>
            </Modal>
        </div>
    )
}

export default NewBookModal;