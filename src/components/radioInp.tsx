import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { radioInput } from '../interfaces/book';

function RadioInput(props: radioInput) {
    return (
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={"grid"}
            onChange={e => props.onChange(e)}
        >
            <FormControlLabel value="grid" control={<Radio />} label="Grid" />
            <FormControlLabel value="table" control={<Radio />} label="Table" />
        </RadioGroup>
    )
}

export default RadioInput;