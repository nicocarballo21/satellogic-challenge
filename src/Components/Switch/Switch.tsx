import {
  StyledCheckBoxWrapper,
  StyledCheckBox,
  StyledCheckBoxLabel,
} from "./styles";

const Switch = () => {
  return (
    <>
      <StyledCheckBoxWrapper>
        <StyledCheckBox id="checkbox" type="checkbox" />
        <StyledCheckBoxLabel htmlFor="checkbox" />
      </StyledCheckBoxWrapper>
    </>
  );
};

export default Switch;
