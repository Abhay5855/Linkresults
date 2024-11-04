import { TextInputProps } from 'flowbite-react';

export interface InputWrapperProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
}

export interface InputLabelProps {
  label: string;
  required?: boolean;
}

export interface InputErrorProps {
  error?: string;
}

export interface InputHelperTextProps {
  helperText?: string;
}

export type InputSize = 'sm' | 'md' | 'lg';
export type InputColor = 'primary' | 'success' | 'error';