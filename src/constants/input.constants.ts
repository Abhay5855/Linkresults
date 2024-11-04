import { InputSize, InputColor } from '../types/input.types';

export const INPUT_SIZES: Record<InputSize, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export const INPUT_COLORS: Record<InputColor, string> = {
  primary: 'primary',
  success: 'success',
  error: 'error',
};

export const DEFAULT_INPUT_CONFIG = {
  type: 'text',
  label: '',
  sizing: INPUT_SIZES.md as InputSize,
  color: INPUT_COLORS.primary as InputColor,
};