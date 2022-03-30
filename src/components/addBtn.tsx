import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface AddBtn {
    className: string,
    onClick: Function
}

function AddBtn(props: AddBtn) {
    return (
        <div
            onClick={() => props.onClick()}
            className={props.className}>
            <AddCircleOutlineIcon sx={{ fontSize: 60, color: 'blue' }}/>
        </div>
    )
}

export default AddBtn;