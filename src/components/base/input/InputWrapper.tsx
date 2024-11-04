import { FC } from 'react';
import { TextInput } from 'flowbite-react';
import { InputWrapperProps } from '../../../types/input.types';
import { InputLabel } from './InputLabel';
import { InputError } from './InputError';
import { InputHelperText } from './InputHelperText';
import { inputTheme } from '../../../utils/themes';
import { DEFAULT_INPUT_CONFIG } from '../../../constants/input.constants';

export const InputWrapper: FC<InputWrapperProps> = ({
  label = DEFAULT_INPUT_CONFIG.label,
  error,
  helperText,
  type = DEFAULT_INPUT_CONFIG.type,
  sizing = DEFAULT_INPUT_CONFIG.sizing,
  color = DEFAULT_INPUT_CONFIG.color,
  disabled,
  required,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <InputLabel label={label} required={required} />
      <TextInput
        type={type}
        sizing={sizing}
        disabled={disabled}
        required={required}
        color={color}
        theme={inputTheme}
        {...props}
      />
      <InputError error={error} />
      {!error && <InputHelperText helperText={helperText} />}
    </div>
  );
};