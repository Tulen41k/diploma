import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { TTextFieldModel } from "./createTextFieldModels";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
 field: {
    width: "70%"
 },
 container: {
    width: "60%"
 }
}))

export const AutoCompleteInput: React.FC<{
    textFieldModel: TTextFieldModel;
    index: number;
    handleInputChange: (index: number, value: string) => void;
    usedNames: string[];
}> = ({ textFieldModel, index, handleInputChange, usedNames }) => {
    const [inputValue, setInputValue] = useState('');
    const styles = useStyles();

    return (
        <Autocomplete className={styles.container}
            freeSolo
            options={usedNames}
            value={textFieldModel.value}
            onChange={(event, newValue) => handleInputChange(index, newValue || '')}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
                <TextField className={styles.field}
                    {...params}
                    label="Имя игрока"
                    variant="outlined"
                    onChange={(e) => handleInputChange(index, e.target.value)}
                />
            )}
        />
    );
};