export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  name?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};
