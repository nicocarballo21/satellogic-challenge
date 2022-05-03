import {
  StyledCheckBoxWrapper,
  StyledCheckBox,
  StyledCheckBoxLabel,
} from "./styles";
import { SwitchProps } from ".";

const Switch = ({ switchState, onChange }: SwitchProps) => {
  return (
    <>
      <StyledCheckBoxWrapper>
        <StyledCheckBox
          checked={switchState}
          onChange={onChange}
          id="checkbox"
          type="checkbox"
        />
        <StyledCheckBoxLabel htmlFor="checkbox" />
      </StyledCheckBoxWrapper>
    </>
  );
};

export default Switch;
