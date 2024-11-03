import { FC } from 'react';
import { TextInput, TextInputProps } from 'flowbite-react';
import { inputTheme } from '../../../utils/themes';

interface InputWrapperProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
}

export const InputWrapper: FC<InputWrapperProps> = ({
  label,
  error,
  helperText,
  type,
  sizing,
  disabled,
  required,
  color,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <TextInput
        type={type}
        sizing={sizing}
        disabled={disabled}
        required={required}
        color={color}
        theme={inputTheme}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};