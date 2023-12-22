import { InputContainer } from './style'

interface IInputProps {
    value: string;
}

const Input = ({value}: IInputProps) => {
    return (
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
    )
}

export default Input;