
import { ButtonContainer } from "./styles";

const Button = ({label, variant="primary", onClick}) => {
    return (
      <ButtonContainer variant={variant} onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;  	