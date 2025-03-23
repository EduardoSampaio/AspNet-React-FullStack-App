import { TextField, TextFieldProps } from "@mui/material";
import { FieldValues, useController, UseControllerProps } from "react-hook-form";

type props<T extends FieldValues> = {
    label: string
} & UseControllerProps<T> & TextFieldProps

export default function TextInput<T extends FieldValues>(props: props<T>){
    const {field, fieldState} = useController({...props})



    return (
        <TextField 
        {...props} 
        {...field} 
        value={field.value || ''}
        fullWidth
        variant="outlined"
        error={!!fieldState.error}
        helperText={fieldState.error?.message} />
    )
}