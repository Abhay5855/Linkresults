import { FC } from 'react';
import { InputHelperTextProps } from '../../../types/input.types';

export const InputHelperText: FC<InputHelperTextProps> = ({ helperText }) => {
  if (!helperText) return null;
  
  return <p className="text-sm text-gray-500">{helperText}</p>;
};