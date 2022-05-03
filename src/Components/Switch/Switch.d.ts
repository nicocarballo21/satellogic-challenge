export interface SwitchProps {
  switchState: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
