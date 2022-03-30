import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';

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

function BookInside(props: any) {
    const { handleClose, bookData } = props
    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img
                    src={`${bookData.images.lg}?w=164&h=164&fit=crop&auto=format`}
                    className="w-1/2"
                    loading="lazy"
                />
                {console.log(bookData)}
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {bookData.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>
                        Пол: {bookData.appearance.gender || 'not found'}
                    </Typography>
                    <Typography>
                        Раса: {bookData.appearance.race || 'not found'}
                    </Typography>
                </Box>
                <Typography>
                    Автор: {bookData.biography.publisher || 'not found'}
                </Typography>
                <Typography>
                    {bookData.connections.groupAffiliation || 'not found'}
                </Typography>

            </Box>
        </Modal>
    )
}

export default BookInside;