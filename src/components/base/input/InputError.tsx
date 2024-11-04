import { FC } from 'react';
import { InputErrorProps } from '../../../types/input.types';

export const InputError: FC<InputErrorProps> = ({ error }) => {
  if (!error) return null;
  
  return <p className="text-sm text-red-500">{error}</p>;
};