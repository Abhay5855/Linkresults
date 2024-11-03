import { FC } from 'react';
import { InputLabelProps } from '../../../types/input.types';

export const InputLabel: FC<InputLabelProps> = ({ label, required }) => {
  if (!label) return null;
  
  return (
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  );
};