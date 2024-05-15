import { Autocomplete, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TVMAutocompleteInstance } from "./VMAutocomplete";

type props = {
	model: TVMAutocompleteInstance;
	className?: string;
}

const VAutocomplete: React.FC<props> = ({model, className}): JSX.Element => {
	const { value, options, isDisabled, key, label } = model;

    const handleChange = (newValue: string | null) => {
        model.onChange(newValue || '');
    };
	
    return (
        <Autocomplete
            className={className}
            value={value}
            options={options}
            key={key}
            disabled={isDisabled}
            onChange={(event, newValue) => handleChange(newValue)}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
};
export default observer(VAutocomplete);