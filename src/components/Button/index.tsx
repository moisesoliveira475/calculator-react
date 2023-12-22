import { ButtonContainer } from './style'

interface IButtonProps {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({label, onClick}: IButtonProps) => {
    return(
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    )
}

export default Button;